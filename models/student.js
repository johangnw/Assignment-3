"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Parent); //1 to 1
    }
  }
  Student.init(
    {
      name: DataTypes.STRING,
      date_of_birth: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Student",
    }
  );
  return Student;
};
