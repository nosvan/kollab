import prisma from 'lib/prisma';
import Layout from 'components/layout';
import { withIronSessionSsr } from 'iron-session/next';
import { sessionOptions } from 'lib/iron_session';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setUserState } from 'state/redux/userSlice';
import { UserSafe } from 'lib/types/user';

export default function Index({ user }: { user: UserSafe }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUserState({ ...user, currentTab: '' }));
  }, [dispatch, user]);
  return (
    <>
      <Layout>
        <div>Main page</div>
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
