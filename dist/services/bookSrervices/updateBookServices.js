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
exports.updateBookData = void 0;
const bookModel_1 = require("../../model/bookModel");
const authcanticate_1 = require("../../common/authcanticate");
function updateBookData(data, id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const islogin = yield (0, authcanticate_1.authencation)(data);
            if (islogin) {
                const isAdmin = yield islogin.isAdmin;
                if (isAdmin && id) {
                    const book = yield bookModel_1.Book.findOne({
                        where: {
                            bookCode: id
                        }
                    });
                    const updatedbook = yield book.update({
                        authors: data.newAuthors
                    });
                    return updatedbook;
                }
                else {
                    return "Only Admin can update book data";
                }
            }
            else {
                return "You are not logged In.";
            }
        }
        catch (error) {
            return `Error in update book data:- ${error}`;
        }
    });
}
exports.updateBookData = updateBookData;
//# sourceMappingURL=updateBookServices.js.map