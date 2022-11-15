const express = require('express');
const app=express();

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
    db.execute(sql, [name, email],
       function(error, result){
      if(error){
        console.log(error);
        return;
      }
      res.send(result);
    });
  
  });