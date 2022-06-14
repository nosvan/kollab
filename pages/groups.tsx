import prisma from '../lib/prisma';
import { withIronSessionSsr } from 'iron-session/next';
import Layout from '../components/layout';
import { sessionOptions } from '../lib/iron_session';
import { UserSafe, UserSession } from '../lib/types/user';

export default function Groups({ user }: { user: UserSafe }) {
  return (
    <>
      <Layout>
        <div>Groups page</div>
      </Layout>
    </>
  );
}

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps(context) {
    console.log('index.tsx getServerSideProps');
    const { cookies, session } = context.req;
    const t0k3n = cookies['iron-session-token'];
    const user: UserSafe = {
      id: -999,
      first_name: '',
      last_name: '',
      email: '',
      isLoggedIn: false,
    };
    if (!t0k3n) {
      console.log('index.tsx getServerSideProps no token');
    }
    if (t0k3n) {
      try {
        const userFromSession: UserSession = await session.user;
        const result = await prisma.user.findUnique({
          select: {
            id: true,
            first_name: true,
            last_name: true,
            email: true,
            password: true,
          },
          where: {
            email: userFromSession.email,
          },
        });
        if (userFromSession.password === result?.password) {
          user.id = result.id;
          user.first_name = result.first_name;
          user.last_name = result.last_name;
          user.email = result.email;
          user.isLoggedIn = true;
        }
      } catch (error) {
        console.log('error verifying session token');
        console.log(error);
      }
    }
    return {
      props: {
        user,
      },
    };
  },
  sessionOptions
);
