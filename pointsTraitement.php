<?php

$score = $_POST['score'];

include "./connection/db.php";

try {

    $cnx = new PDO(DBDRIVER . ':host=' . DBHOST . ';port=' . DBPORT . ';dbname=' . DBNAME . ';charset=' . DBCHARSET, DBUSER, DBPASS);
} catch (Exception $e) {
    // jamais en production car ça montre des infos
    // sensibles
    echo $e->getMessage();
    die();
}

var_dump($_POST);
$sql = "INSERT INTO badge (score) ";
$sql .= " VALUES (NULL, :score)";

// https://www.php.net/manual/fr/pdo.constants.php

$stmt = $cnx->prepare($sql);

$stmt->bindValue(":score", $_POST['score']);


$stmt->execute();

// var_dump ($stmt->errorInfo());
