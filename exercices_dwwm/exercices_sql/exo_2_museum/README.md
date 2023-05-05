# Exercice #2 museum

## Consigne

Voir le schema fournis.

- Appuyez-vous sur le MDP de la base de données pour construire votre script SQL
- Une fois votre base de données en place, incluez les données suivantes dans votre script
- Réalisez les requêtes

## Requêtes à effectuer
- Récupérer toutes les oeuvres
- Récupérer le nom + n° téléphone des propriétaires d'oeuvre
- Récupérer les 3 premiers musées
- Récupérer les 3 derniers musées
- Récupérer le nombre total d'oeuvres
- Récupérer le nombre moyen de place dans les musées
- Récupérer le nombre de place cumulé de tous les musées
- Récupérer le plus grand nombre de place
- Récupérer le plus petit nombre de place
- Récupérer les oeuvres qui ne sont prêtées (lended à true)
- Récupérer les musées avec plus de 15000 places
- Récupérer les oeuvres de Axel
- Récupérer les oeuvres du Musées du Louvre
- Récupérer les oeuvres qui ne sont pas à Mahdi
- Récupérer l'oeuvre Les Tournesols de Vincent van Gogh

___

**Les données de la base de données**

```sql
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
```