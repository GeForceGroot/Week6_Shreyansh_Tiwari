import { Book } from '../../model/bookModel'
import { Author } from '../../model/authorModel'
import { Review } from '../../model/reviewModel'
import { Rating } from '../../model/ratingModel'
import { authencation } from '../../common/authcanticate';
import { v4 as uuidv4 } from 'uuid';



export async function getBooks(data: any, id: any) {
    try {
        const islogin: any = await authencation(data);
        if (islogin) {
            if (id) {
                const book: any = await Book.findOne({
                    where: {
                        bookCode: id
                    }
                })
                const authorDetails: any = []
                const bookAuthor: [] = book.authors;
                bookAuthor.forEach(async author => {
                    const authorDetail = await Author.findOne({
                        where: {
                            name: author
                        }
                    })
                    authorDetails.push(authorDetail)
                });
                const reviews = await Review.findAll({
                    where: {
                        bookId: book.id
                    }
                })
                const allRating: any = await Rating.findAll({
                    where:{
                        bookId: book.id
                    }
                })
                var sum : any = 0;
                allRating.forEach((elemnet: any) => {
                    sum += elemnet.dataValues.rating
                });
                const avgRating:any = sum/allRating.length
                return {
                    book, authorDetails, reviews, avgRating
                }
            } else {
                const allBooks: any = await Book.findAll();
                return allBooks;
            }
        } else {
            return "You are not logged In."
        }
    } catch (error) {
        return `Error in getting all books:- ${error}`
    }
}