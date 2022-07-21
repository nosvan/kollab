import { withIronSessionSsr } from 'iron-session/next';
import { Layout } from 'components/layout/layout';
import { sessionOptions } from 'lib/iron_session';
import { UserSafe } from 'lib/types/user';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTab, setUserState } from 'state/redux/userSlice';
import axios from 'axios';
import { RootState } from 'state/redux/store';
import { useRouter } from 'next/router';
import TaskView from 'components/layout/task_view';
import {
  dateToLongMonthName,
  decrementDate,
  getDays,
  incrementDate,
} from 'utils/dateUtils';
import { Category, ItemSafe } from 'lib/types/item';
import { TbArrowBigLeft, TbArrowBigRight } from 'react-icons/tb';
import Item from 'components/item/item';
import ModalPopup from 'components/layout/modal';
import { animated, useSpring } from '@react-spring/web';
import {
  setCurrentList,
  setCurrentListAndLists,
  setListItems,
} from 'state/redux/listSlice';
import { ListSafe, ListSliceState } from 'lib/types/list';

export default function Lists({ user }: { user: UserSafe }) {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!user.isLoggedIn) {
      router.push('/');
      return;
    }
    dispatch(setUserState({ ...user, currentTab: 'lists' }));
    async function getUserLists() {
      await axios({
        method: 'get',
        url: '/api/list/list',
      }).then((res) => {
        if (res.data.length > 0) dispatch(setCurrentListAndLists(res.data));
      });
    }
    getUserLists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listState: ListSliceState = useSelector(
    (state: RootState) => state.list_store
  );

  useEffect(() => {
    async function getListItems() {
      await axios({
        method: 'get',
        url: `/api/item/item`,
        params: {
          category: Category.LIST,
          category_id: listState.list.id,
        },
      }).then((res) => {
        dispatch(setListItems(res.data));
      });
    }
    if (listState.list.id !== -999) getListItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listState.list]);

  const [timeInsensitiveItems, setTimeInsensitiveItems] = useState<ItemSafe[]>(
    []
  );
  const [timeSensitiveItems, setTimeSensitiveItems] = useState<ItemSafe[]>([]);

  useEffect(() => {
    if (listState.items.length > 0) {
      setTimeInsensitiveItems(
        listState.items.filter((item) => !item.time_sensitive_flag)
      );
      setTimeSensitiveItems(
        listState.items.filter((item) => item.time_sensitive_flag)
      );
    }
  }, [listState.items]);

  const [selectedDate, setSelectedDate] = useState(() => new Date());
  const [dayLayout, setDayLayout] = useState(7);
  const [days, setDays] = useState(() => getDays(dayLayout, selectedDate));
  const [viewItemMode, setViewItemMode] = useState(false);

  useEffect(() => {
    setDays(getDays(dayLayout, selectedDate));
  }, [dayLayout, selectedDate]);

  const listSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <>
      <Layout>
        <animated.div
          style={listSpring}
          className="bg-black rounded-3xl p-5 text-white mt-2"
        >
          {listState.lists && listState.lists.length > 0 && (
            <>
              <span className="items-center text-xl mx-1 pl-1">
                {dateToLongMonthName(selectedDate)} {selectedDate.getFullYear()}
              </span>
              <div className="flex flex-row flex-wrap items-center justify-between text-sm">
                <select
                  value={listState.list.id}
                  onChange={handleDropdownSelect}
                  name="lists"
                  id="lists-select"
                  className="flex flex-col rounded-lg items-center text-white bg-stone-800 hover:bg-stone-700 cursor-pointer p-1 text-sm m-1"
                >
                  {listState.lists.map((list: ListSafe) => (
                    <option key={list.id} value={list.id}>
                      {list.name} (#{list.id})
                    </option>
                  ))}
                </select>
                <span className="flex flex-row items-center space-x-1 mx-1">
                  <div
                    onClick={() => setSelectedDate(new Date())}
                    className="bg-stone-800 hover:bg-stone-700 p-1 rounded-lg cursor-pointer"
                  >
                    Today
                  </div>
                  <div className="flex flex-row items-center space-x-2 p-1 bg-stone-800 rounded-lg">
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
                </span>
              </div>
            </>
          )}
          {listState.lists.length > 0 && (
            <TaskView
              dayLayout={dayLayout}
              days={days}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              category={Category.LIST}
              itemsTimeSensitive={timeSensitiveItems}
              itemsTimeInsensitive={timeInsensitiveItems}
              setViewItemMode={setViewItemMode}
            />
          )}
          {viewItemMode && (
            <ModalPopup
              modalId="view_list_item_modal"
              modalOpen={setViewItemMode}
            >
              <Item item={listState.item}></Item>
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

  function handleDropdownSelect(event: {
    preventDefault: () => void;
    currentTarget: { value: any };
  }) {
    event.preventDefault();
    const listId = event.currentTarget.value;
    const list = listState.lists.find((list: ListSafe) => list.id == listId);
    dispatch(setCurrentList(list));
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
