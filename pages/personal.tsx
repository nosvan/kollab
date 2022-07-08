import { withIronSessionSsr } from 'iron-session/next';
import { Layout } from 'components/layout/layout';
import { sessionOptions } from 'lib/iron_session';
import { UserSafe } from 'lib/types/user';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { TbArrowBigLeft, TbArrowBigRight } from 'react-icons/tb';
import TaskView from 'components/layout/task_view';
import ModalPopup from 'components/layout/modal';
import { getDays, incrementDate, decrementDate } from 'utils/dateUtils';
import { RootState } from 'state/redux/store';
import { Category } from 'lib/types/item';
import {
  setPersonalItems,
  setViewPersonalItemMode,
} from 'state/redux/personalSlice';
import Item from 'components/item/item';
import { setUserState } from 'state/redux/userSlice';
import axios from 'axios';

export default function User({ user }: { user: UserSafe }) {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!user.isLoggedIn) {
      router.push('/');
      return;
    }
    dispatch(setUserState({ ...user, currentTab: 'personal' }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const personalState = useSelector((state: RootState) => state.personal_store);

  useEffect(() => {
    async function getPersonalItems() {
      await axios({
        method: 'get',
        url: `/api/item/personal/item`,
        params: {
          category: Category.PERSONAL,
        },
      }).then((res) => {
        dispatch(setPersonalItems(res.data));
      });
    }
    getPersonalItems();
  }, []);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dayLayout, setDayLayout] = useState(7);
  const [days, setDays] = useState(() => getDays(dayLayout, selectedDate));

  useEffect(() => {
    setDays(getDays(dayLayout, selectedDate));
  }, [dayLayout, selectedDate]);

  return (
    <>
      <Layout>
        <div className="bg-black rounded-3xl p-5 text-white mt-2">
          <div className="flex flex-row flex-wrap items-center justify-between text-sm mb-1">
            <div className="flex flex-row items-center space-x-2 bg-stone-800 rounded-lg mx-1">
              <div
                onClick={() => handleDecrementDate()}
                className={`hover:bg-stone-700 cursor-pointer px-1 rounded-lg`}
              >
                <TbArrowBigLeft></TbArrowBigLeft>
              </div>
              <div
                onClick={() => handleSetDayLayout(1)}
                className={`hover:bg-stone-700 cursor-pointer px-1 rounded-lg ${
                  dayLayout === 1 ? 'bg-stone-700' : ''
                }`}
              >
                Day
              </div>
              <div
                onClick={() => handleSetDayLayout(7)}
                className={`hover:bg-stone-700 cursor-pointer px-1 rounded-lg ${
                  dayLayout === 7 ? 'bg-stone-700' : ''
                }`}
              >
                Week
              </div>
              <div
                onClick={() => handleSetDayLayout(30)}
                className={`hover:bg-stone-700 cursor-pointer px-1 rounded-lg ${
                  dayLayout === 30 ? 'bg-stone-700' : ''
                }`}
              >
                Month
              </div>
              <div
                onClick={() => handleIncrementDate()}
                className={`hover:bg-stone-700 cursor-pointer px-1 rounded-lg`}
              >
                <TbArrowBigRight></TbArrowBigRight>
              </div>
            </div>
          </div>
          <TaskView
            dayLayout={dayLayout}
            days={days}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            category={Category.PERSONAL}
            items={personalState.items}
          />
          {personalState.viewPersonalItemMode && (
            <ModalPopup
              modalId="view_personal_item_modal"
              modalOpen={setViewPersonalItemMode}
            >
              <Item item={personalState.item}></Item>
            </ModalPopup>
          )}
        </div>
      </Layout>
    </>
  );

  function handleIncrementDate() {
    setSelectedDate(incrementDate(selectedDate, dayLayout));
  }
  function handleDecrementDate() {
    setSelectedDate(decrementDate(selectedDate, dayLayout));
  }

  function handleSetDayLayout(newDayLayout: number) {
    setDayLayout(newDayLayout);
  }
}

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const session = req.session;
    let user: UserSafe = {
      id: -999,
      first_name: '',
      last_name: '',
      email: '',
      isLoggedIn: false,
    };
    if (Object.keys(session).length > 0) {
      user = {
        id: session.userSession.id,
        first_name: session.userSession.first_name,
        last_name: session.userSession.last_name,
        email: session.userSession.email,
        isLoggedIn: true,
      };
    }
    return {
      props: {
        user,
      },
    };
  },
  sessionOptions
);
