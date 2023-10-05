import express, { Router } from 'express';
import { createResidency, getResidencies, getResidency } from '../controllers/residencyCtrl.js';

const router = express.Router()

router.post("/create", createResidency);
router.get("/allresidencies", getResidencies);
router.get("/:id", getResidency)

export { router as residencyRoute }