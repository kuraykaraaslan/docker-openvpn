"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const GenericResponse_1 = __importDefault(require("../responses/GenericResponse"));
const router = express_1.default.Router();
router.get('/', function (req, res, next) {
    const EXPRESS_APP_NAME = process.env.EXPRESS_APP_NAME || 'Express';
    const EXPRESS_APP_VERSION = process.env.EXPRESS_APP_VERSION || '1.0.0';
    const response = new GenericResponse_1.default(200, {
        appName: EXPRESS_APP_NAME,
        appVersion: EXPRESS_APP_VERSION,
        message: 'Welcome to Express!',
    });
    res.send(response);
});
module.exports = router;
exports.default = router;
