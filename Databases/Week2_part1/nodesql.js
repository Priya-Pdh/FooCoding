// NOTE: COMMENT OUT THE ANSWER YOU WANT TO EXECUTE

const express= require('express');

const mysql = require('mysql2');

const db= mysql.createConnection({
    host:'localhost',
    user:'root',
    password: 'Databases.143',
    database: 'new_world',
});

const app = express();
// execute will internally call prepare and query

// ANSWER 1
app.get('/countryName/:countryName', (req, res)=>{
  db.execute(
    'SELECT  ci.name AS capital FROM city ci INNER JOIN country co ON ci.id = co.capital WHERE lower(co.name) = ?', [req.params.countryName],
    function(err, results, fields) {
      console.log(results); 
      console.log(fields);
      res.send(results);
    }
)
   
   } );


  
//ANSWER 2: 

app.get('/countryLanguage/:continent', (req, res)=>{
  db.execute(
    'SELECT DISTINCT cl.language, co.region FROM countrylanguage cl INNER JOIN country co ON cl.countryCode = co.code  WHERE lower(co.region) = ?', [req.params.continent],
    function(err, results, fields) {
      console.log(results); 
      console.log(fields);
      res.send(results);
    }
)
   
   } );


  //ANSWER 3: 

  app.get('/numberOfCountry/:language', (req, res)=>{
    db.execute(
      'SELECT count(ci.name) FROM city ci INNER JOIN countrylanguage cl ON ci.countryCode = cl.countryCode WHERE lower(cl.language) = ?', [req.params.language],
      function(err, results, fields) {
        console.log(results); 
        console.log(fields);
        res.send(results);
      }
  )
     
     } );

  //ANSWER 4:

  app.get('/continent', (req, res)=>{
    db.execute(
      'SELECT DISTINCT continent, count(cl.language) AS total_languages_spoken FROM country co INNER JOIN countrylanguage cl ON co.code = cl.countryCode GROUP BY continent;',
      function(err, results, fields) {
        console.log(results); 
        console.log(fields);
        res.send(results);
      }
  )
     
     } );

  app.listen('3000', ()=> {
    console.log('server started on port 3000');
  });