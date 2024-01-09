const Sequelize = require("sequelize");
const db = require("../utils/database_connection");

const RailUnitLocation = db.define(
  "RailUnitLocation",
  {
    RailUnitLocationId: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Division: {
      type: Sequelize.DataTypes.STRING,
    },
    SubDivision: {
      type: Sequelize.DataTypes.STRING,
    },
    MilePost: {
      type: Sequelize.DataTypes.STRING,
    },
    RailRoad: {
      type: Sequelize.DataTypes.STRING,
    },
    StateCode: {
      type: Sequelize.DataTypes.STRING,
    },
    State: {
      type: Sequelize.DataTypes.STRING,
    },
    Country: {
      type: Sequelize.DataTypes.STRING,
    },
    UnitTypeCode: {
      type: Sequelize.DataTypes.STRING,
    },
    UnitTypeName: {
      type: Sequelize.DataTypes.STRING,
    },
    Manufacturer: {
      type: Sequelize.DataTypes.BOOLEAN,
    },
    SingleDual: {
      type: Sequelize.DataTypes.INTEGER,
    },
    Priority: {
      type: Sequelize.DataTypes.INTEGER,
    },
    Latitude: {
      type: Sequelize.DataTypes.STRING,
    },
    Longitude: {
      type: Sequelize.DataTypes.STRING,
    },
    Notes: {
      type: Sequelize.DataTypes.STRING,
    },
    Hyrail: {
      type: Sequelize.DataTypes.BOOLEAN,
    },
    SightDistance: {
      type: Sequelize.DataTypes.BOOLEAN,
    },
    RMU: {
      type: Sequelize.DataTypes.BOOLEAN,
    },
    SerialNumber: {
      type: Sequelize.DataTypes.BIGINT,
    },
    PossibleStairsGateAccess: {
      type: Sequelize.DataTypes.STRING,
    },
    IsActive: {
      type: Sequelize.DataTypes.BOOLEAN,
      default: false,
    },
  },
  {
    tableName: "RailUnitLocation",
    timestamps: true,
    createdAt: "CreatedAt",
    updatedAt: "UpdatedAt",
    freezeTableName: true,
  },
);

module.exports = RailUnitLocation;
