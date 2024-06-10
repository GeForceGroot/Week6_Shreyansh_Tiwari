import { Request, Response } from 'express'
import { newRating } from '../../services/ratingServices/giveRatingServices'


export const assignNewRating = async (req: Request, res: Response, id: any)=>{
    const giveRating = await newRating(req.body, id);
    res.send(giveRating)
}