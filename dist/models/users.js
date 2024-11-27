"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const userSchema = new mongoose_1.Schema({
    'username': { type: String, required: true },
    'email': { type: String, required: true },
    'grossSalary': { type: Number, required: true },
    'city': { type: String, required: true },
    'region': { type: String, required: false },
    'country': { type: String, required: false },
    'company': { type: String, required: true },
    'yoE': { type: Number, required: true },
    'yoEwithinTheCompany': { type: Number, required: true },
    'weekelyRemoteWorking': { type: Boolean, required: true },
    'weekelyRemoteWorkingInDays': { type: Number, required: false },
    'industry': { type: String, required: true },
    'jobTitle': { type: String, required: true },
    'ticketRestaurant': { type: Boolean, required: true },
    'ticketRestaurantAmount': { type: Number, required: false },
    'ticketRestaurantValue': { type: Number, required: false }
}, { collection: 'users' });
const User = mongoose_1.default.model('User', userSchema);
exports.default = User;
