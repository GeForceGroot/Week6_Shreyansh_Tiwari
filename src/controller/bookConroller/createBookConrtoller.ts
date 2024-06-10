import { Router, Request, Response } from 'express'
import { addBook } from '../../services/bookSrervices/createBookService'


export const createNewBook = async (req: Request, res: Response)=>{
    const book = await addBook(req.body);
    res.send(book)
}