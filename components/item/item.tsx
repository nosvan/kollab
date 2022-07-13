import { ItemSafe } from 'lib/types/item';

export interface ItemProps {
  item: ItemSafe;
}

export default function Item(props: ItemProps) {
  return (
    <div className={`p-5 border-b-2 rounded-xl bg-stone-900 ${itemBorder()}`}>
      <h1>{props.item.item_type}</h1>
      <div>{props.item.name}</div>
    </div>
  );

  function itemBorder() {
    switch (props.item.item_type) {
      case 'ASSIGNMENT':
        return 'border-emerald-500';
      case 'NOTE':
        return 'border-yellow-500';
      case 'PROJECT':
        return 'border-red-500';
      case 'REMINDER':
        return 'border-cyan-500';
      case 'MEETING':
        return 'border-fuchsia-500';
      default:
        return 'border-gray-100';
    }
  }
}
