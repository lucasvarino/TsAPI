import { Request, Response } from 'express';
import User from '../models/UserModel';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

class AuthController {

    public async sign (req: Request, res: Response) {
        const { email, password } = req.body;
        const user = await User.findOne({where: {email: email}});

        if (user){
            const isValidPassword = await bcrypt.compare(password, user.password);
            
            if(!isValidPassword){
                return res.sendStatus(401);
            }

            const token = jwt.sign({id: user?.id}, 'secret', {expiresIn: '1d'});          
            return res.json({success: true, user: {id: user.id, email: user.email}, token: token});
        }
        
        return res.json({error: 'user not found'}).sendStatus(409);

    }
}

export default new AuthController();