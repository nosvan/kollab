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
import {
  getDays,
  incrementDate,
  decrementDate,
  dateToLongMonthName,
} from 'utils/dateUtils';
import { RootState } from 'state/redux/store';
import { setOwnItems } from 'state/redux/ownSlice';
import Item from 'components/item/item';
import { setCurrentTab, setUserState } from 'state/redux/userSlice';
import axios from 'axios';
import { TabName } from 'lib/types/ui';
import { animated, useSpring } from '@react-spring/web';
import { ItemSafe } from 'lib/types/item';

export default function Own({ user }: { user: UserSafe }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const userState = useSelector((state: RootState) => state.user_store);

  useEffect(() => {
    if (!user.isLoggedIn) {
      router.push('/');
      return;
    }
    dispatch(setUserState({ ...user, currentTab: TabName.OWN }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ownState = useSelector((state: RootState) => state.own_store);

  useEffect(() => {
    async function getOwnItems() {
      await axios({
        method: 'get',
        url: `/api/item/own/item`,
      }).then((res) => {
        dispatch(setOwnItems(res.data));
      });
    }
    getOwnItems();
  }, []);

  const [timeInsensitiveItems, setTimeInsensitiveItems] = useState<ItemSafe[]>(
    []
  );
  const [timeSensitiveItems, setTimeSensitiveItems] = useState<ItemSafe[]>([]);

  useEffect(() => {
    if (ownState.items.length > 0) {
      setTimeInsensitiveItems(
        ownState.items.filter((item) => !item.time_sensitive_flag)
      );
      setTimeSensitiveItems(
        ownState.items.filter((item) => item.time_sensitive_flag)
      );
    }
  }, [ownState.items]);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dayLayout, setDayLayout] = useState(7);
  const [days, setDays] = useState(() => getDays(dayLayout, selectedDate));
  const [viewItemMode, setViewItemMode] = useState(false);

  useEffect(() => {
    setDays(getDays(dayLayout, selectedDate));
  }, [dayLayout, selectedDate]);

  const ownSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <>
      <Layout>
        <animated.div
          style={ownSpring}
          className="bg-black rounded-3xl p-5 text-white mt-2"
        >
          <div className="flex flex-row items-center justify-between text-sm mb-1">
            <div className="items-center text-xl pl-1 mx-1">
              {dateToLongMonthName(selectedDate)} {selectedDate.getFullYear()}
            </div>
            <div className="flex flex-row items-center">
              <div
                onClick={() => setSelectedDate(new Date())}
                className="bg-stone-800 hover:bg-stone-700 p-1 rounded-lg cursor-pointer"
              >
                Today
              </div>
              <div className="flex flex-row items-center space-x-2 p-1 bg-stone-800 rounded-lg mx-1">
                <div
                  onClick={() => handleDecrementDate()}
                  className={`hover:bg-stone-700 cursor-pointer px-1 rounded-lg`}
                >
                  <TbArrowBigLeft></TbArrowBigLeft>
                </div>
                <div
                  id="day-selector-id"
                  onClick={() => handleSetDayLayout(1)}
                  className={`hover:bg-stone-700 cursor-pointer px-1 rounded-lg ${
                    dayLayout === 1 ? 'bg-stone-700' : ''
                  }`}
                >
                  Day
                </div>
                <div
                  id="week-selector-id"
                  onClick={() => handleSetDayLayout(7)}
                  className={`hover:bg-stone-700 cursor-pointer px-1 rounded-lg ${
                    dayLayout === 7 ? 'bg-stone-700' : ''
                  }`}
                >
                  Week
                </div>
                <div
                  id="month-selector-id"
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
          </div>
          <TaskView
            dayLayout={dayLayout}
            days={days}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            itemsTimeSensitive={timeSensitiveItems}
            itemsTimeInsensitive={timeInsensitiveItems}
            setViewItemMode={setViewItemMode}
          />
          {viewItemMode && (
            <ModalPopup
              modalId="view_personal_item_modal"
              modalOpen={setViewItemMode}
            >
              <Item item={ownState.item}></Item>
            </ModalPopup>
          )}
        </animated.div>
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
    if (session.userSession) {
      user = session.userSession;
    }
    return {
      props: {
        user,
      },
    };
  },
  sessionOptions
);
