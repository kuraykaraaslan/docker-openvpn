"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:pass@localhost:5432/nodeseq');
exports.default = sequelize;
