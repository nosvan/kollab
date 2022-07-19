import { ClassRegister, Semester } from 'lib/types/class';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setClasses, setCurrentClass } from 'state/redux/classSlice';
import { Dispatch, SetStateAction } from 'react';

interface NewClassProps {
  setCreateNewTypeMode: Dispatch<SetStateAction<boolean>>;
}

export default function NewClass(props: NewClassProps) {
  const { setCreateNewTypeMode } = props;
  const dispatch = useDispatch();
  const currentYear = new Date().getFullYear();
  const years = createYears();
  return (
    <>
      <div className="px-2 border-b-2 rounded-xl border-blue-700">
        <div className="text-3xl px-1 py-5">Create a new Class</div>
        <form onSubmit={handleCreateClassFormSubmit}>
          <div className="flex flex-col text-sm space-y-1">
            <label className="text-white px-1">name</label>
            <input
              className="text-white bg-stone-800 px-1 rounded-lg"
              type="text"
              required
              id="class_name"
              name="class_name"
            />
            <label className="text-white px-1">school</label>
            <input
              className="text-white bg-stone-800 px-1 rounded-lg"
              type="text"
              required
              id="school_name"
              name="school_name"
            />
            <label className="text-white px-1">semester</label>
            <select
              className="text-white bg-stone-800 px-1 rounded-lg"
              required
              id="semester"
              name="semester"
              defaultValue="NA"
            >
              {Object.keys(Semester).map((key, index) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
            <label className="text-white px-1">year</label>
            <select
              className="text-white bg-stone-800 px-1 rounded-lg"
              required
              id="year"
              name="year"
              defaultValue={currentYear}
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <label className="text-white px-1">description</label>
            <textarea
              className="text-white resize-none bg-stone-800 px-1 rounded-lg"
              required
              id="description"
              name="description"
            />
            <label className="text-white px-1">passcode</label>
            <input
              className="text-white bg-stone-800 px-1 rounded-lg"
              type="password"
              required
              id="passcode"
              name="passcode"
            />
            <label className="text-white px-1">confirm passcode</label>
            <input
              className="text-white bg-stone-800 px-1 rounded-lg"
              type="password"
              required
              id="confirm_passcode"
              name="confirm_passcode"
            />
            <div className="flex flex-row py-5 justify-start text-center text-sm space-x-2">
              <div
                className="bg-black border-2 border-white hover:bg-gray-900 hover:border-gray-300 text-white rounded-lg px-2 cursor-pointer"
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
    </>
  );

  function createYears() {
    const currentYear = new Date().getFullYear();
    let lowYear = currentYear - 10;
    const years = [];
    while (lowYear <= currentYear + 10) {
      years.push(lowYear++);
    }
    return years;
  }

  async function handleCreateClassFormSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    const formData = event.currentTarget;
    const newClass: ClassRegister = {
      name: formData.class_name.value,
      school_name: formData.school_name.value,
      description: formData.description.value,
      passcode: formData.passcode.value,
      semester: Semester[formData.semester.value as keyof typeof Semester],
    };

    try {
      await axios({
        method: 'post',
        url: '/api/classroom/new',
        data: JSON.stringify(newClass),
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => {
        dispatch(setCurrentClass(res.data));
      });
      await axios({
        method: 'get',
        url: '/api/classroom/class',
      }).then((res) => {
        dispatch(setClasses(res.data));
      });
      formData.reset();
      setCreateNewTypeMode(false);
    } catch (error) {
      console.log(error);
    }
  }
}
