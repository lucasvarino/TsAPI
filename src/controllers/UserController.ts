import { Request, Response} from 'express';
import UserModel from '../database/models/UserModel';
import bcrypt from 'bcryptjs';

class UserController {

     public async create(req: Request, res: Response) {
        const { email, password } = req.body;
        const userExists = await UserModel.findOne({where: {email: email}});
        
        if (userExists) {
            return res.json({error: "the user is already registered"}).sendStatus(409);
        }

        const userPasswordHash = await bcrypt.hash(password, 8);

        await UserModel.create({email: email, password: userPasswordHash});
        return res.json({success: true, user: {email: email, password: userPasswordHash}});
    }
}

export default new UserController();