import { ItemSafe } from 'lib/types/item';

export interface ItemProps {
  item: ItemSafe;
}

export default function Item(props: ItemProps) {
  return (
    <div
      className={`p-5 border-b-2 rounded-xl bg-stone-900 ${itemBorder(
        props.item.item_type
      )}`}
    >
      <h1>{props.item.item_type}</h1>
      <div>{props.item.name}</div>
    </div>
  );

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
