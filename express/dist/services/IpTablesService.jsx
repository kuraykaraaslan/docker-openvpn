"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IPTableRule_1 = __importDefault(require("../models/IPTableRule"));
const child_process_1 = __importDefault(require("child_process"));
class IpTablesService {
    async getIPTableRules() {
        return await IPTableRule_1.default.findAll();
    }
    async getIPTableRule(id) {
        return await IPTableRule_1.default.findByPk(id);
    }
    async createIPTableRule(data) {
        const registeredRule = await IPTableRule_1.default.build(data).save();
        this.applySingleIPTableRuleToSystem(registeredRule.dataValues);
        return registeredRule.dataValues;
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
    async flushIPTablesFromSystem() {
        const command = `iptables -F`;
        child_process_1.default.execSync(command);
    }
    async flushIPTablesFromDatabase() {
        await this.deleteAllIPTableRules();
    }
    async applySingleIPTableRuleToSystem(rule) {
        var command = `iptables -A ${rule.chain}`;
        if (rule.target)
            command += ` -j ${rule.target}`;
        if (rule.prot)
            command += ` -p ${rule.prot}`;
        if (rule.opt)
            command += ` --${rule.opt}`;
        if (rule.source)
            command += ` -s ${rule.source}`;
        if (rule.destination)
            command += ` -d ${rule.destination}`;
        child_process_1.default.execSync(command);
    }
    async applyAllIPTableRulesToSystem() {
        const rules = await this.getIPTableRules();
        rules.forEach(rule => {
            this.applySingleIPTableRuleToSystem(rule);
        });
    }
}
exports.default = new IpTablesService();
