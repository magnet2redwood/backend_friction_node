const Sequelize = require("sequelize");
const db = require("../utils/database_connection");
const serviceTechModel = require('./service_tech_model');
const railUnitLocationModel = require('./rail_unit_location_model');
const activityTypeModel = require('./activity_type_model');
const activityStatusModel = require('./activity_status_model');
const userModel = require('./user_model');

const Activity = db.define(
  "Activity",
  {
    ActivityId: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ActivityTypeSerialId: {
        type: Sequelize.DataTypes.STRING
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
    IsAmended : {
        type: Sequelize.DataTypes.BOOLEAN,
    },
    ActualWorkStartLAT: {
        type: Sequelize.DataTypes.STRING,
    },
    ActualWorkStartLONG: {
        type: Sequelize.DataTypes.STRING,
    },
    ActualWorkEndLAT: {
        type: Sequelize.DataTypes.STRING,
    },
    ActualWorkEndLONG: {
        type: Sequelize.DataTypes.STRING,
    },
    TruckId: {
        type: Sequelize.DataTypes.INTEGER,
    },
    MileageStart: {
        type: Sequelize.DataTypes.STRING,
    },
    MileageEnd: {
        type: Sequelize.DataTypes.STRING,
    },
    IsActive: {
        type: Sequelize.DataTypes.BOOLEAN,
        default: true,
    },
  },
  {
    tableName: "Activity",
    timestamps: true,
    createdAt: "CreatedAt",
    updatedAt: "UpdatedAt",
    freezeTableName: true,
  },
);

Activity.belongsTo(serviceTechModel, {foreignKey: "SeriviceTechId"});
Activity.belongsTo(railUnitLocationModel, {foreignKey: "RailUnitLocationId"});
Activity.belongsTo(activityTypeModel, {foreignKey: "ActivityTypeId"});
Activity.belongsTo(activityStatusModel, {foreignKey: "ActivityStatusId"});
Activity.belongsTo(userModel, {foreignKey: "CreatedBy"});

module.exports = Activity;
