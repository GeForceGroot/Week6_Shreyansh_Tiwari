import { Book } from '../../model/bookModel'
import { Author } from '../../model/authorModel'
import { Review } from '../../model/reviewModel'
import { Rating } from '../../model/ratingModel'
import { Payment } from '../../model/paymentModel'
import { authencation } from '../../common/authcanticate';
import { v4 as uuidv4 } from 'uuid';



export async function getOrder(data: any) {
    try {
        const islogin: any = await authencation(data);
        if(islogin){
            const isAdmin = await islogin.isAdmin;
            // to do to make it false
            if(isAdmin){
                const bookDeatils: any = await Book.findByPk(data.bookId)
                const newOrder: any = await Payment.create({
                    id: uuidv4(),
                    userId: islogin.id,
                    bookId: data.bookId,
                    amount: bookDeatils.price,
                    status: "Pending"
                })
                return newOrder
            }else{
                return "Error during placing order"
            }
        }
    } catch (error) {
        return `Error in pacling order:- ${error}`
    }
}