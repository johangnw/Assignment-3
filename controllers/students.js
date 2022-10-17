const { Student, Parent } = require("../models");
const { Op } = require("sequelize");

class StudentController {
  static async getAllStudents(req, res) {
    const parent = req.query.parent;

    if(!Number.isInteger(+parent) && parent != null){
      return res.sendStatus(400);
    }

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
        id: +id
      },
    })
      .then((data) => {
        if(data){
          res.status(200).json(data);
        }
        else{
          res.status(404);
        }
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }

  static async createOneStudent(req, res) {
    const { name, date_of_birth } = req.body;

    if(!name || !date_of_birth){
      return res.sendStatus(400);
    }

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
