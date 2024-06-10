import { Book } from '../../model/bookModel'
import { authencation } from '../../common/authcanticate';


export async function updateBookData(data: any, id: any) {
    try {
        const islogin: any = await authencation(data);
        if (islogin) {
            const isAdmin = await islogin.isAdmin;
            if (isAdmin && id) {
                const book:any = await Book.findOne({
                    where: {
                        bookCode: id
                    }
                })
                const updatedbook = await book.update({
                    authors: data.newAuthors
                })
                return updatedbook
            }else{
                return "Only Admin can update book data"
            }
        } else {
            return "You are not logged In."
        }
    } catch (error) {
        return `Error in update book data:- ${error}`
    }
}