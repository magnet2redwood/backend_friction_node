const Sequelize = require("sequelize");
const db = require("./../utils/database_connection");
const serviceTechModel = require("./../model/service_tech_model");

const Users = db.define("User", {
  UserId: {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Email: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  FirstName: {
    type: Sequelize.DataTypes.STRING,
  },
  LastName: {
    type: Sequelize.DataTypes.STRING,
  },
  UserSource: {
    type: Sequelize.DataTypes.STRING,
  },
  Gender: {
    type: Sequelize.DataTypes.STRING,
  },
  Mobile: {
    type: Sequelize.DataTypes.STRING,
  },
  PhotoURL: {
    type: Sequelize.DataTypes.STRING,
  },
  IsManager: {
    type: Sequelize.DataTypes.BOOLEAN,
  },
  IsActive: {
    type: Sequelize.DataTypes.BOOLEAN,
    default: false
  },
},{
  tableName: "Users",
  timestamps: true,
  createdAt: "CreatedAt",
  updatedAt: "UpdatedAt",
  freezeTableName: true,
},);


Users.belongsTo(serviceTechModel, { foreignKey: "ServiceTechId"});

module.exports = Users;
