import axios from 'axios';
import { ItemApiRoutes } from 'lib/api/api_routes';
import { Category, ItemSafe } from 'lib/types/item';
import { ItemMode } from 'lib/types/ui';
import { Dispatch, SetStateAction, useState } from 'react';
import { TbSquare, TbSquareCheck, TbTool, TbTrash } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { removeOwnItem } from 'state/redux/ownSlice';
import { removeListItem } from 'state/redux/listSlice';
import ItemView from './item_view';
import ItemEdit from './item_edit';
import styles from './item.module.css';

export interface ItemProps {
  item: ItemSafe;
  modalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Item(props: ItemProps) {
  const { modalOpen } = props;
  const [item, setItem] = useState(props.item);
  const dispatch = useDispatch();
  const [itemMode, setItemMode] = useState(ItemMode.VIEW);

  return (
    <div
      className={`flex flex-col text-sm space-y-2 pt-2 pb-5 px-2 bg-stone-900 border-b-2 rounded-xl ${itemBorder(
        item.item_type
      )}`}
    >
      <div className="flex flex-row items-center justify-end space-x-1">
        {itemMode === ItemMode.VIEW && (
          <TbTool
            className={`${styles.iconStyle} hover:bg-stone-700 hover:text-stone-300 cursor-pointer rounded-xl`}
            onClick={() => setItemMode(ItemMode.EDIT)}
          ></TbTool>
        )}
        {itemMode === ItemMode.EDIT && (
          <TbTrash
            className={`${styles.iconStyle} hover:bg-stone-700 hover:text-stone-300 cursor-pointer rounded-xl`}
            onClick={handleDelete}
          ></TbTrash>
        )}
        {!item.active && (
          <TbSquareCheck
            className={`${styles.iconStyle} hover:bg-stone-700 hover:text-stone-300 cursor-pointer rounded-xl`}
            onClick={handleActiveStatus}
          ></TbSquareCheck>
        )}
        {item.active && (
          <TbSquare
            className={`${styles.iconStyle} hover:bg-stone-700 hover:text-stone-300 cursor-pointer rounded-xl`}
            onClick={handleActiveStatus}
          ></TbSquare>
        )}
      </div>
      {itemMode === ItemMode.VIEW && (
        <ItemView
          item={item}
          itemTypeStyling={itemTypeStyling}
          modalOpen={modalOpen}
        ></ItemView>
      )}
      {itemMode === ItemMode.EDIT && (
        <ItemEdit
          item={item}
          setItemMode={setItemMode}
          itemTypeStyling={itemTypeStyling}
        ></ItemEdit>
      )}
    </div>
  );

  async function handleActiveStatus() {
    const body = {
      item_id: item.id,
      active: item.active,
    };
    try {
      await axios({
        method: 'POST',
        url: ItemApiRoutes.UPDATE_ACTIVE_STATUS,
        data: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => {
        setItem(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete() {
    const body = {
      item_id: item.id,
    };
    try {
      await axios({
        method: 'delete',
        url: ItemApiRoutes.DELETE,
        data: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => {
        switch (item.category) {
          case Category.LIST:
            dispatch(removeListItem(item.id));
            break;
          default:
            dispatch(removeOwnItem(item.id));
            break;
        }
        modalOpen(false);
      });
    } catch (error) {
      console.log(error);
    }
  }

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
      case 'TEST':
        return 'border-blue-500';
      default:
        return 'border-stone-100';
    }
  }
}
