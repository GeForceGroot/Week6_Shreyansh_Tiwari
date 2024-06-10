import { Request, Response } from 'express'
import { updateBookData } from '../../services/bookSrervices/updateBookServices'


export const updateBook = async (req: Request, res: Response, id: any)=>{
    const book = await updateBookData(req.body, id);
    res.send(book)
}