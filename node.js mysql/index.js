const express = require('express');

const mysql = require('mysql2');

//Create Connection

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Databases.143',
    database: 'nodesql_hr',
});

//Connect to MYSQL

db.connect((error)=> {
    if(error) {
        throw error;
    } else {
        console.log('MySQL connected');
    }
    
});

// creating a variable that behaves as an object of the express module

const app = express();

//create database

app.get('/createdb', (req, res)=> {
    let sql ='CREATE DATABASE nodesql_hr';
    db.query(sql,(error)=> {
        if(error) {
            throw error;
        }
        res.send('Database created');
    });
});

 //create table

app.get('/createemployee', (req, res)=>{
    let sql =
    'CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(255), position VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql,(error)=> {
        if(error){
            throw error;
        }
        res.send('Employee table created');
    });
});

 //insert employee 1
 app.get('/employee1', (req, res)=> {
    let post = { name: 'Ram Shrestha', position:'Executive Office'};
    let sql = 'INSERT INTO employee SET ?';
    let query = db.query(sql, post, (error)=> {
        if (error){
            throw error;
        }
        res.send('Employee 1 added');
    });
});

//insert employee 2
app.get('/employee2', (req, res)=> {
    let post = { name:'Nikita Pradhan', position:'Senior Officer'};
    let sql = 'INSERT INTO employee SET ?';
    let query = db.query(sql, post, (error)=> {
        if(error){
            throw error;
        }
        res.send('Employee 2 added');
    })
})


 //Update employee

 app.get('/updateemployee/:id', (req,res)=> {
    let newName ='Sita Dangol';
    let newDesignation='Accountant'
    let sql = `UPDATE employee SET name = '${newName}', designation='${newDesignation} WHERE id = ${res.params.id}`;
    let query = db.query(sql, (error, result)=> {
        if (error) {
            throw error;
            
        } console.log(result);
        res.send('Employee list updated');
    });
});

 // Delete employee

app.get("/deleteemployee/:id", (req, res) => {

    let sql = `DELETE FROM employee WHERE id = ${req.params.id}`;
  
    let query = db.query(sql, (err) => {
  
      if (err) {
  
        throw err;
  
      }
  
      res.send("Employee deleted");
  
    });
  
  });

//create location

app.get('/createlocation', (req, res)=>{
    let sql =
    'CREATE TABLE location(id int AUTO_INCREMENT, city VARCHAR(255), Address VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql,(error)=> {
        if(error){
            throw error;
        }
        res.send('Location table created');
    });
});

app.get('/location1', (req, res)=> {
    let post= {city:'Helsingborg', Address:'Furutorpsgatan'};
    let sql = 'INSERT INTO location SET ?';
    let query = db.query(sql, post, (error)=> {
        if(error){
            throw error;
        }
        res.send('location 1 added');
    })
})

app.get('/location2', (req, res)=> {
    let post= { city:'Lund', Address:'Guldmedsgatan'};
    let sql = 'INSERT INTO location SET ?';
    let query = db.query(sql, post, (error)=> {
        if(error){
            throw error;
        }
        res.send('location 2 added');
    })
})

//DELETE LOCATIONS

app.get('/deletelocation/:id'), (req, res)=> {
    let sql = `DELETE FROM location WHERE id=${req.params.id}`;
    db.query (sql, (error)=> {
        if (error){
            throw error;
        }
        res.send('location deleted..')
    })
}


  app.listen("3000", () => {

    console.log("Server started on port 3000");
  
  });


  
  
  
  