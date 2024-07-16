"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
router.get('/uname', function (req, res, next) {
    const { exec } = require('child_process');
    exec('uname -a', (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(stdout);
    });
});
exports.default = router;
