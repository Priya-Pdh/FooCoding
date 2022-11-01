//6.What are the names of countries with population greater than 8 million?

SELECT name
FROM country
WHERE population > '8000000'
//return only the country name

SELECT name,population
FROM country
WHERE population > '8000000'
//return country name with population


//7.What are the names of countries that have “land” in their names ?

SELECT name
FROM country
WHERE name LIKE '%land%'

// % determines anycharacter before and after the land word

//8.What are the names of the cities with population in between 500,000 and 1 million ?

SELECT name,population
FROM city
WHERE population BETWEEN '500000' AND '1000000'

//returns both the cities name and poulation it has

//9.What's the name of all the countries on the continent ‘Europe’ ?

SELECT name, continent
FROM country
WHERE continent = 'Europe'

//10.List all the countries in the descending order of their surface areas.

SELECT name,surfaceArea 
FROM country 
ORDER BY surfaceArea DESC; 
// return both name of countries and surface area in descending order

//11.What are the names of all the cities in the Netherlands?

SELECT ci.name, co.name
FROM city ci
JOIN country co
             ON ci.countryCode = co.code
             WHERE co.name = 'Netherlands'
             

//12.What is the population of Rotterdam ?

SELECT name,population
FROM city
WHERE name='Rotterdam';

//13.What's the top 10 countries by Surface Area ?

SELECT name, surfaceArea
FROM country
ORDER BY surfaceArea DESC LIMIT 10;

//14.What's the top 10 most populated cities?

SELECT name, population
FROM city
ORDER BY population DESC LIMIT 10;

//15.What is the population of the world ?

SELECT SUM(population)
FROM country
