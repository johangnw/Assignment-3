const { Student, Parent } = require("../models");
const { Op } = require("sequelize");

class StudentController {
  static async getAllStudents(req, res) {
    Student.findAll({
      include: Parent,
    })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
  static async getStudentById(req, res) {
    const { id } = req.params;

    Student.findOne({
      where: {
        id: +id,
        name: {
          [Op.like]: "%John%",
        },
      },
    })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }

  static async createOneStudent(req, res) {
    const { name, date_of_birth } = req.body;

    Student.create({
      name,
      date_of_birth,
    })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }

  static async getAllParents(req, res) {
    Parent.findAll({
      include: Student,
    })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
}

module.exports = StudentController;
