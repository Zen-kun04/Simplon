-- Début su script
START TRANSACTION;

-- Supprimer une bdd si elle existe, utile pour repartir de 0
DROP DATABASE IF EXISTS `Brief7`;


-- Créer une bdd
CREATE DATABASE IF NOT EXISTS `Brief7`;

-- Utiliser une bdd
USE `Brief7`;

-- Créer une table si elle n'existe pas
CREATE TABLE IF NOT EXISTS `tasks`(
    id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    description VARCHAR(150) NOT NULL,
    important bool NOT NULL DEFAULT false,
    PRIMARY KEY (id)
);

INSERT INTO `tasks` (
    title,
    description,
    important
)
VALUES
(
    "Faire les courses",
    "Acheter du pain et des oeufs",
    true
),
(
    "Faire le ménage",
    "Passer l'aspirateur, laver les plats",
    false
),
(
    "Braquer une banque",
    "Besoin d'argent au plus vite",
    true
);
-- Finir/Sauvegarder le script
COMMIT;