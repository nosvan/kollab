import { Layout } from 'components/layout';
import { withIronSessionSsr } from 'iron-session/next';
import { sessionOptions } from 'lib/iron_session';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setUserState } from 'state/redux/userSlice';
import { UserSafe } from 'lib/types/user';
import { useRouter } from 'next/router';

export default function Index({ user }: { user: UserSafe }) {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    if (!user.isLoggedIn) {
      router.push('/');
      return;
    }
    dispatch(setUserState({ ...user, currentTab: '' }));
  }, []);
  return (
    <>
      <Layout>
        <div>Main page</div>
      </Layout>
    </>
  );
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
