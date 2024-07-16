"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IPTableRule_1 = __importDefault(require("../models/IPTableRule"));
class IpTablesService {
    async getIPTableRules() {
        return await IPTableRule_1.default.findAll();
    }
    async getIPTableRule(id) {
        return await IPTableRule_1.default.findByPk(id);
    }
    async createIPTableRule(data) {
        return await IPTableRule_1.default.create(data);
    }
    async updateIPTableRule(id, data) {
        return await IPTableRule_1.default.update(data, {
            where: {
                id
            }
        });
    }
    async deleteIPTableRule(id) {
        return await IPTableRule_1.default.destroy({
            where: {
                id
            }
        });
    }
    async deleteAllIPTableRules() {
        return await IPTableRule_1.default.destroy({
            where: {},
            truncate: true
        });
    }
    async getIPTableRulesByTarget(target) {
        return await IPTableRule_1.default.findAll({
            where: {
                target
            }
        });
    }
}
exports.default = new IpTablesService();
