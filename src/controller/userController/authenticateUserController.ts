import { Router, Request, Response } from 'express'
import { authUser } from '../../services/userServices/authUserservice'


export const authenticateUser = async (req: Request, res: Response)=>{
    const userData = await authUser(req.body);
    res.send(userData)
}