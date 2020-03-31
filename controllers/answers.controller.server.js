const answerDao = require('../daos/answerQuestion.dao.server')

module.exports = (app) => {
    app.post('/api/students/:sid/questions/:qid/answers', (req, res) => {
        const studentId = req.params.sid;
        const questionId = req.params.qid;
        let newAnswer = req.body;

        console.log(newAnswer);
        answerDao.answerQuestion(studentId, questionId, newAnswer)
            .then(actualAnswer => res.send(actualAnswer))
    });
    app.get('/api/students/:sid/questions/:qid/answers', (req, res) => {
        const studentId = req.params.sid;
        const questionId = req.params.qid;
        answerDao.findAnswerByStudentByQuestion(studentId, questionId)
            .then(actualAnswer => res.send(actualAnswer))
    });
    app.get('/api/questions/:qid/students/:sid/answers', (req, res) => {
        const studentId = req.params.sid;
        const questionId = req.params.qid;
        answerDao.findAnswerByStudentByQuestion(studentId, questionId)
            .then(actualAnswer => res.send(actualAnswer))
    });
    app.get('/api/students/:sid/answers', (req, res) => {
        const studentId = req.params.sid;
        answerDao.findAnswerByStudent(studentId)
            .then(actualAnswer => res.send(actualAnswer))
    });
    app.get('/api/questions/:qid/answers', (req, res) => {
        const questionId = req.params.qid;
        answerDao.findAnswerByQuestion(questionId)
            .then(actualAnswer => res.send(actualAnswer))
    });
    app.put('/api/answers/:answerId', (req, res) => {
        const updateAnswer = req.body;
        answerDao.findByIdAndUpdate(req.params.answerId, updateAnswer)
            .then(updateAnswer => res.send(updateAnswer))
    });
    app.delete('/api/answers/:answerId', (req, res) => {
        const answerId = req.params.answerId;
        answerDao.deleteAnswer(answerId)
            .then(status => res.send(status))
    });
    app.get('/api/answers/:answerId', (req, res) => {
        const answerId = req.params.answerId;
        answerDao.findAnswerById(answerId)
            .then(answer => res.send(answer))
    });


    app.post('/api/login', (req, res) => {
        const answername = req.body.answername;
        const password = req.body.password;
        answerDao.findAnswerByCredentials(answername, password)
            .then(answer => {
                if(answer) {
                    answer.password = '****'
                    return res.send(answer)
                } else {
                    return res.status(403).send({
                        message: `Answer ${answername} not found`
                    })
                }
            })
    })
    app.get('/api/answers', (req, res) =>
        answerDao.findAllAnswers()
            .then(allAnswers => res.send(allAnswers)))

}
