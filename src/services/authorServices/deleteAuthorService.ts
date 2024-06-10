import { Author } from '../../model/authorModel'
import { authencation } from '../../common/authcanticate';


export async function deletAuthorData(data: any, id: any) {
    try {
        const islogin: any = await authencation(data);
        if (islogin) {
            const isAdmin = await islogin.isAdmin;
            if (isAdmin && id) {
                const book:any = await Author.findOne({
                    where: {
                        name: id
                    }
                })
                const updatedbookData = await Author.destroy({
                    where:{
                        id: book.id
                    }
                })
                return "Author deleted scuccefully"
            }else{
                return "Only Admin can delete a book"
            }
        } else {
            return "You are not logged In."
        }
    } catch (error) {
        return `Author deleted scuccefully:- ${error}`
    }
}