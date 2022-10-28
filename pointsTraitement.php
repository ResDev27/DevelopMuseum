<?php
// prémiere ligne du script, pour accéder à la session

include "./connection/db.php";
session_start();


// 1. Récuperer les informations pour le stocker dans la base de donnée
$score = $_POST['score'];


//
try {
    $cnx = new PDO(DBDRIVER . ':host=' . DBHOST . ';port=' . DBPORT . ';dbname=' . DBNAME . ';charset=' . DBCHARSET, DBUSER, DBPASS);
    $sql = "UPDATE badge SET score = :score WHERE pseudo = :pseudo";
    $stmt = $cnx->prepare($sql);
    $stmt->bindValue(":score", $score, PDO::PARAM_INT);
    $stmt->bindValue(":pseudo", $_SESSION['pseudo']);
    $stmt->execute();
    header('Location: points.php');
    session_destroy();

} catch (Exception $e) {

    echo $e->getMessage();
    //header('Location: points.php');

}