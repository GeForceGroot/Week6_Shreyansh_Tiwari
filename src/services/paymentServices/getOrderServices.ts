import { Book } from '../../model/bookModel'
import { Author } from '../../model/authorModel'
import { Review } from '../../model/reviewModel'
import { Rating } from '../../model/ratingModel'
import { Payment } from '../../model/paymentModel'
import { authencation } from '../../common/authcanticate';
import { v4 as uuidv4 } from 'uuid';



export async function orderData(data: any, id: any) {
    try {
        const islogin: any = await authencation(data);
        if(islogin){
            const isAdmin = await islogin.isAdmin;
            // to do make it false
            if(isAdmin){
                const orderDetails: any = await Payment.findByPk(id)
                return orderDetails
            }else{
                return "Error during getting order deatils"
            }
        }
    } catch (error) {
        return `Error during getting order deatils:- ${error}`
    }
}