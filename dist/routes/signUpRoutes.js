"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticationController_1 = require("../controllers/authenticationController");
const router = (0, express_1.Router)();
router.post('/signup', authenticationController_1.userSignUp);
exports.default = router;
