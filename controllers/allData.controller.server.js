const allDataDao = require('../daos/allData.dao.server')

module.exports = (app) => {
    app.post('/api/populate', (req, res) => {
        allDataDao.createData()
            .then(status => res.send(status))
    });
    app.delete('/api/all', (req, res) => {
        allDataDao.answerData()
            .then();
        allDataDao.questionData()
            .then();
        allDataDao.studentData()
            .then(status => res.send(status))
    });

}
