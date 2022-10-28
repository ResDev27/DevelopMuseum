<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/background.css">
    <title>DevelopMuseum Scores</title>
</head>

<h1>Page Scores</h1>
<?php

// 1. Créer une connexion à la BD
include "./connection/db.php";

try {
    $cnx = new PDO(DBDRIVER . ':host=' . DBHOST . ';port=' . DBPORT . ';dbname=' . DBNAME . ';charset=' . DBCHARSET, DBUSER, DBPASS);
    $sql = "SELECT * FROM badge";
    // 3. Lancer la requête (préparation et lancement)
    $stmt = $cnx->prepare($sql);
    $stmt->execute();
    // 4. Obtenir les données dans un array 
    $arrayRes = $stmt->fetchAll(PDO::FETCH_ASSOC);

    foreach ($arrayRes as $badge) {
        echo '<div>';
        echo '<table>';
        echo '<tr>';
        echo '<th>PSEUDO</th>';
        echo '<th>AGE</th>';
        echo '<th>SCORE</th>';
        echo '</tr>';
        echo '<td>' . $badge['pseudo'] . '</td>';
        echo '<td>' . $badge['age'] . '</td>';
        echo '<td>' . $badge['score'] . '</td>';
        echo '</table>';
        echo '</div>';
    };
} catch (Exception $e) {

    echo $e->getMessage();

    die();
}

include "./includes/footer.php";

?>