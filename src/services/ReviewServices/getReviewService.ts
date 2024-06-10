import { Review } from '../../model/reviewModel'

export async function allReviews(id: any) {
    try {
        const reviews: any = await Review.findAll({
            where: {
                bookId: id
            }
        })
        return reviews;
    } catch (error) {
        return `Error in getting all rating:- ${error}`
    }
}