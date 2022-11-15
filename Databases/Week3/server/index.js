const express = require('express');
const app=express();
const cors = require('cors')

app.use(cors())
app.use(express.json());


app.listen(3001, ()=> {
  console.log('running on port 3001')
}); 


const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'Databases.143',
  database:'todo_app'
});

//connect with mysql
db.connect(function(error){
    if(error){
      console.log('Mysql is not connected.');
      throw error;
    }
    console.log('Connected to Mysql');
  })
  
  app.post('/addUser', (req,res)=> {
    const name = req.body.name;
    const email = req.body.email;
    const sql = `INSERT INTO user(name, email) 
    VALUES (?, ?);`
    db.query(sql, [name, email],
       function(error, result){
      if(error){
        console.log(error);
        return;
      }
      res.send(result);
    });
  
  });

  app.get('/getUser', (req,res)=> {
    db.query('SELECT * FROM user', (error, result)=> {
        if(error){
            console.log(error)
        } else {
            res.send(result);
        }
    })
  })


  app.post('/addTodos', (req,res)=> {
    // const listID = req.body.listID
    const taskList = req.body.taskList;
    const due_date = req.body.due_date;
    const item_list = req.body.item_list;
    const status = req.body.status;
    const sql = `INSERT INTO task(taskList, due_date, item_list, status) 
    VALUES (?, ?, ?, ?);`
    db.query(sql, [taskList, due_date, item_list, status],
       function(error, result){
      if(error){
        console.log(error);
        return;
      }
      res.send(result);
    });
  
  });
  app.post('/addItems', (req,res)=> {
    const item_list = req.body.item_list;
    const status = req.body.status;
    const sql = `INSERT INTO task( item_list, status) 
    VALUES (?, ?);`
    db.query(sql, [ item_list, status],
       function(error, result){
      if(error){
        console.log(error);
        return;
      }
      res.send(result);
    });
  
  });