import { Request, Response } from 'express'
import { allReviews } from '../../services/ReviewServices/getReviewService'


export const getAllReview = async (req: Request, res: Response, id: any)=>{
    const review = await allReviews(id);
    res.send(review)
}