<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/background.css">
    <title>DevelopMuseum Jeu</title>
</head>

<body>

    <div style="z-index:1000">
        <form action="./pointsTraitement.php" method="POST">
        <input type="hidden" id="field"  name="score" value="">
        <script src="./pointsFunction.js"></script>
        <button>Enregistre ton Score</button>
        </form>
    </div>



<?php
    include "./includes/header.php";
    ?>
<div class='cadre'></div>
    <main>
        <iframe src="iframe.php"></iframe>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/p5.min.js'></script>
        <script src="./Js/background.js"></script>
    </main>

    <?php
    include "./includes/footer.php";
    ?>


</body>

</html>