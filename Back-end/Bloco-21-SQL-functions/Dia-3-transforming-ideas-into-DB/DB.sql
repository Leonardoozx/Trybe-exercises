CREATE SCHEMA IF NOT EXISTS zoo;
USE zoo;

CREATE TABLE animals(
	`name` VARCHAR(45) NOT NULL,
    specie VARCHAR(45),
    sex VARCHAR(9),
    age INT,
    `local` VARCHAR(45)
) ENGINE = InnoDB;

INSERT INTO animals(`name`, specie, sex, age, `local`) VALUES ('Monkeyzão', 'Monkey', 'female', 18, 'West');
