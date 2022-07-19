export enum Category {
  CLASSROOM = 'CLASSROOM',
  GROUP = 'GROUP',
}

export enum ItemType {
  GENERAL = 'GENERAL',
  ASSIGNMENT = 'ASSIGNMENT',
  REMINDER = 'REMINDER',
  NOTE = 'NOTE',
  MEETING = 'MEETING',
  PROJECT = 'PROJECT',
  TEST = 'TEST',
}

export enum AccessLevel {
  ADMIN = 'ADMIN',
  PUBLIC = 'PUBLIC',
}

export enum VisibilityLevel {
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
  date_range_flag: boolean
  date_tz_insensitive?: string
  date_tz_insensitive_end?: string
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
  date_range_flag: boolean
  date_tz_insensitive?: string
  date_tz_insensitive_end?: string
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
  date_range_flag: boolean
  date_tz_insensitive?: string
  date_tz_insensitive_end?: string
  permission_level: VisibilityLevel
  created_by_id: number
  last_modified_by_id: number,
}

export type ItemYupValidationError = {
  name: boolean,
  category: boolean,
  category_id: boolean,
  item_type: boolean,
  permission_level: boolean,
  description: boolean,
  date_tz_sensitive: boolean,
  date_tz_sensitive_end: boolean,
  time_tz_sensitive: boolean,
  time_tz_sensitive_end: boolean,
  time_sensitive_flag: boolean,
  date_range_flag: boolean
  date_tz_insensitive: boolean,
  date_tz_insensitive_end: boolean,
  last_modified_by_id: boolean,
}