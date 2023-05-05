# Exercice #1 esport

## Consigne

- À l'aide des informations suivantes produire un schema MCD puis MPD de la base de données
- Lorsque vous aurez terminé votre conception produire le script de création de la base de données


| Entité | Champs |
| --- | --- |
| player | first_name, second_name, city |
| Equipe | name, description |
| Compétition | name, description, city, format, cash_prize |
| Sponsor | brand |
| Jeu | name, station, format |


### Relations

- Un joueur est membre au minimum et au maximum d’une équipe
- Une équipe peut accueillir minimum un membre ou autant de membre qu’elle le souhaite

---

- Une équipe peut participer à zéro ou autant de compétition qu’elle le souhaite
- Une compétition peut accueillir minimum une équipe ou autant d’équipe qu’elle le souhaite

---

- Une équipe peut avoir zéro ou plusieurs sponsors
- Un sponsor peut ne pas sponsoriser d’équipe, auquel cas il ne sponsorise qu’une équipe maximum

---

- Un joueur joue à minimum et maximum un jeu
- Un jeu peut être joué par zéro ou un nombre indéterminé de joueurs