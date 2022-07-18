import { Dispatch, SetStateAction, useState } from 'react';
import {
  dateToDayName,
  dateToMonthName,
  dateToYYYYMMDD,
} from 'utils/dateUtils';
import styles from './task_view.module.css';
import { TbPlus } from 'react-icons/tb';
import ModalPopup from './modal';
import NewItem from '../item/create_item';
import { Category, ItemSafe } from 'lib/types/item';
import { useDispatch } from 'react-redux';
import { setCurrentGroupItem } from 'state/redux/groupSlice';
import { setCurrentClassItem } from 'state/redux/classSlice';
import { setCurrentOwnItem } from 'state/redux/ownSlice';
import { animated, useSpring } from '@react-spring/web';

interface TaskViewProps {
  dayLayout: number;
  days: Date[];
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
  category?: Category;
  itemsTimeSensitive: ItemSafe[];
  itemsTimeInsensitive: ItemSafe[];
  setViewItemMode: Dispatch<SetStateAction<boolean>>;
}

export default function TaskView(props: TaskViewProps) {
  const dispatch = useDispatch();
  const currentDateString = new Date().toDateString();
  const [createNewItemMode, setCreateNewItemMode] = useState(false);

  const ItemsTimeInsensitiveView = (day: Date, items: ItemSafe[]) => {
    const dayInYYYYMMDD = dateToYYYYMMDD(day);
    return items
      ?.filter((itemA) => {
        if (
          itemA.date_tz_insensitive &&
          itemA.date_tz_insensitive == dayInYYYYMMDD
        ) {
          return true;
        } else {
          return false;
        }
      })
      .map((itemB) => {
        return (
          <div
            key={itemB.id}
            onClick={() => handleItemClick(itemB)}
            className={`text-xs rounded-md
            text-center text-black ${itemTypeStyling(
              itemB.item_type
            )} cursor-pointer ${styles.mobilePadding}`}
          >
            {itemB.name}
          </div>
        );
      });
  };

  const ItemsTimeSensitiveView = (day: Date, items: ItemSafe[]) => {
    const dayInYYYYMMDD = dateToYYYYMMDD(day);
    return items
      ?.filter((itemA) => {
        if (
          itemA.date_tz_sensitive &&
          dateToYYYYMMDD(itemA.date_tz_sensitive) == dayInYYYYMMDD
        ) {
          return true;
        } else {
          return false;
        }
      })
      .map((itemB) => {
        return (
          <div
            key={itemB.id}
            onClick={() => handleItemClick(itemB)}
            className={`text-xs rounded-md
            text-center text-black ${itemTypeStyling(
              itemB.item_type
            )} cursor-pointer ${styles.mobilePadding}`}
          >
            {itemB.name}
          </div>
        );
      });
  };

  const taskViewSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <animated.div style={taskViewSpring}>
      <div className="flex flex-row flex-wrap break-words">
        {props.days.map((day, index) => {
          return (
            <div
              key={index}
              className={`pb-1 space-y-1 px-1 ${styles['day-container']}`}
            >
              <div
                onClick={() => {
                  props.setSelectedDate(day);
                  setCreateNewItemMode(true);
                }}
                className={`flex flex-row cursor-pointer justify-center items-center bg-stone-800 hover:bg-stone-700 text-center text-sm rounded-lg ${
                  currentDateString == day.toDateString() ? 'underline' : ''
                } ${styles.mobilePadding}`}
              >
                <div>
                  {dateToDayName(day)} {dateToMonthName(day)} {day.getDate()}
                </div>
                <div>
                  <TbPlus className="hover:bg-stone-700 cursor-pointer rounded-xl"></TbPlus>
                </div>
              </div>
              {props.itemsTimeInsensitive?.length > 0 &&
                ItemsTimeInsensitiveView(day, props.itemsTimeInsensitive)}
              {props.itemsTimeSensitive?.length > 0 &&
                ItemsTimeSensitiveView(day, props.itemsTimeSensitive)}
            </div>
          );
        })}
      </div>
      {createNewItemMode && (
        <ModalPopup
          modalId="create_item_modal"
          modalOpen={setCreateNewItemMode}
        >
          <NewItem
            selectedDate={props.selectedDate}
            itemCategory={props.category}
            setCreateNewItemMode={setCreateNewItemMode}
          />
        </ModalPopup>
      )}
    </animated.div>
  );

  function handleItemClick(item: ItemSafe) {
    if (props.category) {
      switch (props.category) {
        case Category.GROUP:
          dispatch(setCurrentGroupItem(item));
          break;
        case Category.CLASSROOM:
          dispatch(setCurrentClassItem(item));
          break;
      }
    } else {
      dispatch(setCurrentOwnItem(item));
    }
    props.setViewItemMode(true);
  }

  function itemTypeStyling(itemType: string) {
    switch (itemType) {
      case 'ASSIGNMENT':
        return 'bg-emerald-400 hover:bg-emerald-300';
      case 'NOTE':
        return 'bg-cyan-400 hover:bg-cyan-300';
      case 'PROJECT':
        return 'bg-purple-400 hover:bg-purple-300';
      case 'REMINDER':
        return 'bg-indigo-400 hover:bg-indigo-300';
      case 'MEETING':
        return 'bg-rose-400 hover:bg-rose-300';
      case 'TEST':
        return 'bg-blue-400 hover:bg-blue-300';
      default:
        return 'bg-stone-100 hover:bg-white';
    }
  }
}
