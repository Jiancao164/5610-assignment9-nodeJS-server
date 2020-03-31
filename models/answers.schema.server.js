const mongoose = require('mongoose')
const answer = mongoose.Schema({
    _id: Number,
    trueFalseAnswer: Boolean,
    multipleChoiceAnswer: Number,
    student: {type: Number, ref: 'studentModel'},
    question: {type: Number, ref: 'questionModel'}
}, {collection: 'answers'});
module.exports = answer;

