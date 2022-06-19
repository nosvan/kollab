import { Dispatch, SetStateAction } from 'react';
import { UserState } from 'lib/types/user';

export default function NewClass({
  setCreateNewTypeMode,
  user,
}: {
  setCreateNewTypeMode: Dispatch<SetStateAction<boolean>>;
  user: UserState;
}) {
  const { id } = user;
  return (
    <>
      <div className="text-base px-1">Create a new Class</div>
      <form onSubmit={handleCreateClassFormSubmit}>
        <div className="flex flex-col text-sm">
          <label className="text-white px-1">name</label>
          <input
            className="text-white bg-stone-800 w-2/3 md:w-1/3 px-2 rounded-lg"
            type="text"
            required
            id="name"
            name="name"
          />
          <label className="text-white px-1">school</label>
          <input
            className="text-white bg-stone-800 w-2/3 md:w-1/3 px-2 rounded-lg"
            type="text"
            required
            id="school"
            name="school"
          />
          <label className="text-white px-1">semester</label>
          <input
            className="text-white bg-stone-800 w-2/3 md:w-1/3 px-2 rounded-lg"
            type="text"
            required
            id="semester"
            name="semester"
          />
          <label className="text-white px-1">year</label>
          <input
            className="text-white bg-stone-800 w-2/3 md:w-1/3 px-2 rounded-lg"
            type="text"
            required
            id="year"
            name="year"
          />
          <label className="text-white px-1">passcode</label>
          <input
            className="text-white bg-stone-800 w-2/3 md:w-1/3 px-2 rounded-lg"
            type="password"
            required
            id="password"
            name="password"
          />
          <label className="text-white px-1">confirm passcode</label>
          <input
            className="text-white bg-stone-800 w-2/3 md:w-1/3 px-2 rounded-lg"
            type="password"
            required
            id="confirm_password"
            name="confirm_password"
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

  function handleCreateClassFormSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    const formData = event.currentTarget;
  }
}
