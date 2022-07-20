import { ItemSafe } from "./item"

export type list = {
  id:  number
  name: string
  description?: string
  owner_id: number
  passcode: string
  created_at: Date
}

export type ListRegister = {
  name: string
  description?: string
  passcode: string
  confirm_passcode: string
}

export type ListJoin = {
  list_id: number 
  passcode: string
  confirm_passcode: string
}

// return type from server
export type ListSafe = {
  id: number
  name: string
  description?: string
  owner_id: number
  created_at: Date
}

// type for redux state
export type ListSliceState = {
  list: ListSafe
  lists: ListSafe[]
  item: ItemSafe
  items: ItemSafe[]
  viewListItemMode: boolean
}