const mongoose = require('mongoose')
const answerSchema = require('./answers.schema.server')
const answerModel = mongoose.model(
    'answerModel',
    answerSchema
)
module.exports = answerModel
