import { withIronSessionSsr } from 'iron-session/next';
import { Layout } from 'components/layout/layout';
import { sessionOptions } from 'lib/iron_session';
import { UserSafe } from 'lib/types/user';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserState } from 'state/redux/userSlice';
import { RootState } from 'state/redux/store';
import { ClassSafe } from 'lib/types/class';
import axios from 'axios';
import {
  setCurrentClassAndClasses,
  setCurrentClass,
  setClassItems,
} from 'state/redux/classSlice';
import { useRouter } from 'next/router';
import TaskView from 'components/layout/task_view';
import { getDays } from 'utils/dateUtils';
import { Category } from 'lib/types/item';

export default function Groups({ user }: { user: UserSafe }) {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!user.isLoggedIn) {
      router.push('/');
      return;
    }
    dispatch(setUserState({ ...user, currentTab: 'classes' }));
    async function getUserClasses() {
      await axios({
        method: 'get',
        url: '/api/classroom/class',
      }).then((res) => {
        dispatch(setCurrentClassAndClasses(res.data));
      });
    }
    getUserClasses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentClass: ClassSafe = useSelector(
    (state: RootState) => state.class_store.class
  );
  const userClasses: ClassSafe[] = useSelector(
    (state: RootState) => state.class_store.classes
  );
  const classItems = useSelector((state: RootState) => state.class_store.items);

  useEffect(() => {
    async function getGroupItems() {
      await axios({
        method: 'get',
        url: `/api/item/item`,
        params: {
          category: Category.CLASSROOM,
          category_id: currentClass.id,
        },
      }).then((res) => {
        dispatch(setClassItems(res.data));
      });
    }
    if (currentClass.id !== -999) getGroupItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentClass]);

  const [selectedDate, setSelectedDate] = useState(() => new Date());
  const [dayLayout, setDayLayout] = useState(7);
  const [days, setDays] = useState(() => getDays(dayLayout, selectedDate));

  return (
    <>
      <Layout>
        <div>
          <div className="flex flex-row flex-wrap space-y-1 items-center justify-between text-sm mb-1">
            {userClasses && userClasses.length > 0 && (
              <select
                value={currentClass.id}
                onChange={handleDropdownSelect}
                name="groups"
                id="groups-select"
                className="rounded-lg text-white text-base bg-stone-800 p-1 ml-1"
              >
                {userClasses.map((classroom: ClassSafe) => (
                  <option key={classroom.id} value={classroom.id}>
                    {classroom.name} (#{classroom.id})
                  </option>
                ))}
              </select>
            )}
            <div className="flex flex-row space-x-1 bg-stone-800 hover:bg-stone-700 cursor-pointer rounded-lg p-1 mx-1">
              <div
                onClick={() => handleSetDayLayout(1)}
                className={`hover:bg-stone-700 cursor-pointer px-1 rounded-lg`}
              >
                Day
              </div>
              <div
                onClick={() => handleSetDayLayout(7)}
                className={`hover:bg-stone-700 cursor-pointer px-1 rounded-lg`}
              >
                Week
              </div>
              <div
                onClick={() => handleSetDayLayout(30)}
                className={`hover:bg-stone-700 cursor-pointer px-1 rounded-lg`}
              >
                Month
              </div>
            </div>
          </div>
          <TaskView
            dayLayout={dayLayout}
            days={days}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            category={Category.CLASSROOM}
            items={classItems}
          ></TaskView>
        </div>
      </Layout>
    </>
  );

  function handleSetDayLayout(dayLayout: number) {
    setDayLayout(dayLayout);
    setDays(getDays(dayLayout, selectedDate));
  }

  function handleDropdownSelect(event: {
    preventDefault: () => void;
    currentTarget: { value: any };
  }) {
    event.preventDefault();
    const classroomId = event.currentTarget.value;
    const classroom = userClasses.find(
      (classroom: ClassSafe) => classroom.id == classroomId
    );
    dispatch(setCurrentClass(classroom));
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
