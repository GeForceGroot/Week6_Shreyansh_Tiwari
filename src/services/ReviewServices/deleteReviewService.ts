import { authencation } from '../../common/authcanticate';
import { Review } from '../../model/reviewModel'

export async function reviewsDeleteUpdate(data: any, id: any) {
    try {
        const islogin: any = await authencation(data);
        if (islogin) {
            const isAdmin = await islogin.isAdmin;
            if (isAdmin || islogin.id == id) {
                const isReviewExist = await Review.findByPk(id)
                if (isReviewExist) {
                    const review: any = await Review.destroy({
                        where: {
                            id: id
                        }
                    })
                    return "Review deleted successfully"
                }
            }
        } else {
            return "You are not logged In."
        }
    } catch (error) {
        return `Error in updating author data:- ${error}`
    }
}