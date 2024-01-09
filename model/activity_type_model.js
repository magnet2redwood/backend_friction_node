const Sequelize = require("sequelize");
const db = require("../utils/database_connection");

const ActivityType = db.define(
  "ActivityType",
  {
    ActivityTypeId: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ActivityName: {
      type: Sequelize.DataTypes.STRING,
    },
    IsActive: {
        type: Sequelize.DataTypes.BOOLEAN,
        default: false,
    }
  },
  {
    tableName: "ActivityType",
    timestamps: true,
    createdAt: "CreatedAt",
    updatedAt: "UpdatedAt",
    freezeTableName: true,
  },
);

module.exports = ActivityType;
