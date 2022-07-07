import { ItemSafe } from 'lib/types/item';

interface ItemProps {
  item: ItemSafe | null;
}

export default function Item(props: ItemProps) {
  return (
    <div>
      <h1>Item</h1>
      <div>{props.item?.name}</div>
    </div>
  );
}
