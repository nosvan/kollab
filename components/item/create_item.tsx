import axios from 'axios';
import { ClassSafe } from 'lib/types/class';
import { GroupSafe } from 'lib/types/group';
import {
  VisibilityLevel,
  Category,
  CreateItem,
  ItemType,
  ItemYupValidationError,
} from 'lib/types/item';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
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
import { useSpring, animated } from '@react-spring/web';
import { DateInputs } from './date_inputs';
import { FooterInputs } from './footer_inputs';

interface NewItemProps {
  selectedDate?: Date;
  itemCategory?: Category;
  setCreateNewItemMode: Dispatch<SetStateAction<boolean>>;
}

export default function NewItem(props: NewItemProps) {
  const dispatch = useDispatch();

  const groupState: GroupSafe = useSelector(
    (state: RootState) => state.group_store.group
  );
  const classState: ClassSafe = useSelector(
    (state: RootState) => state.class_store.class
  );
  const userState: UserSliceState = useSelector(
    (state: RootState) => state.user_store
  );

  const [visibilityControlCheck, setVisibilityControlCheck] = useState(false);
  const [timeControlChecked, setTimeControlChecked] = useState(false);
  const [dateRangeControlChecked, setDateRangeControlChecked] = useState(false);

  const [selectedDateForNewItem] = useState(() => {
    if (props.selectedDate) {
      return props.selectedDate;
    }
    return new Date();
  });

  const [selectedDateForNewItemFormattedYYYYMMDD] = useState(() =>
    dateToYYYYMMDD(props.selectedDate ?? new Date())
  );

  const initialFormState = {
    name: '',
    category: props.itemCategory ? props.itemCategory : undefined,
    category_id: props.itemCategory ? getCategoryId() : undefined,
    description: undefined,
    item_type: ItemType.GENERAL,
    date_tz_sensitive: selectedDateForNewItem,
    date_tz_sensitive_end: selectedDateForNewItem,
    time_sensitive_flag: timeControlChecked,
    date_tz_insensitive: selectedDateForNewItemFormattedYYYYMMDD,
    date_tz_insensitive_end: selectedDateForNewItemFormattedYYYYMMDD,
    last_modified_by_id: userState.user.id,
    permission_level: VisibilityLevel.PUBLIC,
  };

  const [formValues, setFormValues] = useState<CreateItem>(initialFormState);

  useEffect(() => {
    setFormValues((formValues) => {
      const newFormValues = {
        ...formValues,
        time_sensitive_flag: timeControlChecked,
      };
      return newFormValues;
    });
  }, [timeControlChecked]);

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
    time_sensitive_flag: Yup.boolean().required(),
    date_tz_insensitive: Yup.string(),
    date_tz_insensitive_end: Yup.string(),
    last_modified_by_id: Yup.number(),
  });

  const [yupValidationError, setYupValidationError] =
    useState<ItemYupValidationError>({
      name: false,
      category: false,
      category_id: false,
      item_type: false,
      permission_level: false,
      description: false,
      date_tz_sensitive: false,
      date_tz_sensitive_end: false,
      time_tz_sensitive: false,
      time_tz_sensitive_end: false,
      time_sensitive_flag: false,
      date_tz_insensitive: false,
      date_tz_insensitive_end: false,
      last_modified_by_id: false,
    });

  useEffect(() => {
    if (!visibilityControlCheck) {
      setFormValues((formValues) => {
        return { ...formValues, permission_level: VisibilityLevel.PUBLIC };
      });
    }
  }, [visibilityControlCheck]);

  const selectorSpring = useSpring({
    opacity: visibilityControlCheck ? 1 : 0,
    config: { duration: 100 },
  });

  return (
    <div>
      <form onSubmit={handleCreateItemFormSubmit}>
        <div className="flex flex-col text-sm space-y-1 pt-2 px-2 bg-stone-900 border-b-2 rounded-xl border-blue-700">
          <div className="py-2 text-3xl">Create an Item</div>
          <span className="flex flex-row items-center space-x-1 pb-2">
            <span
              onClick={() => setDateRangeControlChecked(true)}
              className={`px-2 py-1 text-base rounded-xl ${
                dateRangeControlChecked ? 'bg-blue-600' : 'bg-stone-800'
              } hover:bg-blue-600 cursor-pointer`}
            >
              event
            </span>
            <span
              onClick={() => setDateRangeControlChecked(false)}
              className={`px-2 py-1 text-base rounded-xl ${
                !dateRangeControlChecked ? 'bg-red-600' : 'bg-stone-800'
              } hover:bg-red-600 cursor-pointer`}
            >
              task
            </span>
          </span>
          {/* item type */}
          <div>
            <select
              className="text-white bg-stone-800 hover:bg-stone-700 py-1 rounded-xl"
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
            <span className="flex flex-row items-center space-x-1">
              <label className="text-white px-1">visibility</label>
              <ToggleSwitch
                isChecked={visibilityControlCheck}
                setIsChecked={setVisibilityControlCheck}
              ></ToggleSwitch>
            </span>
            <div className="flex flex-row space-x-1">
              {visibilityControlCheck && (
                <animated.span style={selectorSpring}>
                  <select
                    className="text-white bg-stone-800 hover:bg-stone-700 py-1 rounded-xl"
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
                </animated.span>
              )}
            </div>
          </div>
          {/* control visibility end */}
          {/* name */}
          <div className="flex flex-col">
            <label className="text-white px-1">name</label>
            <input
              className="text-white bg-stone-800 hover:bg-stone-700 p-1 rounded-xl"
              onFocus={() =>
                setYupValidationError({ ...yupValidationError, name: false })
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
              className="text-white resize-none bg-stone-800 hover:bg-stone-700 px-1 rounded-xl"
              onChange={(event) =>
                setFormValues({
                  ...formValues,
                  description: event.target.value,
                })
              }
            />
          </div>
          {/* description end */}
          <div className="flex flex-col space-y-1">
            {/* time control checker */}
            <span className="flex flex-col space-y-1">
              {/* time control checker */}
              <span className="flex flex-row space-x-1 ">
                <label className="text-white px-1">time</label>
                <ToggleSwitch
                  isChecked={timeControlChecked}
                  setIsChecked={setTimeControlChecked}
                ></ToggleSwitch>
              </span>
              {/* time checker end */}
            </span>
            <span>
              <DateInputs
                selectedDateForNewItemFormattedYYYYMMDD={
                  selectedDateForNewItemFormattedYYYYMMDD
                }
                formValues={formValues}
                setFormValues={setFormValues}
                yupValidationError={yupValidationError}
                setYupValidationError={setYupValidationError}
                timeControlChecked={timeControlChecked}
                setTimeControlChecked={setTimeControlChecked}
                dateRangeControlChecked={dateRangeControlChecked}
              ></DateInputs>
            </span>
          </div>
          {/* cancel and save */}
          <FooterInputs
            setCreateNewItemMode={props.setCreateNewItemMode}
          ></FooterInputs>
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

  function dateRangeValid() {
    const rangeStart = new Date(`${formValues.date_tz_sensitive}`).getTime();
    const rangeEnd = new Date(`${formValues.date_tz_sensitive_end}`).getTime();
    return rangeStart < rangeEnd;
  }

  async function handleCreateItemFormSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    const yupValidateResult = await yupValidationSchema
      .validate(formValues, { abortEarly: false })
      .catch((err) => {
        console.log('yupValidateResult:', err);
        setErrorTruthy(err.inner, yupValidationError);
        setYupValidationError({ ...yupValidationError });
      });
    console.log('after yupValidateResult:', yupValidateResult);
    if (!(JSON.stringify(yupValidateResult) === JSON.stringify(formValues))) {
      if (!dateRangeValid()) {
        setYupValidationError({
          ...yupValidationError,
          date_tz_sensitive_end: true,
        });
      }
      return;
    }
    if (!dateRangeValid()) {
      setYupValidationError({
        ...yupValidationError,
        date_tz_sensitive_end: true,
      });
      return;
    }
    await callCreateNewItemApi(formValues);
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
