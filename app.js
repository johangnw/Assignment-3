const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
//
const StudentController = require("./controllers/students");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/students", StudentController.getAllStudents);
app.post("/students", StudentController.createOneStudent);
app.get("/students/:id", StudentController.getStudentById);
app.get("/parents", StudentController.getAllParents);

app.listen(PORT, () => {
  console.log(`Server is running at port: http://localhost:${PORT}`);
});
