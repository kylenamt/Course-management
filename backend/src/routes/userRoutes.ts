// src/routes/userRoutes.ts

import { Router } from 'express'
import { createUserController, getUserByIdController } from '../controllers/userController'

const router = Router()

router.post('/', createUserController)
router.get('/:id', getUserByIdController)

export default router
