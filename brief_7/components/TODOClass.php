<?php
    class TODOClass {
        private $id;
        private $title;
        private $description;
        private $important;

        function setID(int $id){
            $this->id = $id;
        }

        function getID() {
            return $this->id;
        }

        function setTitle(string $title){
            $this->title = $title;
        }

        function getTitle() {
            return $this->title;
        }

        function setDescription(string $desc){
            $this->description = $desc;
        }

        function getDescription() {
            return $this->description;
        }

        function setImportant(int $imp){
            $this->important = $imp;
        }

        function getImportant() {
            return $this->important;
        }
    }
?>