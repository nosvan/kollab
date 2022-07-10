import { useDispatch, useSelector } from 'react-redux';
import { GroupJoin, GroupRegister } from 'lib/types/group';
import axios from 'axios';
import { setCurrentGroup, setGroups } from 'state/redux/groupSlice';
import { setCreateNewTypeMode } from 'state/redux/userSlice';
import { RootState } from 'state/redux/store';
import { useState } from 'react';

export default function NewGroup() {
  const user = useSelector((state: RootState) => state.user_store.user);
  const dispatch = useDispatch();
  const [selection, setSelection] = useState('join_group');
  return (
    <>
      {selection === 'join_group' && (
        <div>
          <div className="px-1 py-5">
            <div className="text-3xl">Join a Group</div>
            <div
              onClick={() => setSelection('create_group')}
              className="text-sm hover:underline cursor-pointer"
            >
              creating a new group? click here
            </div>
          </div>
          <form onSubmit={handleJoinGroupFormSubmit}>
            <div className="flex flex-col text-sm space-y-1">
              <label className="text-white px-1">group id</label>
              <input
                className="text-white bg-stone-800 p-1 rounded-lg"
                type="text"
                required
                id="group_id"
                name="group_id"
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
                  className="bg-black border-2 border-white hover:bg-gray-800 hover:border-gray-300 text-white rounded-lg px-2 cursor-pointer"
                  onClick={() => dispatch(setCreateNewTypeMode(false))}
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
      {selection === 'create_group' && (
        <div>
          <div className="px-1 py-5">
            <div className="text-3xl">Create a new Group</div>
            <div
              onClick={() => setSelection('join_group')}
              className="text-sm hover:underline cursor-pointer"
            >
              joining a group? click here
            </div>
          </div>
          <form onSubmit={handleCreateGroupFormSubmit}>
            <div className="flex flex-col text-sm space-y-1">
              <label className="text-white px-1">name</label>
              <input
                className="text-white bg-stone-800 p-1 rounded-lg"
                type="text"
                required
                id="group_name"
                name="group_name"
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
                  onClick={() => dispatch(setCreateNewTypeMode(false))}
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

  async function handleJoinGroupFormSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    const formData = event.currentTarget;
    if (formData.passcode.value !== formData.confirm_passcode.value) {
      alert('passcodes do not match');
      return;
    }
    const groupJoin: GroupJoin = {
      group_id: parseInt(formData.group_id.value),
      passcode: formData.passcode.value,
    };

    try {
      await axios({
        method: 'post',
        url: '/api/group/join',
        data: JSON.stringify(groupJoin),
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => {
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleCreateGroupFormSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    const formData = event.currentTarget;
    const newGroup: GroupRegister = {
      name: formData.group_name.value,
      description: formData.description.value,
      owner_id: user.id,
      passcode: formData.passcode.value,
    };

    try {
      await axios({
        method: 'post',
        url: '/api/group/new',
        data: JSON.stringify(newGroup),
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => {
        dispatch(setCurrentGroup(res.data));
      });
      await axios({
        method: 'get',
        url: '/api/group/group',
      }).then((res) => {
        dispatch(setGroups(res.data));
      });
      formData.reset();
      dispatch(setCreateNewTypeMode(false));
    } catch (error) {
      console.log(error);
    }
  }
}
