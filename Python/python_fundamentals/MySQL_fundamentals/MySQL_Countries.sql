1.
SELECT name as Country, language as Language, percentage as Percentage 
FROM languages JOIN countries ON languages.country_id = countries.id
WHERE language = "Slovene"
ORDER BY percentage DESC;
2.
SELECT countries.name as Name, COUNT(cities.name) as Number_of_Cities
FROM cities JOIN countries ON cities.country_id = countries.id
GROUP BY countries.name
ORDER BY countries.name
3.
SELECT cities.name as Name, cities.population as Population
FROM cities JOIN countries ON cities.country_id = countries.id
WHERE countries.name = "Mexico" AND cities.population > 500000
ORDER BY population DESC;
4.
SELECT countries.name as Name, language as language, percentage as Percentage
FROM languages JOIN countries ON languages.country_id = countries.id
WHERE languages.percentage > 89
ORDER BY population DESC;
5.
SELECT countries.name as Name, countries.surface_area as Surface_Area, countries.population as Population
FROM countries 
WHERE countries.population >100000 AND countries.surface_area < 501;
6.
SELECT countries.name as Name, countries.government_form as Government_Form, countries.life_expectancy as Life_Expectancy
FROM countries 
WHERE countries.government_form = "Constitutional Monarchy" AND countries.capital > 200 AND countries.life_expectancy > 75;
7.
SELECT countries.name as Country_Name, cities.name as City_Name, cities.district as District, cities.population as Population
FROM cities JOIN countries ON cities.country_id = countries.id
WHERE countries.name = "Argentina" AND cities.district = "Buenos Aires" AND cities.population > 500000
ORDER BY population DESC;
8.
SELECT region as Region, COUNT(countries.name) as Countries
FROM countries
GROUP BY countries.region
ORDER BY countries.region