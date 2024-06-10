import { Request, Response } from 'express'
import { deletAuthorData } from '../../services/authorServices/deleteAuthorService'


export const authorDelete = async (req: Request, res: Response, id: any)=>{
    const data = await deletAuthorData(req.body, id);
    res.send(data)
}