const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:postgres@database:5432/segkadev')

module.exports = sequelize