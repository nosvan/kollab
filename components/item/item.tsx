import { ItemSafe, ItemType } from 'lib/types/item';
import { ItemMode } from 'lib/types/ui';
import { useState } from 'react';
import {
  TbCalendarEvent,
  TbClock,
  TbEye,
  TbTool,
  TbTrash,
} from 'react-icons/tb';
import { dateStringYYYYMMDDtoMMDDYYYYwithSlashes } from 'utils/dateUtils';

export interface ItemProps {
  item: ItemSafe;
}

export default function Item(props: ItemProps) {
  const { item } = props;
  const date_tz_insensitive = item.date_tz_insensitive ?? undefined;
  const date_tz_insensitive_end = item.date_tz_insensitive_end ?? undefined;
  const date_tz_sensitive = item.date_tz_sensitive
    ? new Date(item.date_tz_sensitive)
    : undefined;
  const date_tz_sensitive_end = item.date_tz_sensitive_end
    ? new Date(item.date_tz_sensitive_end)
    : undefined;
  const date_tz_sensitive_month = date_tz_sensitive
    ? date_tz_sensitive.getMonth()
    : undefined;
  const date_tz_sensitive_day = date_tz_sensitive
    ? date_tz_sensitive.getDate()
    : undefined;
  const date_tz_sensitive_year = date_tz_sensitive
    ? date_tz_sensitive.getFullYear()
    : undefined;
  const date_tz_sensitive_hour = date_tz_sensitive
    ? date_tz_sensitive.getHours() % 12 || 12
    : undefined;
  const date_tz_sensitive_minute = date_tz_sensitive
    ? date_tz_sensitive.getMinutes() < 10
      ? `0${date_tz_sensitive.getMinutes()}`
      : date_tz_sensitive.getMinutes()
    : undefined;
  const date_tz_sensitive_end_month = date_tz_sensitive_end
    ? date_tz_sensitive_end.getMonth()
    : undefined;
  const date_tz_sensitive_end_day = date_tz_sensitive_end
    ? date_tz_sensitive_end.getDate()
    : undefined;
  const date_tz_sensitive_end_year = date_tz_sensitive_end
    ? date_tz_sensitive_end.getFullYear()
    : undefined;
  const date_tz_sensitive_end_hour = date_tz_sensitive_end
    ? date_tz_sensitive_end.getHours() % 12 || 12
    : undefined;
  const date_tz_sensitive_end_minute = date_tz_sensitive_end
    ? date_tz_sensitive_end.getMinutes() < 10
      ? `0${date_tz_sensitive_end.getMinutes()}`
      : date_tz_sensitive_end.getMinutes()
    : undefined;
  const date_time_am_pm = date_tz_sensitive
    ? date_tz_sensitive.getHours() < 12
      ? 'AM'
      : 'PM'
    : undefined;
  const date_time_end_am_pm = date_tz_sensitive_end
    ? date_tz_sensitive_end.getHours() < 12
      ? 'AM'
      : 'PM'
    : undefined;
  const date_range_flag = item.date_range_flag;
  const [itemMode, setItemMode] = useState(ItemMode.VIEW);

  return (
    <div
      className={`border-b-2 rounded-xl px-2 py-1 bg-stone-900 ${itemBorder(
        item.item_type
      )}`}
    >
      <div className="flex flex-row items-center justify-end space-x-1">
        {itemMode === ItemMode.EDIT && (
          <TbEye
            className="hover:bg-stone-700 hover:text-stone-300 cursor-pointer rounded-xl"
            onClick={() => setItemMode(ItemMode.VIEW)}
          ></TbEye>
        )}
        {itemMode === ItemMode.VIEW && (
          <TbTool
            className="hover:bg-stone-700 hover:text-stone-300 cursor-pointer rounded-xl"
            onClick={() => setItemMode(ItemMode.EDIT)}
          ></TbTool>
        )}
        <TbTrash className="hover:bg-stone-700 hover:text-stone-300 cursor-pointer rounded-xl"></TbTrash>
      </div>
      <div>
        <div className="flex flex-row items-center font-bold">
          <span className="text-lg mx-1 pl-1">{item.name}</span>
        </div>
        <div className="flex flex-row pb-2 items-center">
          <span className="text-sm mx-1 pl-1 whitespace-pre-wrap">
            {item.description}
          </span>
        </div>
      </div>
      {itemMode === ItemMode.VIEW && (
        <div>
          <div className="flex flex-col mx-1 pl-1">
            {date_tz_insensitive && (
              <span className="flex flex-row items-center space-x-2">
                <TbCalendarEvent></TbCalendarEvent>
                <span className="text-sm">
                  {dateStringYYYYMMDDtoMMDDYYYYwithSlashes(date_tz_insensitive)}
                </span>
                {date_range_flag && date_tz_insensitive_end && (
                  <span className="flex flex-row space-x-2">
                    <span className="text-sm">to</span>
                    <span className="text-sm">
                      {dateStringYYYYMMDDtoMMDDYYYYwithSlashes(
                        date_tz_insensitive_end
                      )}
                    </span>
                  </span>
                )}
              </span>
            )}
            {date_tz_sensitive && (
              <span className="flex flex-row space-x-2 items-center">
                <span className="flex flex-col space-y-1">
                  <span className="flex flex-row items-center space-x-2">
                    <TbCalendarEvent></TbCalendarEvent>
                    <span className="text-sm">
                      {date_tz_sensitive_month}/{date_tz_sensitive_day}/
                      {date_tz_sensitive_year}
                    </span>
                  </span>
                  <span className="flex flex-row items-center space-x-2">
                    <TbClock></TbClock>
                    <span className="text-sm">
                      {date_tz_sensitive_hour}:{date_tz_sensitive_minute}{' '}
                      {date_time_am_pm}
                    </span>
                  </span>
                </span>
                {date_range_flag && date_tz_sensitive_end && (
                  <span className="flex flex-row space-x-2">
                    <span className="text-sm">to</span>
                    <span className="flex flex-col space-y-1">
                      <span className="flex flex-row items-center space-x-2">
                        <TbCalendarEvent></TbCalendarEvent>
                        <span className="text-sm">
                          {date_tz_sensitive_end_month}/
                          {date_tz_sensitive_end_day}/
                          {date_tz_sensitive_end_year}
                        </span>
                      </span>
                      <span className="flex flex-row items-center space-x-2">
                        <TbClock></TbClock>
                        <span className="text-sm">
                          {date_tz_sensitive_end_hour}:
                          {date_tz_sensitive_end_minute} {date_time_end_am_pm}
                        </span>
                      </span>
                    </span>
                  </span>
                )}
              </span>
            )}
          </div>
        </div>
      )}
      {itemMode === ItemMode.EDIT && (
        <div>
          <div className="flex flex-col mx-1 pl-1"></div>
          <div className="flex flex-row items-center"></div>
        </div>
      )}
    </div>
  );

  function itemTypeStyling(itemType: string) {
    switch (itemType) {
      case 'ASSIGNMENT':
        return 'bg-emerald-500';
      case 'NOTE':
        return 'bg-cyan-500';
      case 'PROJECT':
        return 'bg-purple-500';
      case 'REMINDER':
        return 'bg-indigo-500';
      case 'MEETING':
        return 'bg-rose-500';
      case 'TEST':
        return 'bg-blue-500';
      default:
        return 'bg-stone-100';
    }
  }

  function itemBorder(itemType: string) {
    switch (itemType) {
      case 'ASSIGNMENT':
        return 'border-emerald-500';
      case 'NOTE':
        return 'border-cyan-500';
      case 'PROJECT':
        return 'border-purple-500';
      case 'REMINDER':
        return 'border-indigo-500';
      case 'MEETING':
        return 'border-rose-500';
      default:
        return 'border-stone-100';
    }
  }
}
