import { Router, Request, Response } from 'express';
import UserController from './controllers/UserController';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json({success: true});
});

router.post("/user", UserController.create);

export default router;