"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const signUpRoutes_1 = __importDefault(require("./routes/signUpRoutes"));
const signUpRoutes_2 = __importDefault(require("./routes/signUpRoutes"));
const mongoose_1 = __importDefault(require("./config/mongoose")); // Import your mongoose connection
dotenv_1.default.config();
const app = (0, express_1.default)();
// Connect to MongoDB
(0, mongoose_1.default)(); // Call the function to connect to MongoDB
// Middleware
app.use(body_parser_1.default.json());
// Routes
app.use('/', signUpRoutes_1.default);
app.use('/', signUpRoutes_2.default);
// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
exports.default = app;
