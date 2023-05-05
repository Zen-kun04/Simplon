-- Début su script
START TRANSACTION;


-- Supprimer une bdd si elle existe, utile pour repartir de 0
DROP TABLE IF EXISTS `BaguetteCorp`;


-- Créer une bdd
CREATE DATABASE IF NOT EXISTS `BaguetteCorp`;


-- Utiliser une bdd
USE `BaguetteCorp`;

-- Créer une table si elle n'existe pas
CREATE TABLE IF NOT EXISTS `Citizens`(
    id INT(10) NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    station VARCHAR(50) NOT NULL,
    format VARCHAR(80),
    PRIMARY KEY(id)
);


-- Finir/Sauvegarder le script
COMMIT;