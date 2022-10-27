<body>
<script src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/p5.min.js'></script>
<script src="./Js/point.js"></script>

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

        foreach ($arrayRes as $badge) {

            echo '<div class="card" style="width: 10rem;">';
            echo '<a href="./detailFilm.php?id=' . $film['id']  . '"><img class="card-img-top" src="./img/'  . $film['image'] .   '" alt="' . $film['titre'] . '"></a>';
            echo '<div class="card-body">';
            echo '<h5 class="card-title">' . $film['titre'] . '</h5>';
            echo '</div>';
            echo '</div>';
        }

    } catch (Exception $e) {

        echo $e->getMessage();

        die();
}

include "./includes/footer.php";

?>
</body>