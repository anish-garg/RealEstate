import express, { Router } from 'express'
import { allBookings, allFav, bookVisit, cancelBooking, createUser, toFav } from '../controllers/userCtrl.js'

const router = express.Router()

router.post("/register", createUser)
router.post("/bookVisit/:id", bookVisit)
router.get("/allbookings", allBookings)
router.post("/removebookings/:id", cancelBooking)
router.post("/addtofav/:rid", toFav)
router.get("/allfavresidencies", allFav)

export { router as userRoute }