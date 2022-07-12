import { FaStackExchange } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'state/redux/store';
import NewClass from '../classroom/create_class';
import NewGroup from '../group/create_group';
import { TabName } from 'lib/types/ui';
import ModalPopup from './modal';
import Login from './login';
import Register from './register';
import SideBar from './sidebar';
import Header from './header';
import Footer from './footer';
import AccountReset from './account_reset';

export function Layout({ children }: { children: React.ReactNode }) {
  const userState = useSelector((state: RootState) => state.user_store);
  const [selection, setSelection] = useState('');
  const [createNewTypeMode, setCreateNewTypeMode] = useState(false);

  return (
    <div>
      {!userState.user.isLoggedIn && (
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
                  {false && (
                    <div
                      className="flex flex-row items-center justify-center
                  cursor-pointer space-x-1 py-1 my-2 text-sm text-black 
                  bg-white hover:bg-gray-200 rounded-xl"
                    >
                      {/* too doo */}
                      <FcGoogle></FcGoogle>
                      <div>Sign up with Google</div>
                    </div>
                  )}
                  {false && (
                    <div
                      className="flex flex-row items-center justify-center 
                  cursor-pointer space-x-1 py-1 my-2 text-sm text-black 
                  bg-white hover:bg-gray-200 rounded-xl"
                    >
                      {/* too doo */}
                      <BsGithub></BsGithub>
                      <div>Sign up with Github</div>
                    </div>
                  )}
                  <div
                    className="flex justify-center py-1 my-2 text-sm 
                  cursor-pointer bg-blue-700 hover:bg-blue-800 rounded-xl"
                    onClick={() => setSelection('register')}
                  >
                    <div className="text-white">Sign up with Email</div>
                  </div>
                  <div className="py-1 my-2 text-sm text-white mt-5">
                    Already have an account?
                  </div>
                  <div
                    className="flex justify-center py-1 text-sm cursor-pointer
                     bg-blue-700 hover:bg-blue-800 rounded-xl"
                    onClick={() => setSelection('login')}
                  >
                    <div className="text-white">Log in</div>
                  </div>
                  <div className="text-center text-white text-sm space-x-1">
                    <span>forgot password?</span>
                    <span
                      className="underline cursor-pointer"
                      onClick={() => setSelection('reset')}
                    >
                      login with email
                    </span>
                  </div>
                </>
              )}
              {selection === 'login' && (
                <Login setSelection={setSelection}></Login>
              )}
              {selection === 'register' && (
                <Register setSelection={setSelection}></Register>
              )}
              {selection === 'reset' && (
                <AccountReset setSelection={setSelection}></AccountReset>
              )}
            </div>
          </div>
        </div>
      )}
      {userState.user.isLoggedIn && (
        <div className="mb-10">
          <div className="flex container mx-auto">
            {/* Side bar */}
            <div className="hidden sm:block sm:w-1/12 md:w-2/12 md:px-5 lg:px-10 pt-5">
              <SideBar></SideBar>
            </div>
            {/* Main Page with header */}
            <div className="w-full sm:w-11/12 md:w-10/12 pt-5 space-y-2">
              {/* Header Text */}
              <Header
                createNewTypeMode={createNewTypeMode}
                setCreateNewTypeMode={setCreateNewTypeMode}
              ></Header>
              {/* Children */}
              <main>{children}</main>
            </div>
            {/* footer on small screens */}
            <Footer></Footer>
            {userState.user.currentTab == TabName.CLASS && createNewTypeMode && (
              <ModalPopup
                modalId="create_class_modal"
                modalOpen={setCreateNewTypeMode}
              >
                <NewClass setCreateNewTypeMode={setCreateNewTypeMode} />
              </ModalPopup>
            )}
            {userState.user.currentTab == TabName.GROUP && createNewTypeMode && (
              <ModalPopup
                modalId="create_group_modal"
                modalOpen={setCreateNewTypeMode}
              >
                <NewGroup setCreateNewTypeMode={setCreateNewTypeMode} />
              </ModalPopup>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
