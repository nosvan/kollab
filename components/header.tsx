import axios from 'axios';
import { TabName } from 'lib/types/ui';
import { useRouter } from 'next/router';
import { TbLogin, TbLogout, TbPlus, TbUserPlus } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'state/redux/store';
import { setCreateNewTypeMode, setUserState } from 'state/redux/userSlice';

export default function Header() {
  const user = useSelector((state: RootState) => state.user_store.user);
  const createNewTypeMode = useSelector(
    (state: RootState) => state.user_store.createNewTypeMode
  );
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div
      className="flex items-center flex-wrap justify-between p-5  bg-black rounded-3xl
  text-white text-2xl font-bold"
    >
      <div className="flex flex-row items-center space-x-1">
        <div>{user.currentTab == TabName.HOME ? 'home' : user.currentTab}</div>
        {(user.currentTab == TabName.CLASS ||
          user.currentTab == TabName.GROUP) && (
          <TbPlus
            onClick={() => dispatch(setCreateNewTypeMode(true))}
            className="hover:bg-stone-800 rounded-xl cursor-pointer"
          />
        )}
      </div>
      {/* Login / Create Account Buttons */}
      <div
        className="flex flex-row items-center space-x-2 font-medium 
    text-sm"
      >
        {!user.isLoggedIn && (
          <div
            onClick={() => router.push('/login')}
            className="flex flex-row items-center
      bg-stone-800 p-1 space-x-1 rounded cursor-pointer"
          >
            <TbLogin />
            <div>Login</div>
          </div>
        )}
        {!user.isLoggedIn && (
          <div
            onClick={() => router.push('/register')}
            className="flex flex-row items-center
      bg-stone-800 p-1 space-x-1 rounded cursor-pointer"
          >
            <TbUserPlus />
            <div>Register</div>
          </div>
        )}
        {user.isLoggedIn && (
          <>
            <div
              onClick={() => handleLogout()}
              className="flex flex-row items-center hover:bg-stone-800 space-x-1 p-1 rounded-3xl cursor-pointer"
            >
              <TbLogout />
              {/* <div>Logout</div> */}
            </div>
          </>
        )}
      </div>
    </div>
  );

  async function handleLogout() {
    try {
      await axios({
        method: 'get',
        url: '/api/logout',
      }).then((res) => {
        dispatch(setUserState(res.data));
      });
    } catch (error) {
      console.log(error);
    }
  }
}
