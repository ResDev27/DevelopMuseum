<?php
    include "./includes/header.php";
?>

<h1>Page Scores</h1>
<?php

// 1. Créer une connexion à la BD
include "./connection/db.php";

try {
        $cnx = new PDO(DBDRIVER . ':host=' . DBHOST . ';port=' . DBPORT . ';dbname=' . DBNAME . ';charset=' . DBCHARSET, DBUSER, DBPASS);
        $sql="SELECT * FROM badge";
        // 3. Lancer la requête (préparation et lancement)
        $stmt = $cnx->prepare($sql);
        $stmt->execute();
        // 4. Obtenir les données dans un array 
        $arrayRes = $stmt->fetchAll(PDO::FETCH_ASSOC);

        var_dump ($arrayRes);

    } catch (Exception $e) {

        echo $e->getMessage();

        die();
}

include "./includes/footer.php";

?>