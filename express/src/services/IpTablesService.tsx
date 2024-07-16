import IPTableRule from "../models/IPTableRule";
import child_process from 'child_process';


class IpTablesService {
    public async getIPTableRules(): Promise<typeof IPTableRule[]> {
        return await IPTableRule.findAll();
    }

    public async getIPTableRule(id: number): Promise<typeof IPTableRule> {
        return await IPTableRule.findByPk(id);
    }

    public async createIPTableRule(data: typeof IPTableRule): Promise<typeof IPTableRule> {
        const registeredRule = await IPTableRule.build(data).save();
        this.applySingleIPTableRuleToSystem(registeredRule.dataValues);
        return registeredRule.dataValues;
    }

    public async updateIPTableRule(id: number, data: typeof IPTableRule): Promise<typeof IPTableRule> {
        return await IPTableRule.update(data, {
            where: {
                id
            }
        });
    }

    public async deleteIPTableRule(id: number): Promise<number> {
        return await IPTableRule.destroy({
            where: {
                id
            }
        });
    }

    public async deleteAllIPTableRules(): Promise<number> {
        return await IPTableRule.destroy({
            where: {},
            truncate: true
        });
    }

    public async getIPTableRulesByTarget(target: string): Promise<typeof IPTableRule[]> {
        return await IPTableRule.findAll({
            where: {
                target
            }
        });
    }


    public async flushIPTablesFromSystem(): Promise<void> {
        const command = `iptables -F`;
        child_process.execSync(command);
    }

    public async flushIPTablesFromDatabase(): Promise<void> {
        await this.deleteAllIPTableRules();
    }    

    public async applySingleIPTableRuleToSystem(rule: typeof IPTableRule): Promise<void> {
        var command = `iptables -A ${rule.chain}`;
        if (rule.target) command += ` -j ${rule.target}`;
        if (rule.prot) command += ` -p ${rule.prot}`;
        if (rule.opt) command += ` --${rule.opt}`;
        if (rule.source) command += ` -s ${rule.source}`;
        if (rule.destination) command += ` -d ${rule.destination}`;

        child_process.execSync(command);
    }

    public async applyAllIPTableRulesToSystem(): Promise<void> {
        const rules = await this.getIPTableRules();
        rules.forEach(rule => {
            this.applySingleIPTableRuleToSystem(rule);
        });
    }

}


export default new IpTablesService();
