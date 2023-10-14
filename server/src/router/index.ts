import express from 'express';
import * as userController from '../controllers/user-controller.js';

const router = express.Router();

router.post('/getUser', userController.getUser);

export default router;
