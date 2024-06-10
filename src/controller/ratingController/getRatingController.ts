import { Request, Response } from 'express'
import { allRating } from '../../services/ratingServices/getRatingServices'


export const getAllRating = async (req: Request, res: Response, id: any)=>{
    const ratings = await allRating(id);
    res.send(ratings)
}