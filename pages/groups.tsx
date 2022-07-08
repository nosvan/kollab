import { withIronSessionSsr } from 'iron-session/next';
import { Layout } from 'components/layout/layout';
import { sessionOptions } from 'lib/iron_session';
import { UserSafe } from 'lib/types/user';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserState } from 'state/redux/userSlice';
import axios from 'axios';
import { GroupSafe } from 'lib/types/group';
import { RootState } from 'state/redux/store';
import {
  setCurrentGroup,
  setCurrentGroupAndGroups,
  setGroupItems,
  setViewGroupItemMode,
} from 'state/redux/groupSlice';
import { useRouter } from 'next/router';
import TaskView from 'components/layout/task_view';
import { decrementDate, getDays, incrementDate } from 'utils/dateUtils';
import { Category } from 'lib/types/item';
import { TbArrowBigLeft, TbArrowBigRight } from 'react-icons/tb';
import Item from 'components/item/item';
import ModalPopup from 'components/layout/modal';

export default function Groups({ user }: { user: UserSafe }) {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!user.isLoggedIn) {
      router.push('/');
      return;
    }
    dispatch(setUserState({ ...user, currentTab: 'groups' }));
    async function getUserGroups() {
      await axios({
        method: 'get',
        url: '/api/group/group',
      }).then((res) => {
        if (res.data.length > 0) dispatch(setCurrentGroupAndGroups(res.data));
      });
    }
    getUserGroups();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const groupState = useSelector((state: RootState) => state.group_store);

  useEffect(() => {
    async function getGroupItems() {
      await axios({
        method: 'get',
        url: `/api/item/item`,
        params: {
          category: Category.GROUP,
          category_id: groupState.group.id,
        },
      }).then((res) => {
        dispatch(setGroupItems(res.data));
      });
    }
    if (groupState.group.id !== -999) getGroupItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupState.group]);

  const [selectedDate, setSelectedDate] = useState(() => new Date());
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
            {groupState.groups && groupState.groups.length > 0 && (
              <select
                value={groupState.group.id}
                onChange={handleDropdownSelect}
                name="groups"
                id="groups-select"
                className="flex flex-col rounded-lg items-center text-white bg-stone-800 hover:bg-stone-700 cursor-pointer text-sm mx-1"
              >
                {groupState.groups.map((group: GroupSafe) => (
                  <option key={group.id} value={group.id}>
                    {group.name} (#{group.id})
                  </option>
                ))}
              </select>
            )}
            <div className="flex flex-row items-center space-x-2 bg-stone-800 rounded-lg mx-1">
              <div
                onClick={() => handleDecrementDate()}
                className={`hover:bg-stone-700 cursor-pointer rounded-lg`}
              >
                <TbArrowBigLeft></TbArrowBigLeft>
              </div>
              <div
                onClick={() => handleSetDayLayout(1)}
                className={`hover:bg-stone-700 cursor-pointer rounded-lg ${
                  dayLayout === 1 ? 'bg-stone-700' : ''
                }`}
              >
                Day
              </div>
              <div
                onClick={() => handleSetDayLayout(7)}
                className={`hover:bg-stone-700 cursor-pointer rounded-lg ${
                  dayLayout === 7 ? 'bg-stone-700' : ''
                }`}
              >
                Week
              </div>
              <div
                onClick={() => handleSetDayLayout(30)}
                className={`hover:bg-stone-700 cursor-pointer rounded-lg ${
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
          {groupState.groups.length > 0 && (
            <TaskView
              dayLayout={dayLayout}
              days={days}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              category={Category.GROUP}
              items={groupState.items}
            />
          )}
          {groupState.viewGroupItemMode && (
            <ModalPopup
              modalId="view_group_item_modal"
              modalOpen={setViewGroupItemMode}
            >
              <Item item={groupState.item}></Item>
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

  function handleDropdownSelect(event: {
    preventDefault: () => void;
    currentTarget: { value: any };
  }) {
    event.preventDefault();
    const groupId = event.currentTarget.value;
    const group = groupState.groups.find(
      (group: GroupSafe) => group.id == groupId
    );
    dispatch(setCurrentGroup(group));
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
