-- Début su script
START TRANSACTION;


-- Supprimer une bdd si elle existe, utile pour repartir de 0
DROP DATABASE IF EXISTS `Demo_SQL`;


-- Créer une bdd
CREATE DATABASE IF NOT EXISTS `Demo_SQL`;


-- Utiliser une bdd
USE `Demo_SQL`;

-- Créer une table si elle n'existe pas
CREATE TABLE IF NOT EXISTS `Museum`(
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    place INT(10) NOT NULL
);

-- Créer une table si elle n'existe pas
CREATE TABLE IF NOT EXISTS `Donor`(
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone_number INT(10)
);

-- Créer une table si elle n'existe pas
CREATE TABLE IF NOT EXISTS `Work`(
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    artist VARCHAR(100) NOT NULL,
    lended BOOLEAN NOT NULL DEFAULT false,
    museum INT(10),
    owner INT(10),
    CONSTRAINT fk_Work_Museum
    FOREIGN KEY (museum)
    REFERENCES Museum(id),
    
    CONSTRAINT fk_Work_Donor
    FOREIGN KEY (owner)
    REFERENCES Donor(id)
);

INSERT INTO Museum (place, name, city) VALUES
(17800, "Musée du Louvre", "Paris, France"),
(20900, "Musée d'Orsay", "Paris, France"),
(9000, "Musée National d'Histoire Naturelle", "Washington D.C., États-Unis"),
(11760, "British Museum", "Londres, Royaume-Uni"),
(15500, "Musée National de Chine", "Pékin, Chine");

INSERT INTO Donor (first_name, last_name, phone_number) VALUES
('Axel-Ange', 'Lare', 0601000000),
('Jérôme', 'Deniaux', 0702000000),
('Mahdi', 'Mohamadi', 0703000000),
('Arno', 'Pimenta', 0704000000),
('David', 'Bakarlaz', 0705000000);

INSERT INTO Work (name, artist, lended, museum, owner) VALUES
('La Joconde', 'Léonard de Vinci', TRUE, 1, 1),
('La Nuit étoilée', 'Vincent van Gogh', TRUE, 3, 2),
('La Cène', 'Léonard de Vinci', FALSE, NULL, 2),
('La Guernica', 'Pablo Picasso', FALSE, NULL, 3),
('Les Tournesols', 'Vincent van Gogh', TRUE, 1, 1),
("Les Demoiselles d'Avignon", 'Pablo Picasso', TRUE, 1, 4),
("La Création d'Adam", 'Michel-Ange', FALSE, NULL, 3),
('Les Nymphéas', 'Claude Monet', TRUE, 5, 4),
('Le Cri', 'Edvard Munch', FALSE, NULL, 3),
('La Liberté guidant le peuple', 'Eugène Delacroix', TRUE, 5, 2),
('Les Ménines', 'Diego Velázquez', TRUE, 2, 5),
('Les Baigneuses', 'Paul Cézanne', FALSE, NULL, 5),
('Les Perséides', 'Paul Signac', TRUE, 1, 5),
("Le Déjeuner sur l'herbe", 'Édouard Manet', TRUE, 3, 1),
('La Grande Vague de Kanagawa', 'Katsushika Hokusai', FALSE, NULL, 2);

-- Finir/Sauvegarder le script
COMMIT;