import { withIronSessionSsr } from 'iron-session/next';
import Layout from '../components/layout';
import prisma from '../lib/prisma';
import { sessionOptions } from '../lib/iron_session';
import { UserSafe, UserSession } from '../lib/types/user';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserState } from '../state/redux/userSlice';

export default function User({ user }: { user: UserSafe }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUserState(user));
  }, [dispatch, user]);
  return (
    <>
      <Layout>
        <h1>User Page</h1>
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
