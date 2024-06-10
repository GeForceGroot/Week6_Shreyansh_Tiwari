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
exports.getOrderData = void 0;
const orderServices_1 = require("../../services/paymentServices/orderServices");
const getOrderData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const palcedOrder = yield (0, orderServices_1.getOrder)(req.body);
    res.send(palcedOrder);
});
exports.getOrderData = getOrderData;
//# sourceMappingURL=orderController.js.map