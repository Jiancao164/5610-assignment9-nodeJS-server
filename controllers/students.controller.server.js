const studentDao = require('../daos/students.dao.server')

module.exports = (app) => {
    app.post('/api/students', (req, res) => {
        const newStudent = req.body;
        studentDao.createStudent(newStudent)
            .then(actualStudent => res.send(actualStudent))
    });
    app.put('/api/students/:studentId', (req, res) => {
        const updateStudent = req.body;
        studentDao.findByIdAndUpdate(req.params.studentId, updateStudent)
            .then(updateStudent => res.send(updateStudent))
    });
    app.delete('/api/students/:studentId', (req, res) => {
        const studentId = req.params.studentId;
        studentDao.deleteStudent(studentId)
            .then(status => res.send(status))
    });
    app.get('/api/students/:studentId', (req, res) => {
        const studentId = req.params.studentId;
        studentDao.findStudentById(studentId)
            .then(student => res.send(student))
    });

    app.post('/api/login', (req, res) => {
        const studentname = req.body.studentname;
        const password = req.body.password;
        studentDao.findStudentByCredentials(studentname, password)
            .then(student => {
                if(student) {
                    student.password = '****'
                    return res.send(student)
                } else {
                    return res.status(403).send({
                        message: `Student ${studentname} not found`
                    })
                }
            })
    })
    app.get('/api/students', (req, res) =>
        studentDao.findAllStudents()
            .then(allStudents => res.send(allStudents)))


}
