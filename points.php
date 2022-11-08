<body>
    
<main><script src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/p5.min.js'></script>
<link rel="stylesheet" href="./Assets/css/score.css">
   <script src="./Js/point.js"></script></main>
   <?php
    include "./includes/header.php";
    session_start();
    ?>
    
    <table class="login-box">
        <tr>
            
        <th class="user-box" id="pseudo" ><h3>Pseudo : </h3><?php echo $_SESSION['pseudo'] ?></th>
           
        <th class="user-box" id="age"><h3>Age : </h3><?php echo $_SESSION['age']  ?></th>
    
        <th class="user-box" id='score'><h3>Score : </h3><?php echo $_SESSION['score']  ?></th>
        
        </tr>
       
    </table>
    
    <?php
    ?>

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
        
        $pseudo= $badge['pseudo'];
        $age = $badge['age'];
        $score = $badge['score'];
        
    };
} catch (Exception $e) {
    
    echo $e->getMessage();
    
    die();
}

include "./includes/footer.php";


?>


</body>
