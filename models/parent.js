"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Parent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Student);
    }
  }
  Parent.init(
    {
      name: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      StudentId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Parent",
    }
  );
  return Parent;
};
