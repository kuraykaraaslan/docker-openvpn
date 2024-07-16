"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const IpTablesService_1 = __importDefault(require("../services/IpTablesService"));
const GenericResponse_1 = __importDefault(require("../responses/GenericResponse"));
router.get('/', async (req, res, next) => {
    const iptables = await IpTablesService_1.default.getIPTableRules();
    const response = new GenericResponse_1.default(200, iptables);
    res.send(response);
});
router.get('/:id', async (req, res, next) => {
    const id = parseInt(req.params.id);
    const iptable = await IpTablesService_1.default.getIPTableRule(id);
    const response = new GenericResponse_1.default(200, iptable);
    res.send(response);
});
router.post('/', async (req, res, next) => {
    const iptable = await IpTablesService_1.default.createIPTableRule(req.body);
    const response = new GenericResponse_1.default(200, iptable);
    res.send(response);
});
router.put('/:id', async (req, res, next) => {
    const id = parseInt(req.params.id);
    const iptable = await IpTablesService_1.default.updateIPTableRule(id, req.body);
    const response = new GenericResponse_1.default(200, iptable);
    res.send(response);
});
router.delete('/:id', async (req, res, next) => {
    const id = parseInt(req.params.id);
    const result = await IpTablesService_1.default.deleteIPTableRule(id);
    const response = new GenericResponse_1.default(200, result);
    res.send(response);
});
router.delete('/', async (req, res, next) => {
    const result = await IpTablesService_1.default.deleteAllIPTableRules();
    const response = new GenericResponse_1.default(200, result);
    res.send(response);
});
router.get('/target/:target', async (req, res, next) => {
    const target = req.params.target;
    const iptables = await IpTablesService_1.default.getIPTableRulesByTarget(target);
    const response = new GenericResponse_1.default(200, iptables);
    res.send(response);
});
exports.default = router;
