"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticationController_1 = require("../controllers/authenticationController");
const router = (0, express_1.Router)();
router.post('/login', authenticationController_1.userLogin);
exports.default = router;
