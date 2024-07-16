"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const OpenVPNService_1 = __importDefault(require("../services/OpenVPNService"));
const GenericResponse_1 = __importDefault(require("../responses/GenericResponse"));
router.get('/', async (req, res, next) => {
    const openvpnService = new OpenVPNService_1.default();
    const openvpn = await openvpnService.statusOpenVPNServer();
    const response = new GenericResponse_1.default(200, openvpn);
    res.send(response);
});
router.post('/start', async (req, res, next) => {
    const openvpnService = new OpenVPNService_1.default();
    await openvpnService.startOpenVPNServer();
    const response = new GenericResponse_1.default(200, 'OpenVPN server started');
    res.send(response);
});
exports.default = router;
