const formulaire = document.querySelector("form")
formulaire.addEventListener("submit", (event) => {
    // on empêche le rechargement du formulaire
    event.preventDefault()
    // on stocke les données renseignées dans formUtilisateur
    // id et msgErreur sont là afin de gérer les erreurs
    let formUtilisateur = [
        {
            id : "first",
            valeur : document.getElementById("first").value,
            msgErreur : "Veuillez entrer 2 caractères ou plus pour le prénom."
        },
        {
            id : "last",
            valeur : document.getElementById("last").value,
            msgErreur : "Veuillez entrer 2 caractères ou plus pour le nom."
        },
        {
            id : "email",
            valeur : document.getElementById("email").value,
            msgErreur : "L'adresse email est incorrecte."
        },
        {
            id : "birthdate",
            valeur : document.getElementById("birthdate").value,
            msgErreur : "Veuillez entrer votre date de naissance."
        },
        {
            id : "quantity",
            valeur : document.getElementById("quantity").value,
            msgErreur : "Veuillez entrer un nombre."
        },
        {
            id : "location",
            valeur : document.getElementsByName("location"),
            msgErreur : "Veuillez choisir une option."
        }
    ]
    verifierFormulaire(formUtilisateur)
})


function verifierFormulaire(formUtilisateur) {
    // s'il y a déjà des messages d'erreur sous les champs, on les supprime
    document.querySelectorAll(".erreur").forEach((msg) => msg.remove())

    // VÉRIFICATION DES CHAMPS AVEC RÈGLES
    const regles = {
        first : /^[a-zA-Z]{2,}(-[a-zA-Z]+)?$/, // règle pour le prénom
        last : /^[a-zA-Z]{2,}(-[a-zA-Z]+)?$/, // règle pour le nom
        email : /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+$/, // règle pour l'email
        quantity : /^[0-9]+$/ // règle pour le nombre de concours
    }
    // on va balayer l'id de chaque champ de formUtilisateur
    formUtilisateur.forEach((champ) => {
        // on les compare aux clés des règles
        if ((champ.id in regles) && (!regles[champ.id].test(champ.valeur))) {
            afficherMessageErreur(champ.id, champ.msgErreur)
        }
    })

    // VÉRIFICATION DE LA DATE DE NAISSANCE
    let champNaissance = document.getElementById("birthdate").value
    if (champNaissance === "") {
        afficherMessageErreur("birthdate", "Veuillez renseigner votre date de naissance.")
    }

    // VÉRIFICATION DES BOUTONS RADIO


    // VÉRIFICATION DES CONDITIONS GÉNÉRALES
    let caseConditionsGenerales = document.getElementById("checkbox1")
    if (!caseConditionsGenerales.checked) {
        afficherMessageErreur("checkbox1", "Veuillez accepter les termes et conditions.")
    }
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
    }
}
