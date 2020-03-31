const mongoose = require('mongoose')
const studentSchema = require('./students.schema.server')
const studentModel = mongoose.model(
    'studentModel',
    studentSchema
)
module.exports = studentModel
