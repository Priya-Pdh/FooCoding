var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//connect with mysql
var mysql = require('mysql2');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'Databases.143',
  database:'todo_app'
});

db.connect(function(err){
  if(error){
    console.log('Mysql is not connected.');
    throw error;
  }
  console.log('Connected to Mysql');
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.get('/tasks/list', (req, res)=> {
  var sql ='SELECT * FROM task;';
  db.query(sql, function(error, result) {
    if(error){
      console.log(error);
      return;
    }
    res.json(result);
  });
});

app.post('/tasks/add', (req,res)=> {
  var task = req.body.task;
  var sql = `INSERT INTO task(tasks_list, status, due_date) 
  VALUES (?, ?, ?);`
  db.query(sql, [task, 0], function(error, result){
    if(error){
      console.log(error);
      return;
    }
    res.json({status: 'OK', data:'A task has been added successfully.'});
  });

});


module.exports = app;
