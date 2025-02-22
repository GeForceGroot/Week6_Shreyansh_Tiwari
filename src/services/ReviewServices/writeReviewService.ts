import { Review } from '../../model/reviewModel'
import { authencation } from '../../common/authcanticate';
import { v4 as uuidv4 } from 'uuid';



export async function newReview(data: any, id: any) {
    try {
        const islogin: any = await authencation(data);
        if (islogin) {
            const newReview: any = await Review.create({
                id: uuidv4(),
                userId: islogin.id,
                bookId: id,
                content: data.content,
            })
            return newReview;
        } else {
            return "You are not logged In."
        }
    } catch (error) {
        return `Error in writing review:- ${error}`
    }
}