<?php
    require_once($_SERVER['DOCUMENT_ROOT'] . "/components/requirements.php");
    $TODOClass = new TODOClass;
    $TODOManager = new TODOManager;
    if(!empty($_POST["title"]) &&
    !empty($_POST["description"]) && !isset($_GET["update"]) && !isset($_GET["edit"]) && !isset($_GET["delete"])){
        $TODO = new TODOClass;
        $TODO->setTitle($_POST["title"]);
        $TODO->setDescription($_POST["description"]);
        if(!empty($_POST["important"])){
            $TODO->setImportant(1);
        }else{
            $TODO->setImportant(0);
        }
        $TODOManager->addTask($TODO);
        header('Location:/');
        exit();
    }
    
    if(!empty($_GET["delete"])){
        if($TODOManager->taskIDExist($_GET["delete"])){
            $TODOManager->deleteTaskById($_GET["delete"]);
        }
        header('Location:/');
        exit();
    }

    if(!empty($_GET["update"])){
        if(!empty($_POST['title']) &&
            !empty($_POST['description'])){
                $TODO = new TODOClass;
                $TODO->setID(intval($_GET["update"]));
                $TODO->setTitle($_POST["title"]);
                $TODO->setDescription($_POST["description"]);
                if(!empty($_POST['important'])){
                    $TODO->setImportant(1);
                }else{
                    $TODO->setImportant(0);
                }
                $TODOManager->updateTask($TODO);
                
            }
        header('Location:/');
        exit();
    }

    if(!empty($_GET["edit"])){
        if($TODOManager->taskIDExist($_GET["edit"])){
            
            $task = $TODOManager->getTaskById($_GET["edit"]);
            $td_important = "No";
            $td_checkbox = "<input type='checkbox' name='important' id='important-checkbox'>Hell nah";
            if($task->getImportant() === 1){
                $td_important = "Yes";
                $td_checkbox = "<input type='checkbox' name='important' id='important-checkbox' checked>It's an important task";
            }
            
            
            
            
            echo("<div id='editor'>" .
            "<table>" .
            "<tr>" .
            "<th>ID</th>".
            "<th>Title</th>".
            "<th>Description</th>".
            "<th>Important</th>".
            "</tr>" .

            "<tr>" .
            "<th>" . $task->getID() . "</th>".
            "<th>" . $task->getTitle() . "</th>".
            "<th>" . $task->getDescription() . "</th>".
            "<th>" . $td_important . "</th>".
            "</tr>" .

            "</table>" .
            "<form action='/index.php?update=" . $task->getID() . "' method='post'>" .
            "<label for='title'>" .
            "<input type='text' name='title' value='" . $task->getTitle() . "'>" .

            "<label for='description'>" .
            "<textarea name='description' id='description' cols='30' rows='10'>" . $task->getDescription() . "</textarea>" .

            "<label for='important'>" .
            "<div id='important-container'>" .
            $td_checkbox .
            "</div>" .
            "<input type='submit' value='Update'>" .
            "</form>".
            "</div>");
        }
        
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TODO List</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Important</th>
            <th>Delete</th>
            <th>Edit</th>
        </tr>
        <?php
            
            foreach ($TODOManager->getAllTasks() as $key => $value) {
                if($value->getImportant() === 1){
                    echo("<tr>" . 
                    "<th>" . $value->getID() . "</th>" . 
                    "<td>" . $value->getTitle() . "</td>" .
                    "<td>" . $value->getDescription() . "</td>" .
                    "<td>" . "Yes" . "</td>" .
                    "<td><a href='/index.php?delete=" . $value->getID() . "'>Delete</a></td>" .
                    "<td><a href='/index.php?edit=" . $value->getID() . "'>Edit</a></td>" .
                    "</tr>");
                }else{
                    echo("<tr>" . 
                    "<th>" . $value->getID() . "</th>" . 
                    "<td>" . $value->getTitle() . "</td>" .
                    "<td>" . $value->getDescription() . "</td>" .
                    "<td>" . "No" . "</td>" .
                    
                    "<td><a href='/index.php?delete=" . $value->getID() . "'>Delete</a></td>" .
                    "<td><a href='/index.php?edit=" . $value->getID() . "'>Edit</a></td>" .
                    "</tr>");
                }
                
            }
        ?>
    </table>
    <div id="form-container">
    <form action="/index.php" method="post">
        <label for="title">Title:</label>
        <input type="text" name="title" id="title">
        
        <label for="description">Description:</label>
        <textarea name="description" id="description" cols="30" rows="10"></textarea>
        <label for="important">Important:</label>
        <div id="important-container">
            <input type="checkbox" name="important" id="important-checkbox">Hell nah
        </div>
        <input type="submit" value="Add task">
        
    </form>
    </div>
    <script src="index.js"></script>
</body>
</html>