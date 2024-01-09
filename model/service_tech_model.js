const Sequelize = require("sequelize");
const db = require("../utils/database_connection");

const ServiceTech = db.define(
  "ServiceTech",
  {
    ServiceTechId: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ServiceTechEmail: {
      type: Sequelize.DataTypes.STRING,
    },
    IsActive: {
      type: Sequelize.DataTypes.BOOLEAN,
      default: false,
    },
  },
  {
    tableName: "ServiceTech",
    timestamps: true,
    createdAt: "CreatedAt",
    updatedAt: "UpdatedAt",
    freezeTableName: true,
  },
);

module.exports = ServiceTech;
