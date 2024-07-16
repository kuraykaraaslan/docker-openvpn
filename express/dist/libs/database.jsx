"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:expressjs@209.38.198.237:5432/expressjs');
exports.default = sequelize;
