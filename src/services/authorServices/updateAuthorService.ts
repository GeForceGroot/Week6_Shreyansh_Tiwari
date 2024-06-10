import { Author } from '../../model/authorModel'
import { authencation } from '../../common/authcanticate';


export async function updateAuthorData(data: any, id: any) {
    try {
        const islogin: any = await authencation(data);
        if (islogin) {
            const isAdmin = await islogin.isAdmin;
            if (isAdmin && id) {
                const author:any = await Author.findOne({
                    where: {
                        name: id
                    }
                })
                const updatedAuthor = await author.update({
                    bio: data.bio
                })
                return updatedAuthor
            }else{
                return "Only Admin can update author data"
            }
        } else {
            return "You are not logged In."
        }
    } catch (error) {
        return `Error in updating author data:- ${error}`
    }
}