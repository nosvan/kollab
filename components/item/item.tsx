import { ItemSafe } from 'lib/types/item';

export interface ItemProps {
  item: ItemSafe;
}

export default function Item(props: ItemProps) {
  return (
    <div className={`p-5 border-2 rounded-xl ${itemBorder()}`}>
      <h1>{props.item.item_type}</h1>
      <div>{props.item.name}</div>
    </div>
  );

  function itemBorder() {
    switch (props.item.item_type) {
      case 'ASSIGNMENT':
        return 'border-emerald-600';
      case 'NOTE':
        return 'border-yellow-600';
      case 'PROJECT':
        return 'border-fuchsia-600';
      case 'REMINDER':
        return 'border-cyan-600';
      case 'MEETING':
        return 'border-green-600';
      default:
        return 'border-white';
    }
  }
}
