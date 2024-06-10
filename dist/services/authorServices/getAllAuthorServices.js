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
exports.getAuthors = void 0;
const authorModel_1 = require("../../model/authorModel");
const bookModel_1 = require("../../model/bookModel");
const authcanticate_1 = require("../../common/authcanticate");
const sequelize_1 = require("sequelize");
function getAuthors(data, id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const islogin = yield (0, authcanticate_1.authencation)(data);
            if (islogin) {
                if (id) {
                    const author = yield authorModel_1.Author.findOne({
                        where: {
                            name: id
                        }
                    });
                    const listOfBooks = yield bookModel_1.Book.findAll({
                        where: {
                            authors: {
                                [sequelize_1.Op.contains]: [author.dataValues.name]
                            }
                        }
                    });
                    return { author, listOfBooks };
                }
                else {
                    const allAuthor = yield authorModel_1.Author.findAll();
                    return allAuthor;
                }
            }
            else {
                return "You are not logged In.";
            }
        }
        catch (error) {
            return `Error in getting all authors:- ${error}`;
        }
    });
}
exports.getAuthors = getAuthors;
//# sourceMappingURL=getAllAuthorServices.js.map