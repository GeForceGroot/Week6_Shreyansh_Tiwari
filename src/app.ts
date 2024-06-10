import express, {Request, Response} from 'express'
import {createUserRoute} from './routes/userRoutes/createUserRoute'
import {loginUserRoute} from './routes/userRoutes/loginUserRoute'
import {authenticateUserRoute} from './routes/userRoutes/authenticateUserRoute'
import {createBook} from './routes/bookRoutes/createBook'
import {getAllBooksRoute} from './routes/bookRoutes/getAllBookRoute'
import {updateBookRoute} from './routes/bookRoutes/updateBook'
import {deleteBookRoute} from './routes/bookRoutes/deletebooRoute'
import {cretaAuthorRoute} from './routes/authorRoutes/createAuthorRoute'
import {getAllAuthorRoute} from './routes/authorRoutes/getAllAuthorRoute'
import {updateAuthorRoute} from './routes/authorRoutes/updateAuthorRoute'
import {deleteAuthorRoute} from './routes/authorRoutes/deleteAuthorRoute'
import {writeReviewRoute} from './routes/ReviewRoutes/createReview'
import {getBookReview} from './routes/ReviewRoutes/getReview'
import {deleteReview} from './routes/ReviewRoutes/deleteReview'
import {ratingRoute} from './routes/ratingRoutes/giveRatingRoute'
import {getAllRatingRoute} from './routes/ratingRoutes/getRating'
import {orderRoute} from './routes/paymentRoutes/orderRoute'
import {getOrderRoute} from './routes/paymentRoutes/getOrderRoute'
import {merchantRoutes} from './routes/merchatRoutes/merchantRoutes'


const app = express();
const port = 8080;


app.use(express.json())


//  MiddelWare to create new user
app.use('/register', createUserRoute)

//  MiddelWare to login user
app.use('/login', loginUserRoute)

// Middleware to authenticate user
app.use('/users/me', authenticateUserRoute)

// Middleware to create a book
app.use('/books', createBook)

// Middleware to get all books and using id 
app.use('/allBooks', getAllBooksRoute)

// Middleware to update an book by id
app.use('/updateBook', updateBookRoute)

// Middleware to delete a book by id
app.use('/deleteBook', deleteBookRoute)

// Middleware to create an author
app.use('/createAuthor', cretaAuthorRoute)

// Middleware to retirve all authors
app.use('/allAuthors', getAllAuthorRoute)

// Middleware to update an author
app.use('/updateAuthor', updateAuthorRoute)

// Middleware to delete an author
app.use('/deleteAuthor', deleteAuthorRoute)

// Midellware to write a reviws
app.use('/writeReview', writeReviewRoute)

// Middelware to get review of a book
app.use('/getReview', getBookReview);

// Middleware to delete review
app.use('/deleteReview', deleteReview)

// Middleware to give rating
app.use('/books/rating', ratingRoute)

// Middleware to get all rating
app.use('/getAllRating', getAllRatingRoute)

// Middlerware to place order 
app.use('/order', orderRoute)

// Middleware to get order data with id 
app.use('/orders', getOrderRoute)

// Middleware for merchent 
app.use('/merchent', merchantRoutes)

app.listen(port, ()=>{
    console.log(`server is running  http://localhost:8080`)
})
