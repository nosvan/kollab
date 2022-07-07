import { TabName } from 'lib/types/ui';
import { useRouter } from 'next/router';
import { FaStackExchange } from 'react-icons/fa';
import { TbBook2, TbHome2, TbUser, TbUsers } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'state/redux/store';
import { setCurrentTab } from 'state/redux/userSlice';

export default function Footer() {
  const user = useSelector((state: RootState) => state.user_store.user);
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <div
      className="flex flex-row justify-between fixed bottom-0
  px-20 w-full sm:hidden text-white bg-black py-2"
    >
      <FaStackExchange
        onClick={() => {
          handleActiveTab(TabName.HOME);
        }}
        className="text-blue-700"
        size={32}
      />

      <TbHome2
        onClick={() => {
          handleActiveTab(TabName.HOME);
        }}
        size={32}
        strokeWidth={1}
        className={
          user.currentTab == TabName.HOME
            ? 'text-white font-light'
            : 'text-gray-400 font-extralight'
        }
      />
      <TbUser
        onClick={() => {
          handleActiveTab(TabName.USER);
        }}
        size={32}
        strokeWidth={1}
        className={
          user.currentTab == TabName.USER
            ? 'text-white font-light'
            : 'text-gray-400 font-extralight'
        }
      />
      {false && (
        <TbBook2
          onClick={() => {
            handleActiveTab(TabName.CLASS);
          }}
          size={32}
          strokeWidth={1}
          className={
            user.currentTab == TabName.CLASS
              ? 'text-white font-light'
              : 'text-gray-400 font-extralight'
          }
        />
      )}
      <TbUsers
        onClick={() => {
          handleActiveTab(TabName.GROUP);
        }}
        size={32}
        strokeWidth={1}
        className={
          user.currentTab == TabName.GROUP
            ? 'text-white font-light'
            : 'text-gray-400 font-extralight'
        }
      />
    </div>
  );

  function handleActiveTab(tab: string) {
    if (user.currentTab.toLowerCase() != tab.toLowerCase()) {
      dispatch(setCurrentTab(tab));
      router.push('/' + tab.toLowerCase());
    }
  }
}
