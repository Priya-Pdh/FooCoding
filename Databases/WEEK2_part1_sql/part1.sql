Question 1:
//without prepared statement ‘if country name is finland’
SELECT  ci.name AS capital
FROM city ci
INNER JOIN country co
       ON ci.id = co.capital
WHERE lower(co.name) = 'finland';

//with prepared statement

PREPARE country FROM 'SELECT  ci.name AS capital
FROM city ci
INNER JOIN country co
       ON ci.id = co.capital
WHERE lower(co.name) = ?';

-- set country name (for example: nepal)
set @n='nepal';

-- execute the country name
execute country using @n;


Solution2:
//without prepared statement, if continent name is ‘southern europe’
SELECT cl.language, co.region
FROM countrylanguage cl
INNER JOIN country co
       ON cl.countryCode = co.code  
WHERE lower(co.region) = 'southern europe';


//with prepared statement:

prepare region from 'SELECT cl.language, co.region
FROM countrylanguage cl
INNER JOIN country co
       ON cl.countryCode = co.code  
WHERE lower(co.region) = ?';

//now user can set continent: for example ‘southern europe’

set @a='southern europe';

// now execute the set continent

execute region using @a;

Question3:
//without prepared statement, if language is ‘swedish’

SELECT count(ci.name)
FROM city ci
INNER JOIN countrylanguage cl
       ON ci.countryCode = cl.countryCode
WHERE lower(cl.language) = ?;

//with prepared statement

PREPARE language FROM'SELECT count(ci.name)
FROM city ci
INNER JOIN countrylanguage cl
       ON ci.countryCode = cl.countryCode
WHERE lower(cl.language) = ?';

-- user set the language for example: ‘swedish’
set @a ='swedish';

– user execute the language
execute language using @a;


Answer 4:
SELECT continent, count(cl.language) AS total_languages_spoken
FROM country co
INNER JOIN countrylanguage cl
       ON co.code = cl.countryCode
GROUP BY continent;


