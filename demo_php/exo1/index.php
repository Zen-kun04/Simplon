<?php

$username = "Baguette";

class Test{
    function __construct(){
        echo("hey!");
    }

    static function test(){

    }
}
$a = new Test;

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <?php include("./components/navbar.php")?>
    
    <h1>Hello <?php echo($username)?></h1>
</body>
</html>