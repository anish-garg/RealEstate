import express, { Router } from 'express';
import {createResidency} from '../controllers/residencyCtrl.js';

const router = express.Router()

router.post("/create", createResidency)

export { router as residencyRoute }