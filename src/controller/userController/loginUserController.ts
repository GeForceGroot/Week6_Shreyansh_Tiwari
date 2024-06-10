import { Router, Request, Response } from 'express'
import { userLogin } from '../../services/userServices/loginUserService'


export const loginUser = async (req: Request, res: Response)=>{
    const userData = await userLogin(req.body);
    res.send(userData)
}