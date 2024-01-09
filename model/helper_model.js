const Sequelize = require("sequelize");
const db = require("../utils/database_connection");
const serviceTechModel = require("./service_tech_model");
const activityModel = require('./activity_model');

const Helper = db.define(
  "Helper",
  {
    HelperId: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    EstimatedWorkStartDate: {
      type: Sequelize.DataTypes.STRING,
    },
    EstimatedWorkEndDate: {
      type: Sequelize.DataTypes.STRING,
    },
    ActualWorkStartDate: {
      type: Sequelize.DataTypes.STRING,
    },
    ActualWorkEndDate: {
      type: Sequelize.DataTypes.STRING,
    },
    IsActive : {
      type: Sequelize.DataTypes.BOOLEAN,
      default: false,
    }
  },
  {
    tableName: "Helper",
    timestamps: true,
    createdAt: "CreatedAt",
    updatedAt: "UpdatedAt",
    freezeTableName: true,
  },
);

Helper.belongsTo(serviceTechModel, {foreignKey: "ServiceTechId"});
Helper.belongsTo(activityModel, {foreignKey: "ActivityId"});

module.exports = Helper;
