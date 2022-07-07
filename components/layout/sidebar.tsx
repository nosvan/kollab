import { TabName } from 'lib/types/ui';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { FaStackExchange } from 'react-icons/fa';
import { TbBook2, TbHome2, TbUser, TbUsers } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'state/redux/store';
import { setCurrentTab } from 'state/redux/userSlice';

export default function SideBar() {
  const user = useSelector((state: RootState) => state.user_store.user);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    console.log('in side bar');
  }, []);

  return (
    <div className="flex flex-col py-5 space-y-5">
      {/* logo */}
      <div
        className="flex flex-row items-center font-semibold
    text-blue-700 text-2xl cursor-pointer p-1"
      >
        <FaStackExchange size={32} />
        <div className="hidden md:block">kollab</div>
      </div>
      {/* home */}
      <div
        onClick={() => {
          handleActiveTab(TabName.HOME);
        }}
        className={`${
          user.currentTab == TabName.HOME
            ? 'text-white font-light'
            : 'text-gray-400 font-extralight'
        } flex flex-row items-center text-lg cursor-pointer p-1 hover:text-white  rounded-3xl hover:bg-stone-800`}
      >
        <TbHome2 size={32} strokeWidth={'1'} />
        <div className="hidden md:block">home</div>
      </div>
      {/* user */}
      {true && (
        <div
          onClick={() => {
            handleActiveTab(TabName.USER);
          }}
          className={`${
            user.currentTab == TabName.USER
              ? 'text-white font-light'
              : 'text-gray-400 font-extralight'
          } flex flex-row items-center text-lg cursor-pointer p-1 hover:text-white  rounded-3xl hover:bg-stone-800`}
        >
          <TbUser size={32} strokeWidth={'1'} />
          <div className="hidden md:block">self</div>
        </div>
      )}
      {/* classes */}
      {false && (
        <div
          onClick={() => {
            handleActiveTab(TabName.CLASS);
          }}
          className={`${
            user.currentTab == TabName.CLASS
              ? 'text-white font-light'
              : 'text-gray-400 font-extralight'
          } flex flex-row items-center text-lg cursor-pointer p-1 hover:text-white  rounded-3xl hover:bg-stone-800`}
        >
          <TbBook2 size={32} strokeWidth={'1'} />
          <div className="hidden md:block">{TabName.CLASS}</div>
        </div>
      )}
      {/* groups */}
      <div
        onClick={() => {
          handleActiveTab(TabName.GROUP);
        }}
        className={`${
          user.currentTab == TabName.GROUP
            ? 'text-white font-light'
            : 'text-gray-400 font-extralight'
        } flex flex-row items-center text-lg cursor-pointer p-1 hover:text-white  rounded-3xl hover:bg-stone-800`}
      >
        <TbUsers size={32} strokeWidth={'1'} />
        <div className="hidden md:block">{TabName.GROUP}</div>
      </div>
    </div>
  );

  function handleActiveTab(tab: string) {
    if (user.currentTab.toLowerCase() != tab.toLowerCase()) {
      dispatch(setCurrentTab(tab));
      router.push('/' + tab.toLowerCase());
    }
  }
}
