const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:new_password@209.38.198.237:5432/nodeseq');

export default sequelize;