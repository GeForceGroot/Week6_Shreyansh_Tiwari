import { Request, Response } from 'express'
import { addAuthor } from '../../services/authorServices/createAuthorService'


export const createNewAthor = async (req: Request, res: Response)=>{
    const author = await addAuthor(req.body);
    res.send(author)
}