import { FaStackExchange } from 'react-icons/fa';
import {
  TbBook2,
  TbUsers,
  TbUser,
  TbUserPlus,
  TbLogin,
  TbLogout,
  TbHome2,
  TbPlus,
} from 'react-icons/tb';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/redux/store';
import { setCurrentTab, setUserState } from '../state/redux/userSlice';
import { UserCredentials, UserRegister } from '../lib/types/user';
import NewClass from './create_class';
import NewGroup from './create_group';

export default function Layout({ children }: { children: React.ReactNode }) {
  const user = useSelector((state: RootState) => state.user_store.user);
  const dispatch = useDispatch();
  const [selection, setSelection] = useState('');
  const [createNewTypeMode, setCreateNewTypeMode] = useState(false);
  const router = useRouter();
  return (
    <>
      {!user.isLoggedIn && (
        <div className="flex justify-center items-center h-screen">
          <div
            className="px-5 pb-2 basis-3/5 md:basis-2/5 lg:basis-1/5 
          bg-black shadow-xl shadow-black rounded-3xl"
          >
            <div>
              <div className="flex flex-col items-center mt-10 space-y-3 text-blue-700">
                <FaStackExchange size={100}></FaStackExchange>
              </div>
              {selection === '' && (
                <>
                  <div className="text-blue-700 text-3xl text-center mb-5">
                    kollab
                  </div>
                  <div
                    className="flex flex-row items-center justify-center
                  cursor-pointer space-x-1 py-1 my-2 text-sm text-black 
                  bg-white hover:bg-gray-200 rounded-xl"
                  >
                    {/* too doo */}
                    <FcGoogle></FcGoogle>
                    <div>Sign up with Google</div>
                  </div>
                  <div
                    className="flex flex-row items-center justify-center 
                  cursor-pointer space-x-1 py-1 my-2 text-sm text-black 
                  bg-white hover:bg-gray-200 rounded-xl"
                  >
                    {/* too doo */}
                    <BsGithub></BsGithub>
                    <div>Sign up with Github</div>
                  </div>
                  <div
                    className="flex justify-center py-1 my-2 text-sm 
                  cursor-pointer bg-blue-700 hover:bg-blue-800 rounded-xl"
                    onClick={() => handleSignupModalSelection('register')}
                  >
                    <div className="text-white">Sign up with Email</div>
                  </div>
                  <div className="py-1 my-2 text-sm text-white mt-5">
                    Already have an account?
                  </div>
                  <div
                    className="flex justify-center py-1 text-sm cursor-pointer
                     bg-blue-700 hover:bg-blue-800 rounded-xl"
                    onClick={() => handleSignupModalSelection('login')}
                  >
                    <div className="text-white">Log in</div>
                  </div>
                  <div className="text-center text-white text-sm">
                    forgot password?{' '}
                    <span
                      className="underline cursor-pointer"
                      onClick={() => router.push('/reset')}
                    >
                      reset
                    </span>
                  </div>
                </>
              )}
              {selection === 'login' && (
                <div className="flex flex-col">
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
                            onClick={() => handleBackClick()}
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
                </div>
              )}
              {selection === 'register' && (
                <div className="flex flex-col">
                  <div className="text-white text-center text-2xl mb-5">
                    Log in to <span className="text-blue-700">kollab</span>
                  </div>
                  <div className="px-1">
                    <form onSubmit={handleRegisterFormSubmit}>
                      <div className="flex flex-col">
                        <div className="flex flex-row space-x-2">
                          <div className="flex flex-col">
                            <label className="text-white">first name</label>
                            <input
                              className="text-black rounded-xl px-2"
                              type="text"
                              required
                              id="first_name"
                              name="first_name"
                            />
                          </div>
                          <div className="flex flex-col">
                            <label className="text-white">last name</label>
                            <input
                              className="text-black rounded-xl px-2"
                              type="text"
                              required
                              id="last_name"
                              name="last_name"
                            />
                          </div>
                        </div>
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
                        <label className="text-white">confirm password</label>
                        <input
                          className="text-black rounded-xl px-2"
                          type="password"
                          required
                          id="confirm_password"
                          name="confirm_password"
                        />
                        <div className="flex flex-row py-5 text-center space-x-1">
                          <div
                            onClick={() => handleSignupModalSelection('')}
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
                            Create Account
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {user.isLoggedIn && (
        <div className="mb-10">
          <div className="flex container mx-auto">
            {/* Side bar */}
            <div className="hidden sm:block sm:w-1/12 md:w-2/12 md:px-5 lg:px-10 pt-5">
              <div className="flex flex-col py-5 space-y-5">
                {/* logo */}
                <div
                  className="flex flex-row items-center font-semibold
                text-blue-700 text-2xl cursor-pointer"
                >
                  <FaStackExchange size={32} />
                  <div className="hidden md:block">kollab</div>
                </div>
                {/* home */}
                <div
                  onClick={() => {
                    handleActiveTab('');
                  }}
                  className={`${
                    user.currentTab === ''
                      ? 'text-white font-light'
                      : 'text-gray-400 font-extralight'
                  } flex flex-row items-center text-lg cursor-pointer hover:text-white`}
                >
                  <TbHome2 size={32} strokeWidth={'1'} />
                  <div className="hidden md:block">Home</div>
                </div>
                {/* user */}
                <div
                  onClick={() => {
                    handleActiveTab('user');
                  }}
                  className={`${
                    user.currentTab === 'user'
                      ? 'text-white font-light'
                      : 'text-gray-400 font-extralight'
                  } flex flex-row items-center text-lg cursor-pointer hover:text-white`}
                >
                  <TbUser size={32} strokeWidth={'1'} />
                  <div className="hidden md:block">User</div>
                </div>
                {/* classes */}
                <div
                  onClick={() => {
                    handleActiveTab('classes');
                  }}
                  className={`${
                    user.currentTab === 'classes'
                      ? 'text-white font-light'
                      : 'text-gray-400 font-extralight'
                  } flex flex-row items-center text-lg cursor-pointer hover:text-white`}
                >
                  <TbBook2 size={32} strokeWidth={'1'} />
                  <div className="hidden md:block">Classes</div>
                </div>
                {/* groups */}
                <div
                  onClick={() => {
                    handleActiveTab('groups');
                  }}
                  className={`${
                    user.currentTab === 'groups'
                      ? 'text-white font-light'
                      : 'text-gray-400 font-extralight'
                  } flex flex-row items-center text-lg cursor-pointer hover:text-white`}
                >
                  <TbUsers size={32} strokeWidth={'1'} />
                  <div className="hidden md:block">Groups</div>
                </div>
              </div>
            </div>
            {/* Main Page with header */}
            <div className="w-full sm:w-11/12 md:w-10/12 pt-5 space-y-2">
              {/* Header Text */}
              <div
                className="flex items-center justify-between p-5  bg-black rounded-xl
              text-white text-2xl font-bold"
              >
                <div>{user.currentTab === '' ? 'home' : user.currentTab}</div>
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
                      {(user.currentTab === 'classes' ||
                        user.currentTab === 'groups') && (
                        <div
                          onClick={() => setCreateNewTypeMode(true)}
                          className="flex flex-row items-center
                        bg-stone-800 hover:bg-stone-900 space-x-1 p-1 rounded cursor-pointer"
                        >
                          <TbPlus />
                          <div>New</div>
                        </div>
                      )}
                      <div
                        onClick={() => handleLogout()}
                        className="flex flex-row items-center
                    bg-stone-800 hover:bg-stone-900 space-x-1 p-1 rounded cursor-pointer"
                      >
                        <TbLogout />
                        <div>Logout</div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              {createNewTypeMode && (
                <div
                  className="flex flex-col justify-center p-5  
                bg-black rounded-xl text-white text-2xl font-bold"
                >
                  {user.currentTab === 'classes' && (
                    <NewClass setCreateNewTypeMode={setCreateNewTypeMode} />
                  )}
                  {user.currentTab === 'groups' && <NewGroup />}
                </div>
              )}
              {/* Children */}
              <div className="bg-black rounded-xl p-5 text-white text-2xl font-bold mt-2">
                <main>{children}</main>
              </div>
            </div>
            {/* footer on small screens */}
            <div
              className="flex flex-row justify-between fixed bottom-0
            px-20 w-full sm:hidden text-white bg-black py-2"
            >
              <FaStackExchange
                onClick={() => {
                  handleActiveTab('');
                }}
                className="text-blue-700"
                size={32}
              />
              <TbHome2
                onClick={() => {
                  handleActiveTab('');
                }}
                size={32}
                strokeWidth={1}
                className={
                  user.currentTab === ''
                    ? 'text-white font-light'
                    : 'text-gray-400 font-extralight'
                }
              />
              <TbUser
                onClick={() => {
                  handleActiveTab('user');
                }}
                size={32}
                strokeWidth={1}
                className={
                  user.currentTab === 'user'
                    ? 'text-white font-light'
                    : 'text-gray-400 font-extralight'
                }
              />
              <TbBook2
                onClick={() => {
                  handleActiveTab('classes');
                }}
                size={32}
                strokeWidth={1}
                className={
                  user.currentTab === 'classes'
                    ? 'text-white font-light'
                    : 'text-gray-400 font-extralight'
                }
              />
              <TbUsers
                onClick={() => {
                  handleActiveTab('groups');
                }}
                size={32}
                strokeWidth={1}
                className={
                  user.currentTab === 'groups'
                    ? 'text-white font-light'
                    : 'text-gray-400 font-extralight'
                }
              />
            </div>
          </div>
        </div>
      )}
    </>
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

  async function handleRegisterFormSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    const userRegister: UserRegister = {
      first_name: event.currentTarget.first_name.value,
      last_name: event.currentTarget.last_name.value,
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };
    try {
      await axios({
        method: 'post',
        url: '/api/register',
        data: JSON.stringify(userRegister),
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => {
        if (res.data.message === 'Email already exists') {
          return;
        }
        dispatch(setUserState(res.data));
      });
    } catch (error) {
      console.log(error);
    }
  }

  function handleSignupModalSelection(selection: string) {
    setSelection(selection);
  }

  function handleBackClick() {
    handleSignupModalSelection('');
  }

  function handleActiveTab(tab: string) {
    if (user.currentTab.toLowerCase() !== tab.toLowerCase()) {
      dispatch(setCurrentTab(tab.toLowerCase()));
      setCreateNewTypeMode(false);
      router.push('/' + tab.toLowerCase());
    }
  }
}
