<?php
// Exercice 1.1
// Utiliser la fonction PHP echo() pour affichier "Hello world" dans un paragraphe, 
// dans la container HTML approprié

// Exercice 1.2
// Dans le même paragraphe concatener le "Hello world" déjà présente avec la phrase suivante :
// "Nous somme le"

// Exercice 1.3
// Dans le même paragraphe, à la suite, ajouter la date du jour grâce à la fonction PHP date()
// La date a le format que vous souhaitez

// Exercice 2.1
// Lier la feuille CSS style.css à cette feuille PHP et vérifier que ça fonctionne en mettant les H1 en bleu
// Lier la feuille JS script.js à cette feuille PHP et vérifier que ça fonctionne en faisant un console.log()

// Exercice 3.1
// Déclarer une constante avec la valeur "Le PHP c'est génial" et afficher le à l'aide de la fonction PHP echo(), 
// dans le container HTML approprié

$variable1 = "Le PHP c'est génial";

// Exercice 3.2
// Déclarer une constante contenant un tableau avec les valeurs suivantes : 'pomme', 'poire', 'orange', 'mangue'
// Echo ce tableau avec la fonction json_encode()
// Le tableau sera utile pour l'exercice 4

$variable2 = ['pomme', 'poire', 'orange', 'mangue'];

// Exercice 3.3
// Déclarer une constante contenant un tableau avec les clés et valeurs suivantes : Nom = France, Capitale = Paris, langue = FR
// Echo ce tableau
// Le tableau sera utile pour l'exercice 4

$variable3 = array(
    "Nom" => "France",
    "Capitale" => "Paris",
    "langue" => "FR"
)

// Exercice 4.1
// À l'aide d'une boucle for faire echo 3 fois le texte suivant : "hello"

// Exercice 4.2
// À l'aide d'une boucle foreach parcourez le tableau de l'exercice 3.2, pour chaque élément du tableau echo la valeur à l'aide de son index

// Exercice 4.3
// À l'aide d'une boucle foreach parcoutez le tableau de l'exercice 3.3, pour chaque élément du tableau echo la valeur à l'aide sa clé et non son index

// Exercice 4.4
// Afficher les éléments du tableau 3.2 dans la liste du container approprié
// PS : utiliser une boucle comme dans l'exercice 4 et insérez ce morceau de PHP dans le HTML comme dans l'exercice 1

// Exercice 5.1
// Faire un lien vers la page des exercices du day 2 dans le container approprié

// Exercice 5.2
// Inclure le fichier PHP "toInclude.php" dans le container approprié

// Exercice 5.3
// Récupérer la valeur soumise par l'utilisateur dans le formulaire inclu de l'exercice 5.2
// Echo la valeur uniquement si elle est présente
// PS : utiliser la variable $_POST
// PS : la variable $_POST est un tableau
// PS : la clé de la valeur est celle de l'attribut "name" de l'input
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Day 1</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <main>
        <h1>Day 1</h1>
        <!-- exercice 1 -->
        <div class="container">
            <p class="exoTitle">Exerice 1</p>
            <!-- afficher votre texte ici -->
            <p><?php
                echo("Hello world" . ' ' . "Nous sommes le " . date('d-m-Y'));
            ?></p>
            
        </div>
        <!-- exercice 3 -->
        <div class="container">
            <p class="exoTitle">Exerice 3</p>
            <!-- afficher la valeur de votre variable ici -->
            <p><?php
                echo($variable1);
            ?></p>
            <p><?php
                echo(json_encode($variable2));
            ?></p>
            <p>
                <?php
                    echo(json_encode($variable3));
                ?>
            </p>
        </div>
        <!-- exercice 4 -->
        <div class="container">
            <p class="exoTitle">Exerice 4</p>
            <?php
                for ($i=0; $i < 3; $i++) { 
                    echo("<p>" . "hello" . "</p>");
                }

                foreach ($variable2 as $key => $value) {
                    // key = index
                    echo($variable2[$key] . "\n");
                }
                
                foreach ($variable3 as $key => $value) {
                    # code...
                    echo($value);
                }
            ?>
            <ul>
                <!-- afficher la liste ici -->
                <?php
                    foreach ($variable2 as $key => $value) {
                        # code...
                        echo("<li>" . $value . "</li>");
                    }
                ?>
            </ul>
        </div>
        <!-- exercice 5.1 -->
        <div class="container">
            <p class="exoTitle">Exerice 5.1</p>
            <!-- créer le lien ici -->
            <a href="/day_2/">Day 2</a>
        </div>
        <!-- exercice 5.2 -->
        <div class="container">
            <p class="exoTitle">Exerice 5.2</p>
            <!-- inclure l'element ici -->
            <?php
                include("toInclude.php");
            ?>
            <?php
                if (isset($_POST["name"])) {
                    # code...
                    echo($_POST["name"]);
                }
                
            ?>
        </div>
    </main>
    <script src="script.js"></script>
</body>

</html>