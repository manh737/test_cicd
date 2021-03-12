import {Router} from 'express';
import AuthController from "../../controllers/auth.controller.js";
const router = Router();

router.post('/signin', AuthController.signin);
router.post('/signup', AuthController.signup);
router.post('/forgot-password', AuthController.forgotPassword);

export default router;