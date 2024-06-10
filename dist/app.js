"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createUserRoute_1 = require("./routes/userRoutes/createUserRoute");
const loginUserRoute_1 = require("./routes/userRoutes/loginUserRoute");
const authenticateUserRoute_1 = require("./routes/userRoutes/authenticateUserRoute");
const createBook_1 = require("./routes/bookRoutes/createBook");
const getAllBookRoute_1 = require("./routes/bookRoutes/getAllBookRoute");
const updateBook_1 = require("./routes/bookRoutes/updateBook");
const deletebooRoute_1 = require("./routes/bookRoutes/deletebooRoute");
const createAuthorRoute_1 = require("./routes/authorRoutes/createAuthorRoute");
const getAllAuthorRoute_1 = require("./routes/authorRoutes/getAllAuthorRoute");
const updateAuthorRoute_1 = require("./routes/authorRoutes/updateAuthorRoute");
const deleteAuthorRoute_1 = require("./routes/authorRoutes/deleteAuthorRoute");
const createReview_1 = require("./routes/ReviewRoutes/createReview");
const getReview_1 = require("./routes/ReviewRoutes/getReview");
const deleteReview_1 = require("./routes/ReviewRoutes/deleteReview");
const giveRatingRoute_1 = require("./routes/ratingRoutes/giveRatingRoute");
const getRating_1 = require("./routes/ratingRoutes/getRating");
const orderRoute_1 = require("./routes/paymentRoutes/orderRoute");
const getOrderRoute_1 = require("./routes/paymentRoutes/getOrderRoute");
const merchantRoutes_1 = require("./routes/merchatRoutes/merchantRoutes");
const app = (0, express_1.default)();
const port = 8080;
app.use(express_1.default.json());
//  MiddelWare to create new user
app.use('/register', createUserRoute_1.createUserRoute);
//  MiddelWare to login user
app.use('/login', loginUserRoute_1.loginUserRoute);
// Middleware to authenticate user
app.use('/users/me', authenticateUserRoute_1.authenticateUserRoute);
// Middleware to create a book
app.use('/books', createBook_1.createBook);
// Middleware to get all books and using id 
app.use('/allBooks', getAllBookRoute_1.getAllBooksRoute);
// Middleware to update an book by id
app.use('/updateBook', updateBook_1.updateBookRoute);
// Middleware to delete a book by id
app.use('/deleteBook', deletebooRoute_1.deleteBookRoute);
// Middleware to create an author
app.use('/createAuthor', createAuthorRoute_1.cretaAuthorRoute);
// Middleware to retirve all authors
app.use('/allAuthors', getAllAuthorRoute_1.getAllAuthorRoute);
// Middleware to update an author
app.use('/updateAuthor', updateAuthorRoute_1.updateAuthorRoute);
// Middleware to delete an author
app.use('/deleteAuthor', deleteAuthorRoute_1.deleteAuthorRoute);
// Midellware to write a reviws
app.use('/writeReview', createReview_1.writeReviewRoute);
// Middelware to get review of a book
app.use('/getReview', getReview_1.getBookReview);
// Middleware to delete review
app.use('/deleteReview', deleteReview_1.deleteReview);
// Middleware to give rating
app.use('/books/rating', giveRatingRoute_1.ratingRoute);
// Middleware to get all rating
app.use('/getAllRating', getRating_1.getAllRatingRoute);
// Middlerware to place order 
app.use('/order', orderRoute_1.orderRoute);
// Middleware to get order data with id 
app.use('/orders', getOrderRoute_1.getOrderRoute);
// Middleware for merchent 
app.use('/merchent', merchantRoutes_1.merchantRoutes);
app.listen(port, () => {
    console.log(`server is running  http://localhost:8080`);
});
//# sourceMappingURL=app.js.map