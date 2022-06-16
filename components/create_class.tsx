import { Dispatch, SetStateAction } from 'react';

export default function NewClass({
  setCreateNewTypeMode,
}: {
  setCreateNewTypeMode: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <div>Create a new Class</div>
      <form>
        <div className="flex flex-col first:text-sm">
          <label className="text-white px-1">name</label>
          <input
            className="text-black w-1/4 px-2 rounded-lg"
            type="text"
            required
            id="name"
            name="name"
          />
          <label className="text-white px-1">school</label>
          <input
            className="text-black w-1/4 px-2 rounded-lg"
            type="text"
            required
            id="school"
            name="school"
          />
          <label className="text-white px-1">passcode</label>
          <input
            className="text-black w-1/4 px-2 rounded-lg"
            type="password"
            required
            id="password"
            name="password"
          />
          <label className="text-white px-1">confirm passcode</label>
          <input
            className="text-black w-1/4 px-2 rounded-lg"
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
}
