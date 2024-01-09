const Sequelize = require("sequelize");
const db = require("../utils/database_connection");

const ActivityStatus = db.define(
  "ActivityStatus",
  {
    ActivityStatusId: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Name: {
      type: Sequelize.DataTypes.STRING,
    },
    IsActive: {
      type: Sequelize.DataTypes.BOOLEAN,
      default: false,
    },
  },
  {
    tableName: "ActivityStatus",
    timestamps: true,
    createdAt: "CreatedAt",
    updatedAt: "UpdatedAt",
    freezeTableName: true,
  },
);

module.exports = ActivityStatus;
