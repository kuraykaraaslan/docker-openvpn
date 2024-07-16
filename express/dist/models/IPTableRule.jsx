"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// IPTableRule.tsx
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../libs/database"));
/*
Chain INPUT (policy ACCEPT)
target     prot opt source               destination

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination
*/
var Chain;
(function (Chain) {
    Chain["INPUT"] = "INPUT";
    Chain["FORWARD"] = "FORWARD";
    Chain["OUTPUT"] = "OUTPUT";
})(Chain || (Chain = {}));
var Target;
(function (Target) {
    Target["ACCEPT"] = "ACCEPT";
    Target["DROP"] = "DROP";
})(Target || (Target = {}));
const IPTableRule = database_1.default.define('ip_table_rules', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    chain: {
        type: sequelize_1.DataTypes.ENUM(Chain.INPUT, Chain.FORWARD, Chain.OUTPUT),
        defaultValue: Chain.INPUT,
        allowNull: true
    },
    target: {
        type: sequelize_1.DataTypes.ENUM(Target.ACCEPT, Target.DROP),
        defaultValue: Target.DROP,
        allowNull: true
    },
    prot: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    opt: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    source: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    destination: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
});
(async () => {
    await database_1.default.sync({ force: true });
    // Code here
})();
exports.default = IPTableRule;
