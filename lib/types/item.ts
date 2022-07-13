export enum Category {
  CLASSROOM = 'CLASSROOM',
  GROUP = 'GROUP',
}

export enum ItemType {
  ASSIGNMENT = 'ASSIGNMENT',
  NOTE = 'NOTE',
  PROJECT = 'PROJECT',
  REMINDER = 'REMINDER',
  MEETING = 'MEETING',
  TEST = 'TEST',
  OTHER = 'OTHER',
}

export enum AccessLevel {
  ADMIN = 'ADMIN',
  PUBLIC = 'PUBLIC',
}

export enum VisibilityLevel {
  ADMIN = 'ADMIN',
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC',
}

export type Item = {
  id: number
  name: string
  description: string
  category?: Category
  category_id: number
  item_type: ItemType
  due_date?: Date
  start_time?: string
  end_time?: string
  permission_level: VisibilityLevel
  created_by_id: number
  last_modified_by_id: number
  date: Date
  created_at: Date
}

export type CreateItem = {
  name: string
  description?: string
  category?: Category
  category_id?: number
  item_type: ItemType
  due_date?: Date
  start_time?: string
  end_time?: string
  permission_level: VisibilityLevel
  last_modified_by_id?: number
  date: Date
}

export type ItemSafe = {
  id: number
  name: string
  description?: string
  category?: Category
  category_id?: number
  item_type: ItemType
  due_date?: Date
  start_time?: string
  end_time?: string
  date?: Date
}