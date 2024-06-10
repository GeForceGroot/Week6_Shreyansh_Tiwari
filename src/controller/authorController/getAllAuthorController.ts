import { Request, Response } from 'express'
import { getAuthors } from '../../services/authorServices/getAllAuthorServices'


export const getAllAuthor = async (req: Request, res: Response, id: any)=>{
    const book = await getAuthors(req.body, id);
    res.send(book)
}