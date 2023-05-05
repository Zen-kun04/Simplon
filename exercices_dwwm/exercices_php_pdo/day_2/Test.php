<?php 
class Product {
    private $id;
    private $name;
    private $price;
    private $available;
    private $category;

    public function getID() {
        return $this->id;
    }

    public function setID(int $id) {
        $this->id = $id;
    }

    public function getName() {
        return $this->name;
    }

    public function setName(string $name) {
        $this->name = $name;
    }

    public function getPrice() {
        return $this->price;
    }

    public function setPrice(int $price) {
        $this->price = $price;
    }

    public function getAvailable() {
        return $this->available;
    }

    public function setAvailable(int $available) {
        $this->available = $available;
    }

    public function getCategory() {
        return $this->category;
    }

    public function setCategory(int $category) {
        $this->category = $category;
    }
}

?>