import { Dispatch, SetStateAction } from 'react';
import {
  dateStringToNormalizedDateString,
  dateToDayName,
  dateToMonthName,
} from 'utils/dateUtils';
import styles from './task_view.module.css';
import { TbPlus } from 'react-icons/tb';
import ModalPopup from './modal';
import NewItem from './create_item';
import { Category, ItemSafe } from 'lib/types/item';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'state/redux/store';
import { setCreateNewItemMode } from 'state/redux/userSlice';

interface TaskViewProps {
  dayLayout: number;
  days: Date[];
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
  category: Category;
  items: ItemSafe[];
}

export default function TaskView(props: TaskViewProps) {
  const newItemMode = useSelector(
    (state: RootState) => state.user_store.createNewItemMode
  );
  const dispatch = useDispatch();
  const currentDateString = new Date().toDateString();
  const DayView = (day: Date, items: ItemSafe[]) => {
    return items
      .filter((itemA) => {
        if (
          itemA.category == Category[props.category] &&
          dateStringToNormalizedDateString(itemA.date) == day.toDateString()
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
            className={`text-xs rounded-md
            text-center text-black mx-1 cursor-pointer ${itemTypeStyling(
              itemB.item_type
            )}`}
          >
            {itemB.name}
          </div>
        );
      });
  };

  return (
    <div>
      <div className="flex flex-row flex-wrap break-words">
        {props.days.map((day, index) => {
          return (
            <div
              key={index}
              className={`pb-1 space-y-1 px-1 ${styles['day-container']}`}
            >
              <div
                className={`flex flex-row space-x-1 justify-center items-center bg-stone-800 text-center text-sm rounded-lg`}
              >
                <div>
                  {dateToDayName(day)} {dateToMonthName(day)} {day.getDate()}
                </div>
                <div>
                  <TbPlus
                    onClick={() => {
                      props.setSelectedDate(day);
                      dispatch(setCreateNewItemMode(true));
                    }}
                    className="hover:bg-stone-700 cursor-pointer rounded-xl"
                  ></TbPlus>
                </div>
              </div>
              {DayView(day, props.items)}
            </div>
          );
        })}
      </div>
      {newItemMode && (
        <ModalPopup
          modalId="create_item_modal"
          modalOpen={setCreateNewItemMode}
        >
          <NewItem
            selectedDate={props.selectedDate}
            itemCategory={props.category}
          />
        </ModalPopup>
      )}
    </div>
  );

  function itemTypeStyling(itemType: string) {
    switch (itemType) {
      case 'ASSIGNMENT':
        return 'bg-emerald-400 hover:bg-emerald-300';
      case 'NOTE':
        return 'bg-yellow-400 hover:bg-yellow-300';
      case 'PROJECT':
        return 'bg-fuchsia-400 hover:bg-fuchsia-300';
      case 'REMINDER':
        return 'bg-cyan-400 hover:bg-cyan-300';
      default:
        return 'bg-white';
    }
  }
}
