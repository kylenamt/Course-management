import { Role } from "./role"

export interface IUser {
  _id?: string
  name?: string
  email: string
  role: Role
  date_of_birth?: number
  avatar?: string
  created_at?: number
  updated_at?: number
}