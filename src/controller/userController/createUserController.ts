import { Router, Request, Response } from 'express'
import { addUser } from '../../services/userServices/createUserservices'


export const addNewUser = async (req: Request, res: Response)=>{
    const user = await addUser(req.body);
    res.send(user)
}