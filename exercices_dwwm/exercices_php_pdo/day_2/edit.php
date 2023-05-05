<?php
    
?>

<form action="/edit.php" method="POST">
    <select name="products" id="products">
        <option value="" disabled> </option>
        <?php
            require("./ProductManager.php");
            $manager = new ProductManager();
            $products = $manager->getAllProducts();
            foreach ($products as $key => $value) {
                # code...
                echo("<option value='" . $value . "'></option>");
            }
            
        ?>
    </select>
</form>