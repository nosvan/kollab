import { ItemSafe } from "./item"

export type OwnSliceState = {
  item: ItemSafe | null
  items: ItemSafe[]
  viewOwnItemMode: boolean
}
