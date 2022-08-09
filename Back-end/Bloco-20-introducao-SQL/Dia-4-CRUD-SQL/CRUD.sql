DROP SCHEMA IF EXISTS Pixar;
CREATE SCHEMA Pixar;
USE Pixar;

CREATE TABLE Movies (
  id INTEGER auto_increment PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
  director VARCHAR(30) NULL,
  year INT NOT NULL,
  length_minutes INT NOT NULL
);

CREATE TABLE BoxOffice (
  movie_id INTEGER,
  FOREIGN KEY (movie_id) REFERENCES Movies (id),
  rating DECIMAL(2,1) NOT NULL,
  domestic_sales INT NOT NULL,
  international_sales INT NOT NULL
);

INSERT INTO Movies(title, director, year, length_minutes)
  VALUES ('Toy Story', 'John Lasseter', 1995, 81),
         ('Vida de inseto', 'Andrew Staton', 1998, 95),
         ('ratatui', 'Brad Bird', 2010, 115),
         ('UP', 'Pete Docter', 2009, 101),
         ('Carros', 'John Lasseter', 2006, 117),
         ('Toy Story 2', 'John Lasseter', 1999, 93),
         ('Valente', 'Brenda Chapman', 2012, 98);


INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
  VALUES (1, 8.3, 190000000, 170000000),
         (2, 7.2, 160000000, 200600000),
         (3, 7.9, 245000000, 239000000),
         (4, 6.1, 330000000, 540000000),
         (5, 7.8, 140000000, 310000000),
         (6, 5.8, 540000000, 600000000),
         (7, 7.5, 250000000, 190000000);

-- Resolução dos exercícios propostos no course:

USE Pixar;

INSERT IGNORE INTO Movies (title, director, `year`, length_minutes)
VALUES
	('Monstros SA', 'Pete Docter', '2001', '92'),
	('Procurando Nemo', 'John Lasseter', '2003', '107'),
    ('Os Incríveis', 'Brad Bird', '2004', '116'),
    ('WALL-E', 'Pete Docter', '2008', '104');
    
SELECT * FROM Movies;

INSERT INTO BoxOffice (movie_id, rating, domestic_sales, international_sales) VALUES ('9', '6.8', '450000000', '370000000');

SELECT * FROM BoxOffice;

UPDATE Movies
SET director = 'Andrew Staton'
WHERE title LIKE '%nemo%';

UPDATE Movies
SET title = 'Ratatuille', `year` = 2007
WHERE title LIKE '%tatui%';

SELECT * FROM Movies;

INSERT IGNORE INTO BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUES 
    ('8', '8.5', '300000000', '250000000'),
    ('10', '7.4', '460000000', '510000000'),
    ('11', '9.9', '290000000', '280000000');
    
SELECT * FROM BoxOffice ORDER BY movie_id;

DELETE FROM Movies WHERE title = 'WALL-E';

DELETE FROM BoxOffice WHERE movie_id = '11';

DELETE FROM Movies WHERE title = 'WALL-E';

DELETE FROM Movies WHERE director = 'Andrew Staton';

DELETE FROM BoxOffice WHERE movie_id = '2' OR movie_id = '9';

DELETE FROM Movies WHERE director = 'Andrew Staton';