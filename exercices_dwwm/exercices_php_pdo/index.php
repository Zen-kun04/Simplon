<?php

$pageTitle = "Exercices PHP PDO";
$pages = [
    ["url" => "./day_1/index.php", "label" => "Exercice day 1"],
    ["url" => "./day_2/index.php", "label" => "Exercice day 2"]
];

// echo(dirname(__DIR__) . '/exercices_php_pdo/');
// echo('                  ');
// echo(__DIR__);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1><?php echo($pageTitle); ?></h1>
    <ul>
        <?php
        foreach ($pages as $page) {
            echo('<li><a href="' . $page['url'] . '">' . $page['label'] . '</a></li>');
        }        
        ?>
    </ul>
</body>
</html>