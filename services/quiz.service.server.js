
let quizzes = [
    {_id: '123', title: 'Quiz 1'},
    {_id: '234', title: 'Quiz 2'},
    {_id: '345', title: 'Quiz 3'},
];

const findAllQuizzes = () => quizzes

const findQuizById = (quizId) =>
    quizzes.find(quiz => quiz._id === quizId)

module.exports = {
    findAllQuizzes,
    findQuizById
}
