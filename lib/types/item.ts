export enum Category {
  CLASSROOM = 'CLASSROOM',
  GROUP = 'GROUP',
  PERSONAL  = 'PERSONAL',
}

export enum ItemType {
  ASSIGNMENT = 'ASSIGNMENT',
  NOTE = 'NOTE',
  PROJECT = 'PROJECT',
  REMINDER = 'REMINDER'
}

export type Item = {
  id: number
  name: string
  description: string | null
  category: Category
  category_id: number | null
  item_type: ItemType
  due_date: string
  created_by_id: number
  last_modified_by_id: number
  date: string
  created_at: string
}

export type CreateItem = {
  name: string
  description: string | null
  category: Category
  category_id: number | null
  item_type: ItemType
  due_date: string
  date: string
}

export type ItemSafe = {
  id: number
  name: string
  description: string | null
  category: Category
  category_id: number | null
  item_type: ItemType
  due_date: string
  date: string
}
