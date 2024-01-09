const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.SEQUELIZE_DATABASE,
  process.env.SEQUELIZE_USER,
  process.env.SEQUELIZE_PASSWORD,
  {
    host: process.env.SEQUELIZE_HOST,
    port: 3306,
    dialect: "mysql",
  },
);

module.exports = sequelize;
