import { ItemSafe, ItemType } from 'lib/types/item';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

interface ItemEditProps {
  item: ItemSafe;
  modalOpen: Dispatch<SetStateAction<boolean>>;
  itemTypeStyling: (itemType: ItemType) => string;
}

export default function ItemEdit(props: ItemEditProps) {
  const { item, modalOpen, itemTypeStyling } = props;
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [editModeFormValues, setEditModeFormValues] = useState({
    edit_name: item.name,
    edit_description: item.description,
    edit_category: item.category,
    edit_item_type: ItemType[item.item_type as keyof typeof ItemType],
    edit_date_tz_insensitive: item.date_tz_insensitive,
    edit_date_tz_insensitive_end: item.date_tz_insensitive_end,
    edit_date_tz_sensitive: item.date_tz_sensitive,
    edit_date_tz_sensitive_end: item.date_tz_sensitive_end,
    edit_date_range_flag: item.date_range_flag,
  });

  useEffect(() => {
    if (textAreaRef.current) {
      const scrollHeight = textAreaRef.current.scrollHeight;
      const textAreaRows = scrollHeight
        ? scrollHeight < 5
          ? 5
          : scrollHeight
        : 5;
      textAreaRef.current.style.height = `${textAreaRows}px`;
    }
  }, []);

  const [yupValidationError, setYupValidationError] = useState({});

  return (
    <div className="flex flex-col space-y-1 mx-1 pl-1">
      <div className="flex flex-row items-center font-bold">
        <input
          className="text-base text-white bg-stone-800 hover:bg-stone-700 p-1 rounded-xl"
          value={editModeFormValues.edit_name}
          onFocus={() =>
            setYupValidationError({ ...yupValidationError, name: false })
          }
          onChange={(event) =>
            setEditModeFormValues({
              ...editModeFormValues,
              edit_name: event.target.value,
            })
          }
        />
      </div>
      <div className="flex flex-row flex-wrap items-center">
        {Object.keys(ItemType).map((key) => (
          <span
            key={key}
            className={`${
              editModeFormValues.edit_item_type ==
              ItemType[key as keyof typeof ItemType]
                ? `text-black ${itemTypeStyling(
                    editModeFormValues.edit_item_type
                  )}`
                : 'bg-stone-800 hover:bg-stone-700 text-white'
            }
            )} text-xs px-2 py-1 cursor-pointer my-0.5 mr-0.5 rounded-xl`}
            onClick={() =>
              setEditModeFormValues({
                ...editModeFormValues,
                edit_item_type: ItemType[key as keyof typeof ItemType],
              })
            }
          >
            {key}
          </span>
        ))}
      </div>
      <div className="flex flex-col">
        <label className="w-full text-white px-1">info</label>
        <textarea
          ref={textAreaRef}
          className="text-white bg-stone-800 hover:bg-stone-700 px-2 rounded-xl"
          value={editModeFormValues.edit_description}
          onChange={(event) =>
            setEditModeFormValues({
              ...editModeFormValues,
              edit_description: event.target.value,
            })
          }
        />
      </div>
    </div>
  );
}
