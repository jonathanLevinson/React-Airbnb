CREATE DATABASE AirBnb;
USE AirBnb;

CREATE TABLE locations (
	locationID INT(11) AUTO_INCREMENT PRIMARY KEY,
    locationName VARCHAR(100) NOT NULL,
    cityID INT(10) NOT NULL,
    lat FLOAT(10,2),
    lng FLOAT(10,2),
    price INT(6) NOT NULL,
    maxGuests INT(2) NOT NULL,
    description VARCHAR(500),
    bigImageUrl VARCHAR(200),
    smallImageUrl VARCHAR(200),
    rating FLOAT(3,2),
    ratingCount INT(4)
);

CREATE TABLE cities (
	cityID INT(11) AUTO_INCREMENT PRIMARY KEY,
    cityName VARCHAR(50) NOT NULL,
    countryID INT(11) NOT NULL
);
    
CREATE TABLE countries (
	countryID INT(11) AUTO_INCREMENT PRIMARY KEY,
    countryName VARCHAR(50) NOT NULL
);

CREATE TABLE internal (
	userID INT(11) AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(100) NOT NULL,
    email VARCHAR(50)
);

ALTER TABLE locations 
ADD FOREIGN KEY (cityID) REFERENCES cities(cityID); 

ALTER TABLE cities 
ADD FOREIGN KEY (countryID) REFERENCES countries(countryID); 

ALTER TABLE locations
ALTER cityID SET DEFAULT 1; 

ALTER TABLE cities
ALTER countryID SET DEFAULT 1; 

ALTER TABLE locations 
DROP FOREIGN KEY locations_ibfk_1;

ALTER TABLE cities 
DROP FOREIGN KEY cities_ibfk_1;

ALTER TABLE locations AUTO_INCREMENT = 1;
ALTER TABLE cities AUTO_INCREMENT = 1;
ALTER TABLE countries AUTO_INCREMENT = 1;


SELECT *
FROM locations JOIN cities
ON locations.cityID = cities.cityID AND locations.locationID = 1
JOIN countries ON cities.countryID = countries.countryID;

SELECT l.*, c.cityName, co.countryName
FROM locations l JOIN cities c
ON l.cityID = c.cityID AND l.locationID = 1
JOIN countries co ON c.countryID = co.countryID;