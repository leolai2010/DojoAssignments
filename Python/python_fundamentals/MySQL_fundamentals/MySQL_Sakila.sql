1.
select city.city_id as City_ID, city.city as City, customer.first_name as First_Name, customer.last_name as Last_Name, customer.email as E_mail, address.address as Address
from city join address on city.city_id = address.city_id join customer on customer.address_id = address.address_id
where city.city_id = 312
2.
SELECT film.film_id AS Film_ID, film.title AS title, film.description AS Description, film.release_year AS Release_Year, film.rating AS Rating, film.special_features AS Special_Features, film_list.category AS Genre
FROM film_list
JOIN film
ON film_list.FID = film.film_id
WHERE film_list.category = "Comedy"
3.
SELECT actor.actor_id AS Actor_ID, actor.first_name AS Actor_Name, film.film_id AS Film_ID, film.title AS title, film.description AS Description, film.release_year AS Release_Year
FROM actor 
JOIN film_actor
JOIN film
ON film_actor.film_id = film.film_id AND actor.actor_id = film_actor.actor_id
WHERE actor.actor_id = 5
4.
SELECT store.store_id AS Store_ID, city.city_id AS City_ID, city.city AS City, customer.first_name AS First_Name, customer.last_name AS Last_Name, customer.email AS E_mail, address.address AS Address
FROM city 
JOIN address ON city.city_id = address.city_id 
JOIN customer ON customer.address_id = address.address_id 
JOIN store
WHERE city.city_id IN (1,42,312,459) AND store.store_id = 1
5.
SELECT film.title AS title, film.description AS Description, film.release_year AS Release_Year, film.rating AS Rating, film.special_features AS Special_Features
FROM actor 
JOIN film_actor
JOIN film
ON film_actor.film_id = film.film_id AND actor.actor_id = film_actor.actor_id
WHERE actor.actor_id = 15 AND film.rating = 'G' AND special_features LIKE '%Behind the Scenes%'
6.
SELECT film.film_id AS Film_ID, film.title AS title, actor.actor_id AS Actor_ID, CONCAT(actor.first_name,' ', actor.last_name) AS Actor_Name
FROM actor 
JOIN film_actor
JOIN film
ON film_actor.film_id = film.film_id AND actor.actor_id = film_actor.actor_id
WHERE film.film_id = 369
7.
SELECT film.film_id AS Film_ID, film.title AS title, film.description AS Description, film.release_year AS Release_Year, film.rating AS Rating, film.special_features AS Special_Features, film_list.category AS Genre, film.rental_rate AS Rental_Rate
FROM film_list
JOIN film
ON film_list.FID = film.film_id
WHERE film_list.category = "Drama" AND film.rental_rate = 2.99
8.
SELECT actor.actor_id AS Actor_ID, CONCAT(actor.first_name,' ', actor.last_name) AS Actor_Name, film.title AS title, film.description AS Description, film.release_year AS Release_Year, film.rating AS Rating, film.special_features AS Special_Features, film_list.category AS Genre
FROM film_list
JOIN film
ON film_list.FID = film.film_id
JOIN actor 
JOIN film_actor
ON film_actor.film_id = film.film_id AND actor.actor_id = film_actor.actor_id
WHERE film_list.category = "ACTION" AND CONCAT(actor.first_name,' ', actor.last_name) = "SANDRA KILMER"