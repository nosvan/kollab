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
  description: string,
  owner_id: number,
  created_at: string
}

// redux state
export type ClassSliceState = {
  class: ClassSafe,
  classes: ClassSafe[],
  items: ItemSafe[]
}