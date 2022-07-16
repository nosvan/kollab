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
  GENERAL = 'GENERAL',
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
  date_tz_sensitive?: Date
  date_tz_sensitive_end?: Date
  time_sensitive_flag: boolean
  date_tz_insensitive?: string
  permission_level: VisibilityLevel
  created_by_id: number
  last_modified_by_id: number
  created_at: Date
}

export type CreateItem = {
  name: string
  description?: string
  category?: Category
  category_id?: number
  item_type: ItemType
  date_tz_sensitive?: Date
  date_tz_sensitive_end?: Date
  time_sensitive_flag: boolean
  date_tz_insensitive?: string
  permission_level: VisibilityLevel
}

export type ItemSafe = {
  id: number
  name: string
  description?: string
  category?: Category
  category_id?: number
  item_type: ItemType
  date_tz_sensitive?: Date
  date_tz_sensitive_end?: Date
  time_sensitive_flag: boolean
  date_tz_insensitive?: string
  permission_level: VisibilityLevel
  created_by_id: number
  last_modified_by_id: number,
}