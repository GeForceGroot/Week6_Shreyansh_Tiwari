import { Request, Response } from 'express'
import { deletBookData } from '../../services/bookSrervices/deleteBookServeice'


export const deletBook = async (req: Request, res: Response, id: any)=>{
    const data = await deletBookData(req.body, id);
    res.send(data)
}