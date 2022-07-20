import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { RootState } from 'state/redux/store';
import { Dispatch, SetStateAction, useState } from 'react';
import { setCurrentList, setLists } from 'state/redux/listSlice';
import { ListJoin, ListRegister } from 'lib/types/list';

interface NewListProps {
  setCreateNewTypeMode: Dispatch<SetStateAction<boolean>>;
}

export default function NewList(props: NewListProps) {
  const { setCreateNewTypeMode } = props;
  const user = useSelector((state: RootState) => state.user_store.user);
  const dispatch = useDispatch();
  const [selection, setSelection] = useState('join_list');
  return (
    <>
      {selection === 'join_list' && (
        <div className="px-2 bg-stone-900 border-b-2 rounded-xl border-blue-700">
          <div className="px-1 py-2">
            <div className="text-3xl">Join a List</div>
            <div
              onClick={() => setSelection('create_list')}
              className="text-sm hover:underline cursor-pointer"
            >
              creating a new list? click here
            </div>
          </div>
          <form onSubmit={handleJoinListFormSubmit}>
            <div className="flex flex-col text-sm space-y-1">
              <label className="text-white px-1">list id</label>
              <input
                className="text-white bg-stone-800 p-1 rounded-lg"
                type="text"
                required
                id="list_id"
                name="list_id"
              />
              <label className="text-white px-1">passcode</label>
              <input
                className="text-white bg-stone-800 p-1 rounded-lg"
                type="password"
                required
                id="passcode"
                name="passcode"
              />
              <label className="text-white px-1">confirm passcode</label>
              <input
                className="text-white bg-stone-800 p-1 rounded-lg"
                type="password"
                required
                id="confirm_passcode"
                name="confirm_passcode"
              />
              <div className="flex flex-row py-5 justify-start text-center text-sm space-x-2">
                <div
                  className="bg-stone-900 border-2 border-white hover:bg-stone-800 hover:border-stone-300 text-white rounded-lg px-2 cursor-pointer"
                  onClick={() => setCreateNewTypeMode(false)}
                >
                  <span>Cancel</span>
                </div>
                <button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-600 border-2 border-blue-700 hover:border-blue-600 px-3 rounded-lg text-white"
                >
                  Join
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      {selection === 'create_list' && (
        <div className="px-2 bg-stone-900 border-b-2 rounded-xl border-blue-700">
          <div className="px-1 py-5">
            <div className="text-3xl">Create a New List</div>
            <div
              onClick={() => setSelection('join_list')}
              className="text-sm hover:underline cursor-pointer"
            >
              joining a list? click here
            </div>
          </div>
          <form onSubmit={handleCreateListFormSubmit}>
            <div className="flex flex-col text-sm space-y-1">
              <label className="text-white px-1">name</label>
              <input
                className="text-white bg-stone-800 p-1 rounded-lg"
                type="text"
                required
                id="list_name"
                name="list_name"
              />
              <label className="text-white px-1">passcode</label>
              <input
                className="text-white bg-stone-800 p-1 rounded-lg"
                type="password"
                required
                id="passcode"
                name="passcode"
              />
              <label className="text-white px-1">confirm passcode</label>
              <input
                className="text-white bg-stone-800 p-1 rounded-lg"
                type="password"
                required
                id="confirm_passcode"
                name="confirm_passcode"
              />
              <label className="text-white px-1">description</label>
              <textarea
                className="text-white bg-stone-800 px-1 rounded-lg"
                required
                id="description"
                name="description"
              />
              <div className="flex flex-row py-5 justify-start text-center text-sm space-x-2">
                <div
                  className="bg-black border-2 border-white hover:bg-gray-800 hover:border-gray-300 text-white rounded-lg px-2 cursor-pointer"
                  onClick={() => setCreateNewTypeMode(false)}
                >
                  <span>Cancel</span>
                </div>
                <button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-600 border-2 border-blue-700 hover:border-blue-600 px-3 rounded-lg text-white"
                >
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );

  async function handleJoinListFormSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    const formData = event.currentTarget;
    if (formData.passcode.value !== formData.confirm_passcode.value) {
      alert('passcodes do not match');
      return;
    }
    const listJoin: ListJoin = {
      list_id: parseInt(formData.list_id.value),
      passcode: formData.passcode.value,
    };

    try {
      await axios({
        method: 'post',
        url: '/api/list/join',
        data: JSON.stringify(listJoin),
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => {
        formData.reset();
        setCreateNewTypeMode(false);
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleCreateListFormSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    const formData = event.currentTarget;
    const newList: ListRegister = {
      name: formData.list_name.value,
      description: formData.description.value,
      owner_id: user.id,
      passcode: formData.passcode.value,
    };

    try {
      await axios({
        method: 'post',
        url: '/api/list/new',
        data: JSON.stringify(newList),
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => {
        dispatch(setCurrentList(res.data));
      });
      await axios({
        method: 'get',
        url: '/api/list/list',
      }).then((res) => {
        dispatch(setLists(res.data));
      });
      formData.reset();
      setCreateNewTypeMode(false);
    } catch (error) {
      console.log(error);
    }
  }
}
