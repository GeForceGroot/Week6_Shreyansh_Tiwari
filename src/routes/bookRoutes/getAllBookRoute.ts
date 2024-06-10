import e, { Router, Request, Response } from 'express'
import { getAllBook } from '../../controller/bookConroller/getAllBookController'

const getAllBooksRoute = Router();

getAllBooksRoute.get('/:id?', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const allBook: any = await getAllBook(req, res, id);
        return allBook
    } catch (error) {
        res.status(500).send('Error in getting all books' + error);
    }
})


export {
    getAllBooksRoute
}
