const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/whiteboard-cs5610-sp20',
//     { useNewUrlParser: true, useUnifiedTopology: true })
const mongoose = require('mongoose')
mongoose.connect('mongodb://heroku_jian:zhz941026@ds063869.mlab.com:63869/heroku_0gqgh8xw',
    { useNewUrlParser: true, useUnifiedTopology: true })
//https://agile-cliffs-22220.herokuapp.com
app.use(function (req,res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});


const quizController = require('./controllers/quiz.controller.server')
quizController(app)

require('./controllers/questions.controller.server')(app);
require('./controllers/students.controller.server')(app);
require('./controllers/answers.controller.server')(app);
require('./controllers/allData.controller.server')(app);
// client --> req 'http://myapp/' --> server
// client <-- res 'hello world'   <-- server
app.get('/', function (req, res) {
    res.send('hello world')
})

app.listen(process.env.PORT || 3000)

