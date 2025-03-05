const formulaire = document.querySelector("form")
formulaire.addEventListener("submit", (event) => {
    // on empêche le rechargement du formulaire
    event.preventDefault()
    // on stocke les données renseignées dans formUtilisateur
    let formUtilisateur = [
        {
            id : "first",       // champ du prénom
            valeur : document.getElementById("first").value,
            regle : /^[a-zA-Z]{2,}(-[a-zA-Z]+)?$/,
            msgErreur : "Veuillez entrer 2 caractères ou plus pour le prénom."
        },
        {
            id : "last",        // champ du nom
            valeur : document.getElementById("last").value,
            regle : /^[a-zA-Z]{2,}(-[a-zA-Z]+)?$/,
            msgErreur : "Veuillez entrer 2 caractères ou plus pour le nom."
        },
        {
            id : "email",       // champ de l'email
            valeur : document.getElementById("email").value,
            regle : /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+$/,
            msgErreur : "L'adresse email est incorrecte."
        },
        {
            id : "birthdate",   // champ de la date de naissance
            valeur : document.getElementById("birthdate").value,
            msgErreur : "Veuillez entrer votre date de naissance."
        },
        {
            id : "quantity",    // champ du nombre de concours
            valeur : document.getElementById("quantity").value,
            regle : /^[0-9]+$/,
            msgErreur : "Veuillez entrer un nombre."
        },
        {
            id : "location1",   // choix de la ville de participation
            valeur : document.querySelector('input[name="location"]:checked'),
            msgErreur : "Veuillez choisir une option."
        },
        {
            id : "checkbox1",   // checkbox des conditions générales
            valeur : document.getElementById("checkbox1"),
            msgErreur : "Veuillez accepter les termes et conditions."
        }
    ]
    verifierFormulaire(formUtilisateur)
})


function verifierFormulaire(formUtilisateur) {
    // s'il y a déjà des messages d'erreur sous les champs, on les supprime
    document.querySelectorAll(".erreur").forEach((msg) => msg.remove())

    // on va balayer chaque objet de formUtilisateur
    formUtilisateur.forEach((champ) => {
        if (
            // pour le cas des champs avec règles
            champ.regle && !champ.regle.test(champ.valeur) ||
            // pour le cas de la date de naissance
            (champ.id === "birthdate" && champ.valeur === "") ||
            // pour le cas des boutons radio
            (champ.id === "location1" && champ.valeur === null) ||
            // pour le cas des conditions générales
            (champ.id === "checkbox1" && !champ.valeur.checked)
        ) {
            afficherMessageErreur(champ.id, champ.msgErreur)
        }
    })
}


// afficher le message d'erreur sous le champ concerné
function afficherMessageErreur(champId, message) {
    let champ = document.getElementById(champId)
    if (champ) {
        // on crée une balise <p> dans laquelle on insère le message d'erreur
        let messageErreur = document.createElement("p")
        messageErreur.classList.add("erreur")
        messageErreur.innerText = message
        // on insère la balise à la fin de chaque div de classe formData
        let elementParent = champ.closest(".formData")
        elementParent.appendChild(messageErreur)
    } else {
        console.log(`Erreur : aucun balise avec l'id ${champId} n'a été trouvée.`)
    }
}