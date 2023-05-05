START TRANSACTION;

DROP DATABASE IF EXISTS museum;

CREATE DATABASE IF NOT EXISTS museum;

USE museum;

CREATE TABLE IF NOT EXISTS museum (
    id int(10) NOT NULL AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    city varchar(50) NOT NULL,
    place int(10) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS donor (
    id int(10) NOT NULL AUTO_INCREMENT,
    first_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    phone_number int(10),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS work (
    id int(10) NOT NULL AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    artist varchar(50) NOT NULL,
    lended boolean NOT NULL DEFAULT false,
    museum_id int(10),
    owner_id int(10),
    PRIMARY KEY (id),
    CONSTRAINT fk_museum_work FOREIGN KEY (museum_id) REFERENCES museum(id),
    CONSTRAINT fk_donor_work FOREIGN KEY (owner_id) REFERENCES donor(id)
);

INSERT INTO museum (place, name, city) VALUES
(17800, "Musée du Louvre", "Paris, France"),
(20900, "Musée d'Orsay", "Paris, France"),
(9000, "Musée National d'Histoire Naturelle", "Washington D.C., États-Unis"),
(11760, "British Museum", "Londres, Royaume-Uni"),
(15500, "Musée National de Chine", "Pékin, Chine");

INSERT INTO donor (first_name, last_name, phone_number) VALUES
('Axel-Ange', 'Lare', 0601000000),
('Jérôme', 'Deniaux', 0702000000),
('Mahdi', 'Mohamadi', 0703000000),
('Arno', 'Pimenta', 0704000000),
('David', 'Bakarlaz', 0705000000);

INSERT INTO work (name, artist, lended, museum_id, owner_id) VALUES
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

COMMIT;