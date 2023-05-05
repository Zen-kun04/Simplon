<?php
    class DBManager {
        private $mysql;
        
        public function __construct() {
            $this->mysql = new PDO(
                'mysql:host=localhost;dbname=TestingDay2;charset=utf8',
                'root',
                'root'
            );
        }

        public function getConnection() {
            return $this->mysql;
        }
    }
?>