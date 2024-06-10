"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBooks = void 0;
const bookModel_1 = require("../../model/bookModel");
const authorModel_1 = require("../../model/authorModel");
const reviewModel_1 = require("../../model/reviewModel");
const ratingModel_1 = require("../../model/ratingModel");
const authcanticate_1 = require("../../common/authcanticate");
function getBooks(data, id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const islogin = yield (0, authcanticate_1.authencation)(data);
            if (islogin) {
                if (id) {
                    const book = yield bookModel_1.Book.findOne({
                        where: {
                            bookCode: id
                        }
                    });
                    const authorDetails = [];
                    const bookAuthor = book.authors;
                    bookAuthor.forEach((author) => __awaiter(this, void 0, void 0, function* () {
                        const authorDetail = yield authorModel_1.Author.findOne({
                            where: {
                                name: author
                            }
                        });
                        authorDetails.push(authorDetail);
                    }));
                    const reviews = yield reviewModel_1.Review.findAll({
                        where: {
                            bookId: book.id
                        }
                    });
                    const allRating = yield ratingModel_1.Rating.findAll({
                        where: {
                            bookId: book.id
                        }
                    });
                    var sum = 0;
                    allRating.forEach((elemnet) => {
                        sum += elemnet.dataValues.rating;
                    });
                    const avgRating = sum / allRating.length;
                    return {
                        book, authorDetails, reviews, avgRating
                    };
                }
                else {
                    const allBooks = yield bookModel_1.Book.findAll();
                    return allBooks;
                }
            }
            else {
                return "You are not logged In.";
            }
        }
        catch (error) {
            return `Error in getting all books:- ${error}`;
        }
    });
}
exports.getBooks = getBooks;
//# sourceMappingURL=getALlBookService.js.map