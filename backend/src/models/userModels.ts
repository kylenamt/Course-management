// src/models/userModel.ts

import pool from '../config/db'

export interface User {
  id: number
  username: string
  email: string
}

export const createUser = async (username: string, email: string): Promise<User> => {
  const result = await pool.query<User>('INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *', [
    username,
    email
  ])
  return result.rows[0]
}

export const getUserById = async (id: number): Promise<User | null> => {
  const result = await pool.query<User>('SELECT * FROM users WHERE id = $1', [id])
  return result.rows[0] || null
}
