import { ItemSafe } from 'lib/types/item';

interface ItemProps {
  item: ItemSafe;
}

export default function Item(props: ItemProps) {
  return (
    <div>
      <h1>{props.item.item_type}</h1>
      <div>{props.item.name}</div>
    </div>
  );
}
