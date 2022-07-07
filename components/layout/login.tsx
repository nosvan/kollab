import { useSpring, animated } from '@react-spring/web';
import axios from 'axios';
import { UserCredentials } from 'lib/types/user';
import { Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import { setUserState } from 'state/redux/userSlice';

interface LoginProps {
  setSelection: Dispatch<SetStateAction<string>>;
}

export default function Login(props: LoginProps) {
  const dispatch = useDispatch();
  const modalSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 250 },
  });
  return (
    <animated.div style={modalSpring} className="flex flex-col">
      <div className="text-white text-center text-2xl mb-5">
        Log in to <span className="text-blue-700">kollab</span>
      </div>
      <div className="px-1">
        <form onSubmit={handleLogin}>
          <div className="flex flex-col">
            <label className="text-white">email</label>
            <input
              className="text-black rounded-xl px-2"
              type="text"
              required
              id="email"
              name="email"
            />
            <label className="text-white">password</label>
            <input
              className="text-black rounded-xl px-2"
              type="password"
              required
              id="password"
              name="password"
            />
            <div className="flex flex-row py-5 text-center space-x-1">
              <div
                onClick={() => props.setSelection('')}
                className="basis-2/5 bg-black border-2 border-white 
              hover:bg-gray-800 text-white rounded-xl px-1 cursor-pointer"
              >
                <span>{'back'}</span>
              </div>
              <button
                type="submit"
                className="basis-3/5 bg-blue-700 hover:bg-blue-600 
              w-full rounded-xl text-white"
              >
                Log in
              </button>
            </div>
          </div>
        </form>
      </div>
    </animated.div>
  );

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const userCreds: UserCredentials = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    try {
      await axios({
        method: 'post',
        url: '/api/login',
        data: JSON.stringify(userCreds),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        dispatch(setUserState(res.data));
      });
    } catch (error) {
      console.log(error);
    }
  }
}
