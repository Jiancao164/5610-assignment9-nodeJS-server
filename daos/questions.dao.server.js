const questionModel = require('../models/questions.model.server')

const createQuestion = (question) => {
    return questionModel.create(question)
}
const findAllQuestions = () => {
    return questionModel.find()
}
const findQuestionById = (questionId) => {
    return questionModel.findOne({_id : questionId})
};
const findQuestionByCredentials =
    (questionname, password) => {
        return questionModel.findOne(
            {
                questionname: questionname,
                password :password
            })
    }

const deleteQuestion = (questionId) =>
    questionModel.deleteOne({_id: questionId});

const findByIdAndUpdate = (questionId, question) =>
    questionModel.update({_id : questionId}, question);


module.exports = {
    createQuestion,
    findAllQuestions,
    findQuestionById,
    findQuestionByCredentials,
    deleteQuestion,
    findByIdAndUpdate
}
