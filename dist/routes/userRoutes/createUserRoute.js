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
exports.createUserRoute = void 0;
const express_1 = require("express");
const createUserController_1 = require("../../controller/userController/createUserController");
const createUserRoute = (0, express_1.Router)();
exports.createUserRoute = createUserRoute;
createUserRoute.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield (0, createUserController_1.addNewUser)(req, res);
    }
    catch (error) {
        res.status(500).send('Error in creating new user' + error);
    }
}));
//# sourceMappingURL=createUserRoute.js.map