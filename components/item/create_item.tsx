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
import 'react-datepicker/dist/react-datepicker.css';
import { setAdditionalOwnItems } from 'state/redux/ownSlice';
import ToggleSwitch from 'components/layout/ui_components/toggle_switch';
import { UserSliceState } from 'lib/types/user';
import styles from './create_item.module.css';
import * as Yup from 'yup';
import { setErrorTruthy } from 'utils/formValidateUtils';
import { dateToYYYYMMDD } from 'utils/dateUtils';

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
  const [timeControlChecked, setTimeControlChecked] = useState(false);
  const [currentDate] = useState(
    props.selectedDate ? props.selectedDate : new Date()
  );

  const [currentDateFormattedYYYYMMDD] = useState(dateToYYYYMMDD(currentDate));

  const initialFormState = {
    name: '',
    category: props.itemCategory ? props.itemCategory : undefined,
    category_id: props.itemCategory ? getCategoryId() : undefined,
    description: undefined,
    item_type: ItemType.NOTE,
    date_tz_sensitive: undefined,
    date_tz_sensitive_end: undefined,
    time_sensitive_flag: false,
    date_tz_insensitive: undefined,
    last_modified_by_id: userState.user.id,
    permission_level: VisibilityLevel.PUBLIC,
  };

  const [formValues, setFormValues] = useState<CreateItem>(initialFormState);

  const yupValidationSchema = Yup.object({
    name: Yup.string().required(),
    category: Yup.mixed<Category>().oneOf(Object.values(Category)),
    category_id: formValues.category ? Yup.number().required() : Yup.number(),
    item_type: Yup.mixed<ItemType>()
      .oneOf(Object.values(ItemType))
      .default(ItemType.ASSIGNMENT),
    permission_level: Yup.mixed<VisibilityLevel>()
      .oneOf(Object.values(VisibilityLevel))
      .default(VisibilityLevel.PUBLIC),
    description: Yup.string(),
    date_tz_sensitive: Yup.date(),
    date_tz_sensitive_end: Yup.date(),
    time_sensitive: Yup.boolean().required(),
    date_tz_insensitive: Yup.string().required(),
    last_modified_by_id: Yup.number(),
  });

  // date: used for timezone insensitive date
  // due_date is used for timezone sensitive date (assignment due date, meeting)

  const [yupValidationError, setValidationError] = useState({
    name: false,
    category: false,
    category_id: false,
    item_type: false,
    permission_level: false,
    description: false,
    date_tz_sensitive: false,
    date_tz_sensitive_end: false,
    time_sensitive_flag: false,
    date_tz_insensitive: false,
    last_modified_by_id: false,
  });

  return (
    <div>
      <form onSubmit={handleCreateItemFormSubmit}>
        <div className="flex flex-col text-sm space-y-1 pt-2 px-2 bg-stone-900 border-b-2 rounded-xl border-blue-700">
          <div className="py-2 text-3xl">Create an Item</div>
          {/* item type */}
          <div>
            <select
              className="text-white bg-stone-800 py-1 rounded-lg"
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
          {/* item type end */}
          {/* control visibility */}
          <div className="flex flex-col space-y-1">
            <label className="text-white px-1">control visibility</label>
            <div className="flex flex-row space-x-1">
              <ToggleSwitch
                isChecked={visibilityControlCheck}
                setIsChecked={setVisibilityControlCheck}
              ></ToggleSwitch>
              {visibilityControlCheck && (
                <span>
                  <select
                    className="text-white bg-stone-800 py-1 rounded-lg"
                    value={formValues.permission_level}
                    onChange={(event) =>
                      setFormValues({
                        ...formValues,
                        permission_level:
                          VisibilityLevel[
                            event.target.value as keyof typeof VisibilityLevel
                          ],
                      })
                    }
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
          {/* control visibility end */}
          {/* name */}
          <div className="flex flex-col">
            <label className="text-white px-1">name</label>
            <input
              className="text-white bg-stone-800 p-1 rounded-lg"
              onFocus={() =>
                setValidationError({ ...yupValidationError, name: false })
              }
              onChange={(event) =>
                setFormValues({
                  ...formValues,
                  name: event.target.value,
                })
              }
            />
            {yupValidationError.name && (
              <span className={`${styles['field-error-styling']}`}>
                required
              </span>
            )}
          </div>
          {/* name end */}
          {/* description */}
          <div className="flex flex-col">
            <label className="text-white px-1">description</label>
            <textarea
              className="text-white resize-none bg-stone-800 px-1 rounded-lg"
              onChange={(event) =>
                setFormValues({
                  ...formValues,
                  description: event.target.value,
                })
              }
            />
          </div>
          {/* description end */}
          {/* if meeting */}
          {/* {formValues.item_type == ItemType.MEETING && (
            <div className="flex flex-col">
              <label className="text-white px-1">time</label>
              <span className="flex space-x-1">
                <span className="flex flex-col">
                  <input
                    className="text-white bg-stone-800 p-1 rounded-lg"
                    type="time"
                    onFocus={() =>
                      setValidationError({
                        ...yupValidationError,
                        date_tz_sensitive: false,
                      })
                    }
                    onChange={(event) =>
                      setFormValues({
                        ...formValues,
                        date_tz_sensitive:
                          event.target.valueAsDate ?? undefined,
                      })
                    }
                  />
                  {yupValidationError.date_tz_sensitive && (
                    <span className={`${styles['field-error-styling']}`}>
                      required
                    </span>
                  )}
                </span>
                <span className="flex flex-col">
                  <input
                    className="text-white bg-stone-800 p-1 rounded-lg"
                    type="time"
                    onFocus={() =>
                      setValidationError({
                        ...yupValidationError,
                        date_tz_sensitive_end: false,
                      })
                    }
                    onChange={(event) =>
                      setFormValues({
                        ...formValues,
                        date_tz_sensitive_end:
                          event.target.valueAsDate ?? undefined,
                      })
                    }
                  />
                  {yupValidationError.date_tz_sensitive_end && (
                    <span className={`${styles['field-error-styling']}`}>
                      required
                    </span>
                  )}
                </span>
              </span>
            </div>
          )} */}
          {/* if meeting end */}
          <div className="flex flex-col space-y-1">
            {/* time control unchecked */}
            {!timeControlChecked && (
              <>
                <label className="text-white px-1">date</label>
                <span>
                  <input
                    className="text-white bg-stone-800 p-1 rounded-lg"
                    type="date"
                    defaultValue={currentDateFormattedYYYYMMDD}
                    onFocus={() =>
                      setValidationError({
                        ...yupValidationError,
                        date_tz_insensitive: false,
                      })
                    }
                    onChange={(event) => {
                      setFormValues({
                        ...formValues,
                        date_tz_insensitive: event.target.value
                          ? event.target.value
                          : undefined,
                      });
                      console.log('value:', event.target.value);
                      console.log('value as date:', event.target.valueAsDate);
                    }}
                  />
                  {yupValidationError.date_tz_insensitive && (
                    <span className={`${styles['field-error-styling']}`}>
                      required
                    </span>
                  )}
                </span>
              </>
            )}
            {/* time control unchecked end */}
            {/* time control checked */}
            {timeControlChecked && (
              <>
                <label className="text-white px-1">date</label>
                <span className="flex flex-row space-x-1">
                  <span>
                    <input
                      className="text-white bg-stone-800 p-1 rounded-lg"
                      type="date"
                      defaultValue={currentDateFormattedYYYYMMDD}
                      onFocus={() =>
                        setValidationError({
                          ...yupValidationError,
                          date: false,
                        })
                      }
                      onChange={(event) => {
                        setFormValues({
                          ...formValues,
                          date: event.target.value
                            ? event.target.value
                            : undefined,
                        });
                        console.log('value:', event.target.value);
                        console.log('value as date:', event.target.valueAsDate);
                      }}
                    />
                    {yupValidationError.date && (
                      <span className={`${styles['field-error-styling']}`}>
                        required
                      </span>
                    )}
                  </span>
                  <span className="flex flex-col">
                    <input
                      className="text-white bg-stone-800 p-1 rounded-lg"
                      type="time"
                      onFocus={() =>
                        setValidationError({
                          ...yupValidationError,
                          start_time: false,
                        })
                      }
                      onChange={(event) =>
                        setFormValues({
                          ...formValues,
                          start_time: event.target.valueAsDate ?? undefined,
                        })
                      }
                    />
                    {yupValidationError.start_time && (
                      <span className={`${styles['field-error-styling']}`}>
                        required
                      </span>
                    )}
                  </span>
                </span>
              </>
            )}
            {/* time control checked end */}
            {/* time control checker */}
            <span className="flex col-row space-x-1">
              <label className="text-white px-1">time</label>
              <ToggleSwitch
                isChecked={timeControlChecked}
                setIsChecked={setTimeControlChecked}
              ></ToggleSwitch>
            </span>
            {/* time control checker end */}
          </div>
          {/* cancel and save */}
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
          {/* cancel and save end */}
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
    console.log('handleCreateItemFormSubmit:', formValues);
    const yupValidateResult = await yupValidationSchema
      .validate(formValues, { abortEarly: false })
      .catch((err) => {
        console.log('yupValidateResult:', err);
        setErrorTruthy(err.inner, yupValidationError);
        setValidationError({ ...yupValidationError });
      });
    console.log('after yupValidateResult:', yupValidateResult);
    if (JSON.stringify(yupValidateResult) === JSON.stringify(formValues)) {
      // console.log('item valid');
      await callCreateNewItemApi(formValues);
    }
  }

  async function callCreateNewItemApi(formValues: CreateItem) {
    try {
      await axios({
        method: 'post',
        url: '/api/item/new',
        data: JSON.stringify(formValues),
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => {
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
