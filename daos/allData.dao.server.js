const studentModel = require('../models/students.model.server')
const questionModel = require('../models/questions.model.server')
const answerModel = require('../models/answers.model.server');

const createData = () => {
    return studentModel.create({
        _id: 123,
        firstName: "Alice",
        lastName: "Wonderland",
        userName: "alice",
        password: "alice",
        gradYear: "2020",
        scholarship: 15000}) &&
    studentModel.create({
        _id: 234,
        firstName: "Bob",
        lastName: "Hope ",
        userName: "bob",
        password: "bob",
        gradYear: "2021",
        scholarship: 12000}) &&
    questionModel.create({
        _id: 321,
        question: "Is the following schema valid?",
        points: 10,
        questionType: "TRUE_FALSE",
        trueFalse: {_id: 100,
                    isTrue: false}
    }) &&
    questionModel.create({
        _id: 432,
        question: "DAO stands for Dynamic Access Object?",
        points: 10,
        questionType: "TRUE_FALSE",
        trueFalse: {_id: 100,
            isTrue: false}
    }) &&
    questionModel.create({
        _id: 543,
        question: "What does JPA stand for?",
        points: 10,
        questionType: "MULTIPLE_CHOICE",
        multipleChoice: {_id: 900,
            choices: "Java Persistence API, " +
            "Java Persisted Application, "  +
            "JavaScript Persistence API, " +
            "JSON Persistent Associations, ",
            correct: 1,},
    }) &&
    questionModel.create({
        _id: 654,
        question: "What does ORM stand for?",
        points: 10,
        questionType: "MULTIPLE_CHOICE",
        multipleChoice: {_id: 901,
            choices: "Object Relational Model, " +
                "Object Relative Markup, " +
                "Object Reflexive Model, " +
                "Object Relational Mapping, " +
                "Persistent Associations",
            correct: 4,},
    }) &&
    answerModel.create({
        _id: 123,
        trueFalseAnswer: true,
        student: 123,
        question: 321
    }) &&
    answerModel.create({
        _id: 234,
        trueFalseAnswer: false,
        student: 123,
        question: 432
    }) &&
    answerModel.create({
        _id: 345,
        multipleChoiceAnswer: 1,
        student: 123,
        question: 543
    }) &&
    answerModel.create({
        _id: 456,
        multipleChoiceAnswer: 2,
        student: 123,
        question: 645
    }) &&
    answerModel.create({
        _id: 567,
        trueFalseAnswer: false,
        student: 234,
        question: 321
    }) &&
    answerModel.create({
        _id: 678,
        trueFalseAnswer: true,
        student: 234,
        question: 432
    }) &&
    answerModel.create({
        _id: 789,
        multipleChoiceAnswer: 3,
        student: 234,
        question: 543
    }) &&
    answerModel.create({
        _id: 890,
        multipleChoiceAnswer: 4,
        student: 234,
        question: 645
    })



}
const studentData = () => {
    return studentModel.deleteMany();
};
const questionData = () => {

    return questionModel.deleteMany();
};
const answerData = () => {

    return  answerModel.deleteMany();
};

module.exports = {
    createData,
    //deleteData
    studentData,
    questionData,
    answerData
}
