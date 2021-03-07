import { Router, Request, Response } from 'express';
import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json({success: true});
});

router.post("/user", UserController.create);
router.post("/auth", AuthController.sign)

export default router;