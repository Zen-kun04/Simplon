-- Début su script
START TRANSACTION;

-- Supprimer une bdd si elle existe, utile pour repartir de 0
DROP DATABASE IF EXISTS `demoBDD`;


-- Créer une bdd
CREATE DATABASE IF NOT EXISTS `demoBDD`;

-- Utiliser une bdd
USE `demoBDD`;

-- Créer une table si elle n'existe pas
CREATE TABLE IF NOT EXISTS `Team`(
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(500) NOT NULL,
    PRIMARY KEY (id)
);

-- Créer une table si elle n'existe pas
CREATE TABLE IF NOT EXISTS `Game`(
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    station VARCHAR(50) NOT NULL,
    format VARCHAR(80) NOT NULL,
    PRIMARY KEY (id)
);

-- Créer une table si elle n'existe pas
CREATE TABLE IF NOT EXISTS `Player`(
    id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    second_name VARCHAR(50) NOT NULL,
    city VARCHAR(70) NOT NULL,
    team_id INT(10),
    game_id INT(10) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_Player_Team
        FOREIGN KEY (team_id)
        REFERENCES Team(id),
    CONSTRAINT fk_Player_Game
        FOREIGN KEY (game_id)
        REFERENCES Game(id)
);

-- Créer une table si elle n'existe pas
CREATE TABLE IF NOT EXISTS `Sponsor`(
    id INTEGER NOT NULL AUTO_INCREMENT,
    brand VARCHAR(50) NOT NULL,
    team_id INT(10),
    PRIMARY KEY (id),
    CONSTRAINT fk_Sponsor_Team
    FOREIGN KEY (team_id)
    REFERENCES Team(id)
    
);

-- Créer une table si elle n'existe pas
CREATE TABLE IF NOT EXISTS `Competition`(
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(300) NOT NULL,
    city VARCHAR(70) NOT NULL,
    format VARCHAR(80) NOT NULL,
    cash_prize INT(9) NOT NULL,
    PRIMARY KEY (id)
);

-- Créer une table si elle n'existe pas
CREATE TABLE IF NOT EXISTS `team_competition`(
    id INTEGER NOT NULL AUTO_INCREMENT,
    team_id INT(10) NOT NULL,
    competition_id INT(10) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_team_competition_Team
    FOREIGN KEY (team_id)
    REFERENCES Team(id),
    CONSTRAINT fk_team_competition_Competition
    FOREIGN KEY (competition_id)
    REFERENCES Competition(id)
);

INSERT INTO `Game` (`name`,`station`, `format`) VALUES
('League of Legends', 'PC', 'MOBA'),
('Dota 2', 'PC', 'MOBA'),
('Counter-Strike: Global Offensive', 'PC', 'FPS'),
('Overwatch ', 'Xbox One', 'FPS'),
('Fortnite', 'PlayStation 4', 'Battle Royale'),
('Valorant', 'PC', 'FPS'),
('Hearthstone', 'PC', 'Jeu de cartes à collectionner'),
('Rocket League', 'PC', 'Sport'),
('Rainbow Six Siege', 'PC', 'FPS tactique'),
('Street Fighter V', 'PlayStation 4', 'Combat');

INSERT INTO `Competition` (`name`, `description`, `city`, `format`, `cash_prize`) VALUES
('Thunderdome', 'Championnat CS: Global Offensive', 'Las Vegas', 'Battle Royale', 100000),
('Frostbite', 'Coupe de France Dota', 'France', 'FPS', 50000),
('Cyberstorm', 'Championnat League of Legends', 'Québec', 'MOBA', 250000);

INSERT INTO `Team` (`name`, `description`) VALUES
('Team Liquid', 'Équipe Dota 2'),
('SK Telecom T1', 'Équipe de League of Legends'),
('Astralis', 'Équipe de Counter-Strike: Global Offensive');

INSERT INTO `Player` (`first_name`, `second_name`, `city`, `team_id`, `game_id`) VALUES
('Lee (Faker)', 'Sang-hyeok', 'Séoul',2 , 1),
('Oleksandr (s1mple)', 'Kostyliev', 'Kiev',3 , 1),
('Lee (Jaedong)', 'Jae-dong', 'Ulsan',2 , 3),
('Gabriel (FalleN)', 'Toledo', 'Itararé',3 , 2),
('Marcelo (coldzera)', 'David', 'São Paulo',3 , 3),
('Cho (Miro)', 'Seong-ju', 'Busan',1 , 2),
('Amer (Miracle-)', 'Al-Barkawi', '',1 , 5),
('Peter (ppd)', 'Dager', 'Fort Wayne',1 , 4);

INSERT INTO `Sponsor` (`brand`, `team_id`) VALUES
('Red Bull', 1),
('Intel', 1),
('Coca-Cola', 2),
('Logitech G', 3),
('HyperX', 2);
-- Finir/Sauvegarder le script
COMMIT;