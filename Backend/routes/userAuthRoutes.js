import { Router } from "express";
import {Login, signup} from '../controller/userControls.js'
const router = Router();

router.post('/login',Login)
router.post('/signup', signup)
export default router;