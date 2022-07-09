import { Layout } from 'components/layout/layout';
import { withIronSessionSsr } from 'iron-session/next';
import { sessionOptions } from 'lib/iron_session';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setUserState } from 'state/redux/userSlice';
import { UserSafe } from 'lib/types/user';
import { useRouter } from 'next/router';
import { TabName } from 'lib/types/ui';

export default function Index({ user }: { user: UserSafe }) {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    if (!user.isLoggedIn) {
      router.push('/');
      return;
    }
    dispatch(setUserState({ ...user, currentTab: TabName.HOME }));
  }, []);
  return (
    <>
      <Layout>
        <div className="bg-black rounded-3xl p-5 text-white mt-2">
          Main page
        </div>
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
