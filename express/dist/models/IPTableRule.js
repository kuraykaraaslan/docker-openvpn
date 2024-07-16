"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// IPTableRule.tsx
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("@/libs/database"));
/*
Chain INPUT (policy ACCEPT)
target     prot opt source               destination

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination
*/
const IPTableRule = database_1.default.define('ip_table_rules', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    target: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    prot: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    opt: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    source: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    destination: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
});
exports.default = IPTableRule;
