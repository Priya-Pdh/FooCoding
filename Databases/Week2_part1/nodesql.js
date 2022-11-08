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

// ANSWER 1: here user takes 'NEPAL' as an country input
db.execute(
    'SELECT  ci.name AS capital FROM city ci INNER JOIN country co ON ci.id = co.capital WHERE lower(co.name) = ?', ['nepal'],
    function(err, results, fields) {
      console.log(results); 
      console.log(fields);
     
    }
  );

//ANSWER 2: here user takes 'SOUTHERN EUROPE' as an contient input
// db.execute(
//     'SELECT cl.language, co.region FROM countrylanguage cl INNER JOIN country co ON cl.countryCode = co.code  WHERE lower(co.region) = ?', ['southern europe'],

//     function(err, results, fields) {
//       console.log(results); 
//       console.log(fields);
     
//     }
//   );

  //ANSWER 3: here user takes 'SWEDISH' as an language input
// db.execute(
//     'SELECT count(ci.name) FROM city ci INNER JOIN countrylanguage cl ON ci.countryCode = cl.countryCode WHERE lower(cl.language) = ?', ['swedish'],

//     function(err, results, fields) {
//       console.log(results); 
//       console.log(fields);
     
//     }
//   );

  //ANSWER 4:
// db.execute(
//     'SELECT continent, count(cl.language) AS total_languages_spoken FROM country co INNER JOIN countrylanguage cl ON co.code = cl.countryCode GROUP BY continent;',

//     function(err, results, fields) {
//       console.log(results); 
//       console.log(fields);
     
//     }
//   );

  

  app.listen('3000', ()=> {
    console.log('server started on port 3000');
  });