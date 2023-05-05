<?php
include("./Test.php");
include("./DBManager.php");
include("./ProductManager.php");
// $test = new Product();

// $test->setID(1);
// $test->setAvailable(true);
// $test->setName("Cocaine");
// $test->setPrice(50);
// $test->setCategory(5);

// echo(json_encode($test));


// Exercice 1
// Créer une classe correspondant à l'entité du schema MPD et créer les getter et setter appropriés

// Exercice 2
// Créer le script SQL pour créer la base de données "exo" qui contiendra une table "product" du MPD
// Créer un jeu de données pour les exercices suivants

// Exercice 3
// Importer puis créer une instance de votre classe dans ce fichier et lui set toutes ses valeurs
// Echo l'instance de votre entité
// PS : pour echo votre entité faire comme avec un tableau, vu hier

$ProductManager = new ProductManager();

if(!empty($_POST["name"]) && 
!empty($_POST["category"]) && 
!empty($_POST["price"])){
    $product = new Product();
    $product->setName($_POST["name"]);
    $product->setCategory($_POST["category"]);
    $product->setPrice($_POST["price"]);
    if(!empty($_POST["available"])){
        $product->setAvailable(1);
    }else {
        $product->setAvailable(0);
    }
    

    $ProductManager->create($product);
}

// Exercice 4
// À l'aide de votre classe ManagerPlayer récupérer tous les enregistrements de la table "player"
// À l'aide d'une boucle parcourez votre tableau d'entités, pour chaque élément du tableau echo le nom du jeu dans la liste HTML approprié
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Day 2</title>
</head>

<body>
    <main>
        <h1>Day 2</h1>
        <!-- exercice 2 -->
        <div class="container">
            <p class="exoTitle">Exerice 2</p>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Available</th>
                </tr>
                <?php
                    $allProducts = $ProductManager->getAllProducts();
                    foreach($allProducts as $products){
                        echo("<tr>");
                        echo("<td>" . $products->getID() . "</td>");
                        echo("<td>" . $products->getName() . "</td>");
                        echo("<td>" . $products->getCategory() . "</td>");
                        echo("<td>" . $products->getPrice() . "</td>");
                        echo("<td>" . $products->getAvailable() . "</td>");
                        echo("</tr>");
                        
                    }
                ?>
            </table>

            <form action="/index.php" method="POST">
                <div>
                    <label for="name">Name:</label>
                    <input type="text" name="name" id="name">
                </div>
                <div>
                    <label for="category">Category:</label>
                    <input type="number" name="category" id="category">
                </div>
                <div>
                    <label for="price">Price:</label>
                    <input type="number" name="price" id="price">
                </div>
                <div>
                    <label for="available">Available:</label>
                    <input type="checkbox" name="available" id="available">
                </div>
                <div>
                    <input type="submit">
                </div>
            </form>
        </div>
    </main>
</body>

</html>