<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription Au DevelopMuseum</title>
</head>
<body>
    <h1>Bienvenue au DevelopMuseum</h1>
    <h2> Faites le check-in pour recevoir votre badge</h1>
    <form action="./inscriptionTraitement.php" method="POST">
        Pseudo:<input type="text" name="pseudo">
        Age:<input type="age" name="age">
        Date:<input type="date" name="date" value="<?=date("Y-m-d H:i:s");?>">
        <input type="submit">
    </form>

</body>
</html>