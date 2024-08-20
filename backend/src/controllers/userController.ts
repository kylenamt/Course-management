// src/controllers/userController.ts

import { Request, Response } from 'express'
import { createUser, getUserById } from '../models/userModel'

export const createUserController = async (req: Request, res: Response) => {
  const { username, email } = req.body
  try {
    const user = await createUser(username, email)
    res.status(201).json(user)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' })
  }
}

export const getUserByIdController = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const user = await getUserById(Number(id))
    if (user) {
      res.status(200).json(user)
    } else {
      res.status(404).json({ error: 'User not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve user' })
  }
}
