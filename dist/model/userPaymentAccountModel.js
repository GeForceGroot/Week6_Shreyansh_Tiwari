"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../pgConfig/db"));
const contractModel_1 = require("./contractModel");
const adressModel_1 = require("./adressModel");
const bankAccountDeatilModel_1 = require("./bankAccountDeatilModel");
class Account extends sequelize_1.Model {
}
exports.Account = Account;
Account.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    userId: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    bankDetailsUId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'Bank_Details',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    addressUId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'Addresses',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
}, {
    sequelize: db_1.default,
    tableName: 'Accounts',
});
Account.hasMany(contractModel_1.Contract, { foreignKey: 'accountUId' });
contractModel_1.Contract.belongsTo(Account, { foreignKey: 'accountUId' });
Account.belongsTo(adressModel_1.Address, { foreignKey: 'addressUId' });
Account.belongsTo(bankAccountDeatilModel_1.BankDetails, { foreignKey: 'bankDetailsUId' });
//# sourceMappingURL=userPaymentAccountModel.js.map