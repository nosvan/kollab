import axios from 'axios';
import {
  VisibilityLevel,
  Category,
  CreateItem,
  ItemType,
  ItemYupValidationError,
} from 'lib/types/item';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAdditionalListItems } from 'state/redux/listSlice';
import { RootState } from 'state/redux/store';
import 'react-datepicker/dist/react-datepicker.css';
import { setAdditionalOwnItems } from 'state/redux/ownSlice';
import ToggleSwitch from 'components/layout/ui_components/toggle_switch';
import { UserSliceState } from 'lib/types/user';
import styles from './create_item.module.css';
import * as Yup from 'yup';
import {
  matchYupErrorStateWithCompErrorState,
  trimStringsInObjectShallow,
} from 'utils/formValidateUtils';
import { dateRangeValid, dateToYYYYMMDD } from 'utils/dateUtils';
import { useSpring, animated } from '@react-spring/web';
import { FooterInputs } from './footer_inputs';
import { getTimeCeiling } from 'utils/dateUtils';
import { ListSafe } from 'lib/types/list';
import { DateInputs } from './date_inputs';

interface NewItemProps {
  selectedDate?: Date;
  itemCategory?: Category;
  setCreateNewItemMode: Dispatch<SetStateAction<boolean>>;
}

export default function NewItem(props: NewItemProps) {
  const { selectedDate, itemCategory, setCreateNewItemMode } = props;
  const dispatch = useDispatch();

  const listState = useSelector((state: RootState) => state.list_store.list);

  const userState: UserSliceState = useSelector(
    (state: RootState) => state.user_store
  );

  const [visibilityControlCheck, setVisibilityControlCheck] = useState(false);
  const [timeControlChecked, setTimeControlChecked] = useState(false);
  const [dateRangeControlChecked, setDateRangeControlChecked] = useState(false);
  const [selectedDateForNewItemFormattedYYYYMMDD] = useState(() =>
    dateToYYYYMMDD(selectedDate ?? new Date())
  );

  const [datePart, setDatePart] = useState(
    selectedDateForNewItemFormattedYYYYMMDD
  );
  const [timePart, setTimePart] = useState(() =>
    getTimeCeiling(new Date(), 30)
  );
  const [datePartEnd, setDatePartEnd] = useState(
    selectedDateForNewItemFormattedYYYYMMDD
  );
  const [timePartEnd, setTimePartEnd] = useState(() =>
    getTimeCeiling(new Date(), 30, 30)
  );

  const [selectedDateForNewItem] = useState(() => {
    if (selectedDate) {
      return selectedDate;
    }
    return new Date();
  });

  const initialFormState = {
    name: '',
    category: itemCategory ?? undefined,
    category_id: itemCategory ? getCategoryId() : undefined,
    description: undefined,
    item_type: ItemType.NOTE,
    date_tz_sensitive: selectedDateForNewItem,
    date_tz_sensitive_end: selectedDateForNewItem,
    time_sensitive_flag: timeControlChecked,
    date_range_flag: dateRangeControlChecked,
    date_tz_insensitive: selectedDateForNewItemFormattedYYYYMMDD,
    date_tz_insensitive_end: selectedDateForNewItemFormattedYYYYMMDD,
    last_modified_by_id: userState.user.id,
    permission_level: VisibilityLevel.PUBLIC,
  };

  const [formValues, setFormValues] = useState<CreateItem>(initialFormState);

  useEffect(() => {
    if (timeControlChecked) {
      const newDate = new Date(`${datePart}T${timePart}`);
      const newDateEnd = new Date(`${datePartEnd}T${timePartEnd}`);
      console.log(newDate, newDateEnd);
      setFormValues((prevState) => {
        return {
          ...prevState,
          date_tz_sensitive: newDate,
          date_tz_sensitive_end: newDateEnd,
        };
      });
    } else {
      setFormValues((prevState) => {
        return {
          ...prevState,
          date_tz_insensitive: datePart,
          date_tz_insensitive_end: datePartEnd,
        };
      });
    }
  }, [datePart, datePartEnd, timeControlChecked, timePart, timePartEnd]);

  useEffect(() => {
    setFormValues((prevState) => {
      return {
        ...prevState,
        time_sensitive_flag: timeControlChecked,
      };
    });
  }, [timeControlChecked]);

  useEffect(() => {
    setFormValues((prevState) => {
      return {
        ...prevState,
        date_range_flag: dateRangeControlChecked,
      };
    });
  }, [dateRangeControlChecked]);

  useEffect(() => {
    if (!visibilityControlCheck) {
      setFormValues((prevState) => {
        return {
          ...prevState,
          permission_level: VisibilityLevel.PUBLIC,
        };
      });
    }
  }, [visibilityControlCheck]);

  const yupValidationSchema = Yup.object({
    name: Yup.string().min(5, 'min length of 5').required('name is required'),
    category: Yup.mixed<Category>().oneOf(Object.values(Category)),
    category_id: formValues.category ? Yup.number().required() : Yup.number(),
    item_type: Yup.mixed<ItemType>()
      .oneOf(Object.values(ItemType))
      .default(ItemType.ASSIGNMENT),
    permission_level: Yup.mixed<VisibilityLevel>()
      .oneOf(Object.values(VisibilityLevel))
      .default(VisibilityLevel.PUBLIC),
    description: Yup.string(),
    date_tz_sensitive: timeControlChecked ? Yup.date() : Yup.date(),
    date_tz_sensitive_end: timeControlChecked
      ? dateRangeControlChecked
        ? Yup.date()
            .min(
              Yup.ref('date_tz_sensitive'),
              'end date must be after start date'
            )
            .required('end date is required')
        : Yup.date()
      : Yup.date(),
    time_sensitive_flag: Yup.boolean().required(),
    date_range_flag: Yup.boolean().required(),
    date_tz_insensitive: timeControlChecked
      ? Yup.string()
      : Yup.string().required('date is required'),
    date_tz_insensitive_end: timeControlChecked
      ? Yup.string()
      : dateRangeControlChecked
      ? Yup.string()
          .test(
            'compare-dates-no-time',
            'end date must be after start date',
            function () {
              return dateRangeValid(
                this.parent['date_tz_insensitive'],
                this.parent['date_tz_insensitive_end']
              );
            }
          )
          .required('end date is required')
      : Yup.string(),
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
      date_range_flag: false,
      date_tz_insensitive: false,
      date_tz_insensitive_end: false,
      last_modified_by_id: false,
    });

  const selectorSpring = useSpring({
    opacity: visibilityControlCheck ? 1 : 0,
    config: { duration: 100 },
  });

  return (
    <div>
      <form onSubmit={handleCreateItemFormSubmit}>
        <div className="flex flex-col text-sm space-y-2 pt-2 px-2 bg-stone-900 border-b-2 rounded-xl border-blue-700">
          <div className="py-2 text-3xl">Create an Item</div>
          <span className="flex flex-row items-center space-x-1 pb-2">
            <span
              onClick={() => setDateRangeControlChecked(false)}
              className={`py-1 px-2 text-lg rounded-xl ${
                !dateRangeControlChecked ? 'bg-red-600' : 'bg-stone-800'
              } hover:bg-red-600 cursor-pointer`}
            >
              Task
            </span>
            <span
              onClick={() => setDateRangeControlChecked(true)}
              className={`py-1 px-2 text-lg rounded-xl ${
                dateRangeControlChecked ? 'bg-blue-600' : 'bg-stone-800'
              } hover:bg-blue-600 cursor-pointer`}
            >
              Event
            </span>
          </span>
          <div className="space-y-1">
            <span className="px-1">type</span>
            <span className="flex flex-row flex-wrap items-center">
              {Object.keys(ItemType).map((key) => (
                <span
                  key={key}
                  className={`${
                    formValues.item_type ==
                    ItemType[key as keyof typeof ItemType]
                      ? `text-black ${itemTypeStyling(formValues.item_type)}`
                      : 'bg-stone-800 hover:bg-stone-700 text-white'
                  }
                  )} cursor-pointer py-1 px-2 mr-1 mt-1 rounded-xl`}
                  onClick={() =>
                    setFormValues({
                      ...formValues,
                      item_type: ItemType[key as keyof typeof ItemType],
                    })
                  }
                >
                  {key}
                </span>
              ))}
            </span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="flex flex-row items-center space-x-1">
              <label className="text-white px-1">control visibility</label>
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
          <div className="flex flex-col space-y-1">
            <span className="flex flex-col space-y-1">
              <span className="flex flex-row space-x-1 ">
                <label className="text-white px-1">time</label>
                <ToggleSwitch
                  isChecked={timeControlChecked}
                  setIsChecked={setTimeControlChecked}
                ></ToggleSwitch>
              </span>
            </span>
            <span>
              <DateInputs
                formValues={formValues}
                setFormValues={setFormValues}
                yupValidationError={yupValidationError}
                setYupValidationError={setYupValidationError}
                timeControlChecked={timeControlChecked}
                dateRangeControlChecked={dateRangeControlChecked}
                datePart={datePart}
                setDatePart={setDatePart}
                datePartEnd={datePartEnd}
                setDatePartEnd={setDatePartEnd}
                timePart={timePart}
                setTimePart={setTimePart}
                timePartEnd={timePartEnd}
                setTimePartEnd={setTimePartEnd}
              ></DateInputs>
            </span>
          </div>
          <FooterInputs
            setCreateNewItemMode={setCreateNewItemMode}
          ></FooterInputs>
        </div>
      </form>
    </div>
  );

  function getCategoryId() {
    switch (itemCategory) {
      case Category.LIST:
        return listState.id;
    }
  }

  async function handleCreateItemFormSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    trimStringsInObjectShallow(formValues);
    let yupValidateResult = await yupValidationSchema
      .validate(formValues, { abortEarly: false })
      .catch((err) => {
        matchYupErrorStateWithCompErrorState(err.inner, yupValidationError);
        setYupValidationError({ ...yupValidationError });
      });
    if (!(JSON.stringify(yupValidateResult) === JSON.stringify(formValues))) {
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
          if (res.data[0].category === Category.LIST) {
            dispatch(setAdditionalListItems(res.data));
          }
        } else {
          dispatch(setAdditionalOwnItems(res.data));
        }
      });
      setFormValues(initialFormState);
      setCreateNewItemMode(false);
    } catch (error) {
      console.log(error);
    }
  }

  function itemTypeStyling(itemType: string) {
    switch (itemType) {
      case 'ASSIGNMENT':
        return 'bg-emerald-400';
      case 'NOTE':
        return 'bg-cyan-400';
      case 'PROJECT':
        return 'bg-purple-400';
      case 'REMINDER':
        return 'bg-indigo-400';
      case 'MEETING':
        return 'bg-rose-400';
      case 'TEST':
        return 'bg-blue-400';
      default:
        return 'bg-stone-100';
    }
  }
}
