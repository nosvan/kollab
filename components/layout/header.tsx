import axios from 'axios';
import { ApiRoutes } from 'lib/api/api_routes';
import { TabName } from 'lib/types/ui';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import { TbLogin, TbLogout, TbPlus, TbUserPlus } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'state/redux/store';
import { setUserState } from 'state/redux/userSlice';

interface HeaderProps {
  createNewTypeMode: boolean;
  setCreateNewTypeMode: Dispatch<SetStateAction<boolean>>;
}

export default function Header(props: HeaderProps) {
  const userState = useSelector((state: RootState) => state.user_store);
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div
      className="flex items-center flex-wrap justify-between p-5 mt-5  bg-black rounded-3xl
  text-white text-2xl font-bold"
    >
      <div className="flex flex-row items-center space-x-1">
        <div>{userState.user.currentTab}</div>
        {(userState.user.currentTab == TabName.CLASS ||
          userState.user.currentTab == TabName.GROUP) && (
          <TbPlus
            onClick={() => props.setCreateNewTypeMode(true)}
            className="hover:bg-stone-800 rounded-xl cursor-pointer"
          />
        )}
      </div>
      {/* Login / Create Account Buttons */}
      <div
        className="flex flex-row items-center space-x-2 font-medium 
    text-sm"
      >
        {!userState.user.isLoggedIn && (
          <div
            onClick={() => router.push('/login')}
            className="flex flex-row items-center
      bg-stone-800 p-1 space-x-1 rounded cursor-pointer"
          >
            <TbLogin />
            <div>Login</div>
          </div>
        )}
        {!userState.user.isLoggedIn && (
          <div
            onClick={() => router.push('/register')}
            className="flex flex-row items-center
      bg-stone-800 p-1 space-x-1 rounded cursor-pointer"
          >
            <TbUserPlus />
            <div>Register</div>
          </div>
        )}
        {userState.user.isLoggedIn && (
          <>
            <div
              onClick={() => handleLogout()}
              className="flex flex-row items-center hover:bg-stone-800 space-x-1 p-1 rounded-3xl cursor-pointer"
            >
              <TbLogout />
            </div>
          </>
        )}
      </div>
    </div>
  );

  async function handleLogout() {
    try {
      await axios({
        method: 'POST',
        url: ApiRoutes.LOGOUT,
      }).then((res) => {
        dispatch(setUserState(res.data));
      });
    } catch (error) {
      console.log(error);
    }
  }
}
