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
exports.getAllRating = void 0;
const getRatingServices_1 = require("../../services/ratingServices/getRatingServices");
const getAllRating = (req, res, id) => __awaiter(void 0, void 0, void 0, function* () {
    const ratings = yield (0, getRatingServices_1.allRating)(id);
    res.send(ratings);
});
exports.getAllRating = getAllRating;
//# sourceMappingURL=getRatingController.js.map