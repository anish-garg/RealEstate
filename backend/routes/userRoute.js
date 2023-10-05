import express, { Router } from 'express'
import { createUser } from '../controllers/userCtrl.js'

const router = express.Router()

router.post("/register", createUser)

export { router as userRoute }