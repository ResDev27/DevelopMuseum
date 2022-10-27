<?php
// prémiere ligne du script, pour accéder à la session
session_start();
include "./connection/db.php";


// 1. Récuperer les informations pour le stocker dans la base de donnée
$pseudo = $_POST['pseudo'];
$age = $_POST['age'];
$date = $_POST['date'];

//
try {
    $cnx = new PDO(DBDRIVER . ':host=' . DBHOST . ';port=' . DBPORT . ';dbname=' . DBNAME . ';charset=' . DBCHARSET, DBUSER, DBPASS);
    $sql = "INSERT INTO badge (pseudo, age) values (:pseudo, :age)";
    $stmt = $cnx->prepare($sql);
    $stmt->bindValue(":pseudo", $pseudo);
    $stmt->bindValue(":age", $age);
    $stmt->execute();
    header('Location: ./jeu.php');

} catch (Exception $e) {

    echo $e->getMessage();
    header('Location: ./inscription.php');
}

?>