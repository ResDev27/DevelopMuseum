<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
    <link rel="stylesheet" href="./assets/css/inscription.css">
    <title>Inscription Au DevelopMuseum</title>
</head>
<body>
   
<?php
    include "./includes/header.php";
    ?>

    <main>
    <div class="login-box">
    <h2> Check in and get your badge </h1>
    <form action="./inscriptionTraitement.php" method="POST">
        <div class="user-box">
        Pseudo:<input type="text" name="pseudo">
        </div>
        <div class="user-box">
        Age:<input type="age" name="age">
        </div>
        <div class="user-box">
        Date:<input type="date" name="date" value="<?=date("Y-m-d H:i:s");?>">
        </div>
        <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <!-- votre badge -->
     <input id="btn-valid" type="submit" value="check in">
    </a>
        
    </form>
</div>


   
     <script src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/p5.min.js'></script>
    <script src="./Js/inscription.js"></script>
    </main>

<?php
    include "./includes/footer.php";
?> 
</body>
</html>