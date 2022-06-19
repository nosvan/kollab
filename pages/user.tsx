import { withIronSessionSsr } from 'iron-session/next';
import Layout from 'components/layout';
import prisma from 'lib/prisma';
import { sessionOptions } from 'lib/iron_session';
import { UserSafe, UserSession } from 'lib/types/user';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserState } from 'state/redux/userSlice';

export default function User({ user }: { user: UserSafe }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUserState({ ...user, currentTab: 'user' }));
  }, [dispatch, user]);
  return (
    <>
      <Layout>
        <div>
          <div className="mb-5">Your Overview</div>
          <div className="flex flex-row flex-wrap break-words">
            <div className="py-1 w-full sm:w-1/2 md:w-1/3 space-y-1 px-1">
              <div className="bg-stone-800 text-center text-sm rounded-xl">
                Monday
              </div>
              <div className="text-xs rounded text-black text-center bg-emerald-400 mx-1">
                Assignment 1
              </div>
              <div className="text-xs rounded text-center text-black bg-emerald-400 mx-1">
                Assignment 2
              </div>
              <div className="text-xs rounded text-center text-black bg-emerald-400 mx-1">
                Assignment 3
              </div>
            </div>
            <div className="py-1 w-full sm:w-1/2 md:w-1/3 space-y-1 px-1">
              <div className="bg-stone-800 text-center text-sm rounded-xl">
                Tuesday
              </div>
              <div className="text-xs rounded text-center text-black bg-rose-400 mx-1">
                Assignment 1
              </div>
              <div className="text-xs rounded text-center text-black bg-rose-400 mx-1">
                Assignment 2
              </div>
              <div className="text-xs rounded text-center text-black bg-rose-400 mx-1">
                Assignment 3
              </div>
            </div>
            <div className="py-1 w-full sm:w-1/2 md:w-1/3 space-y-1 px-1">
              <div className="bg-stone-800 text-center text-sm rounded-xl">
                Wednesday
              </div>
              <div className="text-xs rounded text-center text-black bg-cyan-400 mx-1">
                Assignment 1
              </div>
              <div className="text-xs rounded text-center text-black bg-cyan-400 mx-1">
                Assignment 2
              </div>
              <div className="text-xs rounded text-center text-black bg-cyan-400 mx-1">
                Assignment 3
              </div>
            </div>
            <div className="py-1 w-full sm:w-1/2 md:w-1/3 space-y-1 px-1">
              <div className="bg-stone-800 text-center text-sm rounded-xl">
                Thursday
              </div>
              <div className="text-xs rounded text-center text-black bg-fuchsia-400 mx-1">
                Assignment 1
              </div>
              <div className="text-xs rounded text-center text-black bg-fuchsia-400 mx-1">
                Assignment 2
              </div>
              <div className="text-xs rounded text-center text-black bg-fuchsia-400 mx-1">
                Assignment 3
              </div>
            </div>
            <div className="py-1 w-full sm:w-1/2 md:w-1/3 space-y-1 px-1">
              <div className="bg-stone-800 text-center text-sm rounded-xl">
                Friday
              </div>
              <div className="text-xs rounded text-center text-black bg-yellow-400 mx-1">
                Assignment 1
              </div>
              <div className="text-xs rounded text-center text-black bg-yellow-400 mx-1">
                Assignment 2
              </div>
              <div className="text-xs rounded text-center text-black bg-yellow-400 mx-1">
                Assignment 3
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps(context) {
    console.log('index.tsx getServerSideProps');
    console.log('session: ', context.req.session);
    const session = context.req.session;
    let user: UserSafe = {
      id: -999,
      first_name: '',
      last_name: '',
      email: '',
      isLoggedIn: false,
    };
    if (Object.keys(session).length > 0) {
      user = {
        id: session.user.id,
        first_name: session.user.first_name,
        last_name: session.user.last_name,
        email: session.user.email,
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
