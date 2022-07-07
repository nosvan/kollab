import { ItemSafe } from "./item"

export type PersonalSliceState = {
  item: ItemSafe | null
  items: ItemSafe[]
  viewPersonalItemMode: boolean
}
