<?php
    require_once($_SERVER['DOCUMENT_ROOT'] . "/components/requirements.php");
    class TODOManager extends DBManager {
        function getAllTasks() {
            $data = $this->getConnection()->query("SELECT * FROM tasks;");
            $TODOList = [];
            foreach ($data as $key => $value) {
                $TODO = new TODOClass;
                $TODO->setID($value["id"]);
                $TODO->setTitle($value["title"]);
                $TODO->setDescription($value["description"]);
                $TODO->setImportant($value["important"]);
                $TODOList[] = $TODO;
            }
            return $TODOList;
        }

        function taskIDExist(string $id) {
            if(is_numeric($id)){
                $prepare = $this->getConnection()->prepare("SELECT * FROM tasks WHERE id = ?");
            $prepare->execute([
                intval($id)
            ]);
            return !empty($prepare->fetch());
            }
            return false;
            
        }

        function getTaskById(int $id) {
            $prepare = $this->getConnection()->prepare("SELECT * FROM tasks WHERE id = ?");
            $prepare->execute([
                $id
            ]);
            foreach ($prepare as $key => $value) {
                $TODO = new TODOClass;
                $TODO->setID($value["id"]);
                $TODO->setTitle($value["title"]);
                $TODO->setDescription($value["description"]);
                $TODO->setImportant($value["important"]);
                return $TODO;
            }

            
        }

        function updateTask(TODOClass $TODO) {
            $prepare = $this->getConnection()->prepare(
                "UPDATE tasks SET title = ?, description = ?, important = ? WHERE id = ?"
            );

            $prepare->execute([
                $TODO->getTitle(),
                $TODO->getDescription(),
                $TODO->getImportant(),
                $TODO->getID()
            ]);
        }

        function addTask(TODOClass $TODO) {
            $prepare = $this->getConnection()->prepare(
                "INSERT INTO tasks (title, description, important) VALUES (?,?,?);"
            );
            $prepare->execute([
                $TODO->getTitle(),
                $TODO->getDescription(),
                $TODO->getImportant()
            ]);
        }

        function deleteTaskById(string $id){

            $prepare = $this->getConnection()->prepare(
                "DELETE FROM tasks WHERE id = ?"
            );
            $prepare->execute([
                intval($id)
            ]);
        }
        
    }
?>