const questionDao = require('../daos/questions.dao.server')

module.exports = (app) => {
    app.post('/api/questions', (req, res) => {
        const newQuestion = req.body;
        questionDao.createQuestion(newQuestion)
            .then(actualQuestion => res.send(actualQuestion))
    });
    app.put('/api/questions/:questionId', (req, res) => {
        const updateQuestion = req.body;
        questionDao.findByIdAndUpdate(req.params.questionId, updateQuestion)
            .then(updateQuestion => res.send(updateQuestion))
    });
    app.delete('/api/questions/:questionId', (req, res) => {
        const questionId = req.params.questionId;
        questionDao.deleteQuestion(questionId)
            .then(status => res.send(status))
    });
    app.get('/api/questions/:questionId', (req, res) => {
        const questionId = req.params.questionId;
        questionDao.findQuestionById(questionId)
            .then(question => res.send(question))
    });

    app.post('/api/login', (req, res) => {
        const questionname = req.body.questionname;
        const password = req.body.password;
        questionDao.findQuestionByCredentials(questionname, password)
            .then(question => {
                if(question) {
                    question.password = '****'
                    return res.send(question)
                } else {
                    return res.status(403).send({
                        message: `Question ${questionname} not found`
                    })
                }
            })
    })
    app.get('/api/questions', (req, res) =>
        questionDao.findAllQuestions()
            .then(allQuestions => res.send(allQuestions)))

}
