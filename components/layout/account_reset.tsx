import { animated, useSpring } from '@react-spring/web';
import { Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';

interface AccountResetProps {
  setSelection: Dispatch<SetStateAction<string>>;
}

export default function AccountReset(props: AccountResetProps) {
  const modalSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 250 },
  });
  return (
    <animated.div style={modalSpring} className="flex flex-col">
      <div className="text-white text-center text-2xl mb-5">
        Reset <span className="text-blue-700">kollab</span> password
      </div>
      <div className="px-1">
        <form onSubmit={handlePasswordReset}>
          <div className="flex flex-col">
            <label className="text-white">email to send reset link</label>
            <input
              className="text-black rounded-xl px-2"
              type="text"
              required
              id="email"
              name="email"
            />
            <label className="text-white">confirm email</label>
            <input
              className="text-black rounded-xl px-2"
              type="text"
              required
              id="confirm_email"
              name="confirm_email"
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
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </animated.div>
  );

  async function handlePasswordReset() {}
}
