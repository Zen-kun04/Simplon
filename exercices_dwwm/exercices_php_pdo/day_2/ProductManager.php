<?php
    class ProductManager extends DBManager {

        public function getAllProducts() {
            $prepare = $this->getConnection()->prepare("SELECT * FROM `product`;");
            $prepare->execute();
            $products = [];
            foreach ($prepare as $key => $value) {
                $product = new Product();
                $product->setID($value["id"]);
                $product->setName($value["name"]);
                $product->setAvailable($value["available"]);
                $product->setPrice($value["price"]);
                $product->setCategory($value["category"]);
                
                $products[] = $product;

            }
            return $products;
        }

        public function create(Product $product) {
            $prepare = $this->getConnection()->prepare("INSERT INTO `product` (name, price, available, category) VALUES (?, ?, ?, ?);");
            $prepare->execute([
                $product->getName(),
                $product->getPrice(),
                $product->getAvailable(),
                $product->getCategory()
            ]);
            header("Refresh:0");
        }

        public function update(Product $new_product) {
            $statement = $this->getConnection()->prepare("UPDATE `product` SET `name` = ?, `price` = ?, `available` = ?, `category` = ?
            WHERE `id` = ?");
            $statement->execute([
                $new_product->getName(),
                $new_product->getPrice(),
                $new_product->getAvailable(),
                $new_product->getCategory(),
                $new_product->getID()
            ]);
        }
    }
?>