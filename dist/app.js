"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const signUpRoutes_1 = __importDefault(require("./routes/signUpRoutes"));
const signUpRoutes_2 = __importDefault(require("./routes/signUpRoutes"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const mongoose_1 = __importDefault(require("./config/mongoose")); // Import your mongoose connection
dotenv_1.default.config();
const app = (0, express_1.default)();
(0, mongoose_1.default)();
app.use(express_1.default.json());
// Routes
app.use('/', signUpRoutes_1.default);
app.use('/', signUpRoutes_2.default);
app.use('/', userRoute_1.default);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
exports.default = app;
