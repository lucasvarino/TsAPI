import { Router, Request, Response } from 'express';

import authMiddleware from './middlewares/authMiddleware';

import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json({success: true});
});

router.post("/user", UserController.create);
router.post("/auth", AuthController.sign)
router.get('/users', authMiddleware, UserController.index)

export default router;