
// Une fonction de départ qui pointe vers la classe hide du css faudrait tt faire en js
function depart () {
    
    // ici il y'a aussi la fonction de la question random car c'est dés le depart qu'elle doit etre initiée
    melangequest = questions.sort(() => Math.random());
    questionIndex = 0;
    next ();
    console.log(melangequest[questionIndex])
    
}
// Une fonction pour le bouton next qui va chercher une question de façon aléatoire 
function next () {
    // affichage de la question qui aura en paramètre la question random et son index
    affichage(melangequest[questionIndex])
    // effacer la réponse 
    effacer()
    
}

function affichage (question) {
    // affichage du contenu de la question dans la div question
    questionContenu.innerText = question.question;
    question.choix.forEach( choix => {
        const bouton = document.createElement('button')
        bouton.classList.add('btn')
        /*Accéder aux valeurs
            Il est possible d'accéder aux valeurs d'un attribut et de le modifier en utilisant le nom de la clé comme propriété de l'objet : element.dataset.nomcle
            Il est aussi possible de lire et d'écrire les attributs avec la notation entre crochets : element.dataset['nomcle']
            L'opérateur in permet de vérifier si un attribut donné existe : 'nomcle' in element.dataset*/
            // Dans ce cas si c'est pour accéder aux valeurs booléenes
        if (choix.correcte){
            bouton.dataset.correcte = choix.correcte;

        }
        bouton.addEventListener('click', selectionner )
        reponseValidation.appendChild(bouton);
    });
}



