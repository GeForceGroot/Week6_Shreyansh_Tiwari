"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../pgConfig/db"));
const uuid_1 = require("uuid");
const UserModel_1 = require("../model/UserModel");
const authorModel_1 = require("../model/authorModel");
const paymentModel_1 = require("../model/paymentModel");
const reviewModel_1 = require("../model/reviewModel");
const ratingModel_1 = require("../model/ratingModel");
class Book extends sequelize_1.Model {
}
exports.Book = Book;
Book.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        defaultValue: (0, uuid_1.v4)()
    },
    bookCode: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    publishedYear: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    authors: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: false,
    },
    externalId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: db_1.default,
    tableName: 'Books',
});
Book.hasMany(authorModel_1.Author);
authorModel_1.Author.hasMany(Book);
Book.belongsTo(authorModel_1.Author);
authorModel_1.Author.belongsTo(Book);
Book.hasMany(reviewModel_1.Review, {
    foreignKey: 'bookId'
});
reviewModel_1.Review.belongsTo(Book, {
    foreignKey: 'bookId'
});
Book.hasMany(ratingModel_1.Rating, {
    foreignKey: 'bookId'
});
UserModel_1.User.hasMany(reviewModel_1.Review, {
    foreignKey: 'userId'
});
reviewModel_1.Review.belongsTo(UserModel_1.User, {
    foreignKey: 'userId'
});
UserModel_1.User.hasMany(ratingModel_1.Rating, {
    foreignKey: 'userId'
});
ratingModel_1.Rating.belongsTo(UserModel_1.User, {
    foreignKey: 'userId'
});
UserModel_1.User.hasMany(paymentModel_1.Payment, {
    foreignKey: 'userId'
});
paymentModel_1.Payment.belongsTo(UserModel_1.User, {
    foreignKey: 'userId'
});
Book.hasMany(paymentModel_1.Payment, {
    foreignKey: 'bookId'
});
paymentModel_1.Payment.belongsTo(Book, {
    foreignKey: 'bookId'
});
//# sourceMappingURL=bookModel.js.map