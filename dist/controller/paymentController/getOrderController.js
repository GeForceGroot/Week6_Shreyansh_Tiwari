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
exports.getOrders = void 0;
const getOrderServices_1 = require("../../services/paymentServices/getOrderServices");
const getOrders = (req, res, id) => __awaiter(void 0, void 0, void 0, function* () {
    const orderDeatils = yield (0, getOrderServices_1.orderData)(req.body, id);
    res.send(orderDeatils);
});
exports.getOrders = getOrders;
//# sourceMappingURL=getOrderController.js.map