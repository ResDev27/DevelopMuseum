let score = '20';

fetch("./pointsTraitement.php", { score: score })
    .then(Response => Response.json())
    .then(data => console.log(data));
