import e, { Router, Request, Response } from 'express'
import {createNewAthor} from '../../controller/authorController/createAuthorController'

const cretaAuthorRoute = Router();

cretaAuthorRoute.post('/',async (req: Request, res: Response) => {
    try {
        const newAuthor: any = await createNewAthor(req, res);
        return newAuthor
        }catch(error){
            res.status(500).send('Error in creating new author' + error);
        }
})


export {
    cretaAuthorRoute
}
