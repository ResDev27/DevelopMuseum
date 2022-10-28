<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="./assets/css/background.css">
    <link rel="stylesheet" href="DevelopMuseum\assets\css\inscription.css">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DevelopMuseum</title>
</head>

    <body>
            <?php
            if (isset($_GET['p'])) {
                include "./" . $_GET['p'] . ".php";
            } else {
                include "./inscription.php";
            }
            ?>
    </body>
</html>