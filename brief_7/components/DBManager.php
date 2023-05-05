<?php
    class DBManager {

        private $mysql;

        function __construct() {
            try {
                $this->mysql = new PDO(
                    'mysql:
                    host=localhost;
                    dbname=brief7;
                    charset=utf8;',
                    'root',
                    'root'
                );
            } catch (PDOException $err) {
                echo($err->getMessage());
            }
        }

        function getConnection() {
            return $this->mysql;
        }
    }
?>