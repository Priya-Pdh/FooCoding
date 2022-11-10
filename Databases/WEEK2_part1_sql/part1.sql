Question 1:
//prepared statement

PREPARE country FROM 'SELECT  ci.name AS capital
FROM city ci
INNER JOIN country co
       ON ci.id = co.capital
WHERE lower(co.name) = ?';



Solution2:

//with prepared statement:

PREPARE region from 'SELECT DISTINCT cl.language, co.region
FROM countrylanguage cl
INNER JOIN country co
       ON cl.countryCode = co.code  
WHERE lower(co.region) = ?';


Question3:

//with prepared statement

PREPARE language FROM'SELECT count(ci.name)
FROM city ci
INNER JOIN countrylanguage cl
       ON ci.countryCode = cl.countryCode
WHERE lower(cl.language) = ?';


Answer 4:
SELECT DISTINCT continent, count(cl.language) AS total_languages_spoken
FROM country co
INNER JOIN countrylanguage cl
       ON co.code = cl.countryCode
GROUP BY continent;


