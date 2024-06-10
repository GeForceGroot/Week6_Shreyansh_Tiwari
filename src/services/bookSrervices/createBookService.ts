import { Book } from '../../model/bookModel'
import { authencation } from '../../common/authcanticate';
import { v4 as uuidv4 } from 'uuid';



export async function addBook(data: any) {
    try {
        const islogin: any = await authencation(data);
        if (islogin) {
            const isAdmin = await islogin.isAdmin;
            if (isAdmin) {
                const newBook = await Book.create({
                    id: uuidv4(),
                    bookCode: data.bookCode,
                    title: data.title,
                    description: data.description,
                    publishedYear: data.publishedYear,
                    price: data.price,
                    authors: data.authors,
                    externalId: islogin.id
                })
                return newBook;
            }else{
                return "Only Admin can Create Book."
            }
        } else {
            return "You are not logged In."
        }
    } catch (error) {
        return `Error in creating new book:- ${error}`
    }
}