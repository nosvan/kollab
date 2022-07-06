import { ItemSafe } from "./item"

export type Group = {
  id:  number
  name: string
  description: string
  owner_id: number
  passcode: string
  created_at: string
}

// type for new group
export type GroupRegister = {
  name: string
  description: string
  owner_id: number
  passcode: string
}

// return type from server
export type GroupSafe = {
  id: number
  name: string
  description: string
  owner_id: number
  created_at: string
}

// type for redux state
export type GroupSliceState = {
  group: GroupSafe
  groups: GroupSafe[]
  items: ItemSafe[]
}