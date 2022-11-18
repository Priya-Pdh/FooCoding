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
  database:'db_todos'
});

//connect with mysql
db.connect(function(error){
    if(error){
      console.log('Mysql is not connected.');
      throw error;
    }
    console.log('Connected to Mysql');
  })
  
  app.post('/addtodos', (req,res)=> {
    const user_name= req.body.user_name;
    const todo_list = req.body.todo_list;
    const item_list = req.body.item_list;
    const status = req.body.status;
    const due_date = req.body.due_date;

    const sql = `INSERT INTO todos (user_name, todo_list, item_list, status, due_date) 
    VALUES (?, ?, ?, ?, ?);`
    db.query(sql, [user_name, todo_list, item_list, status, due_date],
       function(error, result){
      if(error){
        console.log(error);
        return;
      }
      res.send(result);
    });
  
  });

  app.get('/getTodos', (req,res)=> {
    db.query('SELECT * FROM todos', (error, result)=> {
        if(error){
            console.log(error)
        } else {
            res.send(result);
        }
    })
  })

  app.put("/update", (req, res) => {
    const id = req.body.id;
    const item_list = req.body.item_list;
    db.query(
      "UPDATE todos SET item_list = ? WHERE id = ?",
      [item_list, id],
      (err, result) => {
        if (error) {
          console.log(error);
        } else {
          res.send(result);
        }
      }
    );
  });



  app.delete('/detele/:id', (req, res)=>{
    const id= req.body.id;
    db.query(`DELETE FROM todos
    WHERE id = ?;`, [id], function(error, result){
      if(error) {
        console.log(error);
        return;
      }
      res.send(result);
    }); 
  });

  app.use(express.static(path.join(client, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(client, 'build', 'index.html'));
});
