"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const credentails_1 = __importDefault(require("../common/credentails"));
const db = new sequelize_1.Sequelize(credentails_1.default.postgres.DATABASE, 'postgres', credentails_1.default.postgres.PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    port: 5484
});
try {
    db.authenticate();
    console.log('Connection has been established successfully.');
}
catch (error) {
    console.error('Unable to connect to the database:', error);
}
db.sync();
exports.default = db;
//# sourceMappingURL=db.js.map