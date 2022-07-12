import axios from 'axios';
import { ClassSafe } from 'lib/types/class';
import { GroupSafe } from 'lib/types/group';
import {
  VisibilityLevel,
  Category,
  CreateItem,
  ItemType,
} from 'lib/types/item';
import { Dispatch, SetStateAction, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAdditionalClassItems } from 'state/redux/classSlice';
import { setAdditionalGroupItems } from 'state/redux/groupSlice';
import { RootState } from 'state/redux/store';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { setAdditionalOwnItems } from 'state/redux/ownSlice';
import ToggleSwitch from 'components/layout/ui_components/toggle_switch';
import { UserSliceState } from 'lib/types/user';

interface NewItemProps {
  selectedDate?: Date;
  itemCategory?: Category;
  setCreateNewItemMode: Dispatch<SetStateAction<boolean>>;
}

export default function NewItem(props: NewItemProps) {
  const groupState: GroupSafe = useSelector(
    (state: RootState) => state.group_store.group
  );

  const classState: ClassSafe = useSelector(
    (state: RootState) => state.class_store.class
  );

  const userState: UserSliceState = useSelector(
    (state: RootState) => state.user_store
  );

  const dispatch = useDispatch();
  const [visibilityControlCheck, setVisibilityControlCheck] = useState(false);

  const initialFormState = {
    name: '',
    category: props.itemCategory ? props.itemCategory : undefined,
    category_id: props.itemCategory ? getCategoryId() : undefined,
    item_type: ItemType.ASSIGNMENT,
    permission_level: VisibilityLevel.PUBLIC,
    description: undefined,
    due_date: undefined,
    last_modified_by_id: userState.user.id,
    date: props.selectedDate ? props.selectedDate : new Date(),
  };

  const [formValues, setFormValues] = useState<CreateItem>(initialFormState);

  return (
    <div>
      <form onSubmit={handleCreateItemFormSubmit}>
        <div className="flex flex-col text-sm space-y-1 pt-2 px-2 bg-stone-900 border-b-2 rounded-xl border-blue-700">
          <div className="py-2 text-3xl">Create an Item</div>
          <div>
            <select
              className="text-white bg-stone-800 py-1 rounded-lg"
              required
              value={formValues.item_type}
              onChange={(event) =>
                setFormValues({
                  ...formValues,
                  item_type:
                    ItemType[event.target.value as keyof typeof ItemType],
                })
              }
            >
              {Object.keys(ItemType).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-white px-1">Control Visibility</label>
            <div className="flex flex-row space-x-1">
              <ToggleSwitch
                isChecked={visibilityControlCheck}
                setIsChecked={setVisibilityControlCheck}
              ></ToggleSwitch>
              {visibilityControlCheck && (
                <span>
                  <select
                    className="text-white bg-stone-800 py-1 rounded-lg"
                    required
                    onChange={(event) =>
                      setFormValues({
                        ...formValues,
                        permission_level:
                          VisibilityLevel[
                            event.target.value as keyof typeof VisibilityLevel
                          ],
                      })
                    }
                    value={VisibilityLevel.PUBLIC}
                  >
                    {Object.keys(VisibilityLevel).map((key) => (
                      <option key={key} value={key}>
                        {key}
                      </option>
                    ))}
                  </select>
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-white px-1">name</label>
            <input
              className="text-white bg-stone-800 p-1 rounded-lg"
              type="text"
              required
              value={formValues.name}
              onChange={(event) =>
                setFormValues({
                  ...formValues,
                  name: event.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white px-1">description</label>
            <textarea
              className="text-white resize-none bg-stone-800 px-1 rounded-lg"
              value={formValues.description}
              onChange={(event) =>
                setFormValues({
                  ...formValues,
                  description: event.target.value,
                })
              }
            />
          </div>
          <div>
            <label className="text-white px-1">Due Date</label>
            <DatePicker
              className="text-white bg-stone-800 p-1 rounded-lg"
              // selected={datePickerValue}
              selected={formValues.due_date}
              onChange={(event) => {
                setFormValues({
                  ...formValues,
                  due_date: event ? event : undefined,
                });
              }}
            />
          </div>
          <div>
            <label className="text-white px-1">For Date</label>
            <DatePicker
              className="text-white bg-stone-800 p-1 rounded-lg"
              // selected={datePickerValue}
              selected={formValues.date}
              required
              onChange={(event) => {
                setFormValues({
                  ...formValues,
                  due_date: event ? event : undefined,
                });
              }}
            />
          </div>
          <div className="flex flex-row py-5 justify-start text-center text-sm space-x-2">
            <div
              className="bg-stone-900 border-2 border-white hover:bg-stone-800 hover:border-stone-300 text-white rounded-lg px-2 cursor-pointer"
              onClick={() => props.setCreateNewItemMode(false)}
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
  );

  function getCategoryId() {
    switch (props.itemCategory) {
      case Category.CLASSROOM:
        return classState.id;
      case Category.GROUP:
        return groupState.id;
    }
  }

  async function handleCreateItemFormSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    try {
      await axios({
        method: 'post',
        url: '/api/item/new',
        data: JSON.stringify(formValues),
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => {
        console.log(res.data);
        if (res.data[0].category) {
          if (res.data[0].category === Category.CLASSROOM) {
            dispatch(setAdditionalClassItems(res.data));
          } else if (res.data[0].category === Category.GROUP) {
            dispatch(setAdditionalGroupItems(res.data));
          }
        } else {
          dispatch(setAdditionalOwnItems(res.data));
        }
      });
      setFormValues(initialFormState);
      props.setCreateNewItemMode(false);
    } catch (error) {
      console.log(error);
    }
  }
}
