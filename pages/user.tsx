import { withIronSessionSsr } from 'iron-session/next';
import Layout from '../components/layout';
import prisma from '../lib/prisma';
import { sessionOptions } from '../lib/iron_session';
import { UserSafe, UserSession } from '../lib/types/user';

export default function User({ user }: { user: UserSafe }) {
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
      user = session.user;
    }
    return {
      props: {
        user,
      },
    };
  },
  sessionOptions
);
