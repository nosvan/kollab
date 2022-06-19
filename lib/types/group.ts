export type Group = {
  name: string
  description: string
  owner_id: number
  passcode: string
  created_at: Date
}

export type GroupSafe = {
  id: number
  name: string
  description: string
  owner_id: number
  created_at: Date
}

export type GroupRegister = {
  name: string
  description: string
  owner_id: number
  passcode: string
}
