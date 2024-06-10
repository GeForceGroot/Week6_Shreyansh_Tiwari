import { Author } from '../../model/authorModel'
import { authencation } from '../../common/authcanticate';
import { v4 as uuidv4 } from 'uuid';



export async function addAuthor(data: any) {
    try {
        const islogin: any = await authencation(data);
        if (islogin) {
            const isAdmin = await islogin.isAdmin;
            if (isAdmin) {
                const newBook = await Author.create({
                    id: uuidv4(),
                    name: data.name,
                    bio: data.bio,
                    birthdate: data.birthdate,
                    isSystemUser: data.isSystemUser,
                })
                return newBook;
            }else{
                return "Only Admin can Create new author."
            }
        } else {
            return "You are not logged In."
        }
    } catch (error) {
        return `Only Admin can Create new author:- ${error}`
    }
}