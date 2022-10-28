<body>
    
<main><script src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/p5.min.js'></script>
<link rel="stylesheet" href="./Assets/css/score.css">
   <script src="./Js/point.js"></script></main>
   <?php
    include "./includes/header.php";
    ?>
    
    
    <table class="login-box">
        <tr>
            
        <th class="user-box" >Pseudo</th>
           

     
        <th class="user-box">Age</th>
        

        
        <th class="user-box">Score</th>
        
        </tr>
       
    </table>
    
    <?php
    include "./includes/footer.php";
    ?>



</body>
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



?>