const studentModel = require('../models/students.model.server')

const createStudent = (student) => {
    return studentModel.create(student)
}
const findAllStudents = () => {
    return studentModel.find()
}
const findStudentById = (studentId) => {
    return studentModel.findOne({_id : studentId})
};
const findStudentByCredentials =
    (studentname, password) => {
        return studentModel.findOne(
            {
                studentname: studentname,
                password :password
            })
    }

const deleteStudent = (studentId) =>
    studentModel.deleteOne({_id: studentId});

const findByIdAndUpdate = (studentId, student) =>
    studentModel.update({_id : studentId}, student);


module.exports = {
    createStudent,
    findAllStudents,
    findStudentById,
    findStudentByCredentials,
    deleteStudent,
    findByIdAndUpdate
}
