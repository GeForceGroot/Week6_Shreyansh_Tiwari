import { Book } from '../../model/bookModel'
import { authencation } from '../../common/authcanticate';


export async function deletBookData(data: any, id: any) {
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
                const updatedbookData = await Book.destroy({
                    where:{
                        id: book.id
                    }
                })
                return "Book deleted scuccefully"
            }else{
                return "Only Admin can delete a book"
            }
        } else {
            return "You are not logged In."
        }
    } catch (error) {
        return `Error in deleteing book:- ${error}`
    }
}