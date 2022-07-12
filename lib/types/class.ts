import { ItemSafe } from "./item"

export type ClassRegister = {
  name: string
  school_name: string
  semester: Semester
  description: string
  passcode: string
}

export enum Semester {
  FALL = 'fall',
  SPRING = 'spring',
  SUMMER = 'summer',
  WINTER = 'winter',
  NA = 'na'
}

// type for class returned from server
export type ClassSafe = {
  id: number,
  name: string,
  school_name: string,
  semester: Semester,
  description: string | null,
  owner_id: number,
  created_at?: Date
}

// redux state
export type ClassSliceState = {
  class: ClassSafe,
  classes: ClassSafe[],
  item: ItemSafe | null,
  items: ItemSafe[]
  viewClassItemMode: boolean
}