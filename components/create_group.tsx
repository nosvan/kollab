import { Dispatch, SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import { GroupRegister } from 'lib/types/group';
import { UserState } from 'lib/types/user';
import { RootState } from 'state/redux/store';
import axios from 'axios';

export default function NewGroup({
  setCreateNewTypeMode,
  user,
}: {
  setCreateNewTypeMode: Dispatch<SetStateAction<boolean>>;
  user: UserState;
}) {
  const { id } = user;
  return (
    <>
      <div className="text-base px-1">Create a new Group</div>
      <form onSubmit={handleCreateGroupFormSubmit}>
        <div className="flex flex-col text-sm">
          <label className="text-white px-1">name</label>
          <input
            className="text-white bg-stone-800 w-2/3 md:w-1/3 px-2 rounded-lg"
            type="text"
            required
            id="group_name"
            name="group_name"
          />
          <label className="text-white px-1">passcode</label>
          <input
            className="text-white bg-stone-800 w-2/3 md:w-1/3 px-2 rounded-lg"
            type="password"
            required
            id="passcode"
            name="passcode"
          />
          <label className="text-white px-1">confirm passcode</label>
          <input
            className="text-white bg-stone-800 w-2/3 md:w-1/3 px-2 rounded-lg"
            type="password"
            required
            id="confirm_passcode"
            name="confirm_passcode"
          />
          <label className="text-white px-1">brief description</label>
          <textarea
            className="text-white bg-stone-800 w-2/3 md:w-1/3 px-2 rounded-lg"
            required
            id="description"
            name="description"
          />
          <div className="flex flex-row py-5 justify-start text-center text-sm space-x-2">
            <div
              className="bg-black border-2 border-white hover:bg-gray-800 text-white rounded-lg px-2 cursor-pointer"
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
    </>
  );

  async function handleCreateGroupFormSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    const formData = event.currentTarget;
    const newGroup: GroupRegister = {
      name: formData.group_name.value,
      description: formData.description.value,
      owner_id: id,
      passcode: formData.passcode.value,
    };

    try {
      await axios({
        method: 'post',
        url: '/api/group/new',
        data: JSON.stringify(newGroup),
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  }
}
