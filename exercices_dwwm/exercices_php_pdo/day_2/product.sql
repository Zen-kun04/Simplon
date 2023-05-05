-- Début su script
START TRANSACTION;


-- Supprimer une bdd si elle existe, utile pour repartir de 0
DROP DATABASE IF EXISTS `TestingDay2`;


-- Créer une bdd
CREATE DATABASE IF NOT EXISTS `TestingDay2`;


-- Utiliser une bdd
USE `TestingDay2`;

-- Créer une table si elle n'existe pas
CREATE TABLE IF NOT EXISTS `product`(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price FLOAT(10) NOT NULL,
    available BOOLEAN NOT NULL,
    category INT(10) NOT NULL
);

INSERT INTO `product` (name, price, available, category) VALUES
("Cocaine", "50", true, 1),
("Coca-cola", "1.50", true, 2),
("Biscuits", "4", true, 3),
("Fraises", "6", false, 4);

-- Finir/Sauvegarder le script
COMMIT;