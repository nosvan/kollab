import axios from 'axios';
import { ClassSafe } from 'lib/types/class';
import { GroupSafe } from 'lib/types/group';
import { Category, CreateItem, ItemType } from 'lib/types/item';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAdditionalClassItems } from 'state/redux/classSlice';
import { setAdditionalGroupItems } from 'state/redux/groupSlice';
import { RootState } from 'state/redux/store';
import { setCreateNewItemMode } from 'state/redux/userSlice';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { setAdditionalOwnItems } from 'state/redux/ownSlice';

interface NewItemProps {
  selectedDate: Date;
  itemCategory: Category;
}

export default function NewItem(props: NewItemProps) {
  const groupState: GroupSafe = useSelector(
    (state: RootState) => state.group_store.group
  );

  const classState: ClassSafe = useSelector(
    (state: RootState) => state.class_store.class
  );

  const dispatch = useDispatch();
  const [selectedDueDate, setSelectedDueDate] = useState<Date>();

  return (
    <form onSubmit={handleCreateItemFormSubmit}>
      <div className="flex flex-col text-sm space-y-1">
        <select
          className="text-white bg-stone-800 p-1 rounded-lg"
          required
          name="item_type"
        >
          {Object.keys(ItemType).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
        <label className="text-white px-1">name</label>
        <input
          className="text-white bg-stone-800 p-1 rounded-lg"
          type="text"
          required
          id="item_name"
          name="item_name"
        />
        <label className="text-white px-1">description</label>
        <textarea
          className="text-white bg-stone-800 px-1 rounded-lg"
          required
          id="description"
          name="description"
        />
        <label className="text-white px-1">Due Date</label>
        <div className="flex justify-center">
          <DatePicker
            className="text-white bg-stone-800 p-1 rounded-lg"
            selected={selectedDueDate}
            onChange={(date: Date) => setSelectedDueDate(date)}
          />
        </div>
        <div className="flex flex-row py-5 justify-start text-center text-sm space-x-2">
          <div
            className="bg-black border-2 border-white hover:bg-gray-800 hover:border-gray-300 text-white rounded-lg px-2 cursor-pointer"
            onClick={() => dispatch(setCreateNewItemMode(false))}
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
  );

  function getCategoryId() {
    switch (props.itemCategory) {
      case Category.CLASSROOM:
        return classState.id;
      case Category.GROUP:
        return groupState.id;
      default:
        return null;
    }
  }

  async function handleCreateItemFormSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    const formData = event.currentTarget;
    const newItem: CreateItem = {
      name: formData.item_name.value,
      description: formData.description.value,
      category: props.itemCategory,
      category_id: getCategoryId(),
      item_type: formData.item_type.value,
      due_date: selectedDueDate
        ? selectedDueDate.toString()
        : new Date().toString(),
      date: props.selectedDate.toString(),
    };

    try {
      await axios({
        method: 'post',
        url: '/api/item/new',
        data: JSON.stringify(newItem),
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => {
        if (res.data[0].category === Category.CLASSROOM) {
          dispatch(setAdditionalClassItems(res.data));
        }
        if (res.data[0].category === Category.GROUP) {
          dispatch(setAdditionalGroupItems(res.data));
        }
        if (res.data[0].category === Category.OWN) {
          dispatch(setAdditionalOwnItems(res.data));
        }
      });
      formData.reset();
      dispatch(setCreateNewItemMode(false));
    } catch (error) {
      console.log(error);
    }
  }
}
