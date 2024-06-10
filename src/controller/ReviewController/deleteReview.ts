import { Request, Response } from 'express'
import { reviewsDeleteUpdate } from '../../services/ReviewServices/deleteReviewService'


export const reviewDelete = async (req: Request, res: Response, id: any)=>{
    const review = await reviewsDeleteUpdate(req.body, id);
    res.send(review)
}