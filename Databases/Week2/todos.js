const express = require('express');

const mysql = require('mysql2');

//create connection

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Databases.143',
    database: 'nodesql_todos',
});

//Connect to mysql

db.connect((error)=> {
    if(error) {
        throw (error);
    } else {
        console.log('Mysql connected')
    }
})

// creating a variable that behaves as an object of the express module

const app = express();

//create database

app.get('/createdb', (req, res)=> {
   let sql = 'CREATE DATABASE nodesql_todos';
    db.query(sql, (error)=> {
            if(error) {
                throw error;
            }  res.send('Database created!!');
        }
        
    )
})

//create user table 

app.get('/createusers', (req, res)=>{
    let sql =
    'CREATE TABLE user(id int AUTO_INCREMENT, name VARCHAR(255), occupation VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql,(error)=> {
        if(error){
            throw error;
        }
        res.send('Users table created');
    });
});

//create todoslist table 

app.get('/createusers', (req, res)=>{
    let sql =
    'CREATE TABLE user(id int AUTO_INCREMENT, name VARCHAR(255), occupation VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql,(error)=> {
        if(error){
            throw error;
        }
        res.send('Users table created');
    });
});

//create tag table 

app.get('/createusers', (req, res)=>{
    let sql =
    'CREATE TABLE user(id int AUTO_INCREMENT, name VARCHAR(255), occupation VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql,(error)=> {
        if(error){
            throw error;
        }
        res.send('Users table created');
    });
});

//create user table 

app.get('/createusers', (req, res)=>{
    let sql =
    'CREATE TABLE IF NOT EXISTS user(id int AUTO_INCREMENT, name VARCHAR(255), occupation VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql,(error)=> {
        if(error){
            throw error;
        }
        res.send('Users table created');
    });
});

 //insert USER 1
 app.get('/user1', (req, res)=> {
    let post = { name: 'Ram Shrestha', occupation:'Doctor'};
    let sql = 'INSERT INTO user SET ?';
    let query = db.query(sql, post, (error)=> {
        if (error){
            throw error;
        }
        res.send('user 1 added');
    });
});

//insert user 2
app.get('/user2', (req, res)=> {
    let post = { name:'Nikita Pradhan', occupation:'Software Developer'};
    let sql = 'INSERT INTO user SET ?';
    let query = db.query(sql, post, (error)=> {
        if(error){
            throw error;
        }
        res.send('user 2 added');
    })
})


//create todos list table 

app.get('/createtodos', (req, res)=>{
    let sql =
    'CREATE TABLE IF NOT EXISTS todos(listID int AUTO_INCREMENT, todolist VARCHAR(255), PRIMARY KEY(listID), userID int, FOREIGN KEY(userID) REFERENCES user(id))';
    db.query(sql,(error)=> {
        if(error){
            throw error;
        }
        res.send('todos table created');
    });
});

//insert list 1
app.get('/todos1', (req, res)=> {
    let post = { todolist: 'Go to clinic'};
    let sql = 'INSERT INTO todos SET ?';
    let query = db.query(sql, post, (error)=> {
        if (error){
            throw error;
        }
        res.send('todos 1 added');
    });
});


//insert list 2
app.get('/todos2', (req, res)=> {
    let post = { todolist: 'create a e-commerce website'};
    let sql = 'INSERT INTO todos SET ?';
    let query = db.query(sql, post, (error)=> {
        if(error){
            throw error;
        }
        res.send('todos 2 added');
    })
})

//create item table 

app.get('/createitem', (req, res)=>{
    let sql =
    'CREATE TABLE IF NOT EXISTS item(itemID int AUTO_INCREMENT, status VARCHAR(255), PRIMARY KEY(itemID), complete_by DATETIME, listID int, FOREIGN KEY(listID) REFERENCES todos(listID))';
    db.query(sql,(error)=> {
        if(error){
            throw error;
        }
        res.send('item table created');
    });
});

//insert item 1
app.get('/item1', (req, res)=> {
    let post = { status: 'Completed', complete_by:'2022-11-01', listID: '1'};
    let sql = 'INSERT INTO item SET ?';
    let query = db.query(sql, post, (error)=> {
        if(error){
            throw error;
        }
        res.send('item 1 added');
    })
})
//insert list 2
app.get('/item2', (req, res)=> {
    let post = { status: 'NOT', complete_by:'2022-12-01', listID: '2'};
    let sql = 'INSERT INTO item SET ?';
    let query = db.query(sql, post, (error)=> {
        if(error){
            throw error;
        }
        res.send('item 2 added');
    })
})

//create tag table 

app.get('/createtag', (req, res)=>{
    let sql =
    'CREATE TABLE IF NOT EXISTS tag(listID int, itemID int, FOREIGN KEY(listID) REFERENCES todos(listID), FOREIGN KEY(itemID) REFERENCES item(itemID))';
    db.query(sql,(error)=> {
        if(error){
            throw error;
        }
        res.send('tag table created');
    });
});

//insert tag 1
app.get('/tag1', (req, res)=> {
    let post = { listID: '1', itemID: '1'};
    let sql = 'INSERT INTO tag SET ?';
    let query = db.query(sql, post, (error)=> {
        if(error){
            throw error;
        }
        res.send('tag 1 added');
    })
})
//insert tag 2
app.get('/tag2', (req, res)=> {
    let post = {  listID: '2', itemID: '2'};
    let sql = 'INSERT INTO tag SET ?';
    let query = db.query(sql, post, (error)=> {
        if(error){
            throw error;
        }
        res.send('tag 2 added');
    })
})
 

app.listen('3000', ()=> {
    console.log('server started on port 3000');
});