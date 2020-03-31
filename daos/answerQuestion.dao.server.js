const answerModel = require('../models/answers.model.server')

const answerQuestion = (studentId, questionId, answer) => {
    return answerModel.create(answer)
}
const findAllAnswers = () => {
    return answerModel.find().populate('student question')
}
const findAnswerById = (answerId) => {
    return answerModel.findOne({_id : answerId}).populate('student question')
};
const findAnswerByStudentByQuestion = (studentId, questionId) => {
    return answerModel.find({student: {_id : studentId}, question: {_id : questionId}}).populate('student question')
};
const findAnswerByStudent = (studentId) => {
    return answerModel.find({student: {_id : studentId}}).populate('student question')
};
const findAnswerByQuestion = (questionId) => {
    return answerModel.find({question: {_id : questionId}}).populate('student question')
};
const findAnswerByCredentials =
    (answername, password) => {
        return answerModel.findOne(
            {
                answername: answername,
                password :password
            })
    }

const deleteAnswer = (answerId) =>
    answerModel.deleteOne({_id: answerId});

const findByIdAndUpdate = (answerId, answer) =>
    answerModel.update({_id : answerId}, answer);


module.exports = {
    answerQuestion,
    findAllAnswers,
    findAnswerById,
    findAnswerByCredentials,
    deleteAnswer,
    findByIdAndUpdate,
    findAnswerByStudentByQuestion,
    findAnswerByStudent,
    findAnswerByQuestion
}
