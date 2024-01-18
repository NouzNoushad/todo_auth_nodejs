import express from "express"
import { signUp, signIn, logout } from "../controllers/auth_controllers.js"
import { authVerify } from "../middlewares/auth_verify.js";

const router = express.Router()

router.post('/sign_up', signUp);
router.post('/sign_in', signIn);
router.get('/logout', authVerify, logout);


export default router