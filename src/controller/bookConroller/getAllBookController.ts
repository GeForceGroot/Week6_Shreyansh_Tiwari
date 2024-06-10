import { Request, Response } from 'express'
import { getBooks } from '../../services/bookSrervices/getALlBookService'


export const getAllBook = async (req: Request, res: Response, id: any)=>{
    const book = await getBooks(req.body, id);
    res.send(book)
}