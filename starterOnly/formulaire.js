const formulaire = document.querySelector("form")
formulaire.addEventListener("submit", (event) => {
    // on empêche le rechargement du formulaire
    event.preventDefault()
    // on stocke les données renseignées dans formData
    let formUtilisateur = {
        prenom : document.getElementById("first").value,
        nom : document.getElementById("last").value,
        email : document.getElementById("email").value,
        birthdate : document.getElementById("birthdate").value,
        nbConcours : document.getElementById("quantity").value,
        location : ""
    }
    // on vérifie formData
    verifierFormulaire(formUtilisateur)
})


function verifierFormulaire(formUtilisateur) {

    // VÉRIFICATION DES NOM, PRÉNOM, EMAIL, DATE DE NAISSANCE ET NOMBRE DE CONCOURS
    const regles = {
        prenom : /^[a-zA-Z]{2,}(-[a-zA-Z]+)?$/, // vérification prénom
        nom : /^[a-zA-Z]{2,}(-[a-zA-Z]+)?$/, // vérification nom
        email : /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+$/, // vérification email
        nbConcours : /^[0-9]+$/ // vérification nombre de concours
    }
    // on crée une liste
    let erreurs = []
    // on balaye les règles
    for (let i in regles) {
        // on les compare aux éléments du formulaire
        let resultat = regles[i].test(formUtilisateur[i])
        // chaque erreur est rajoutée à la liste
        if (!resultat) { erreurs[i] = `${i} invalide` }
    }
    if (formUtilisateur["birthdate"] === "") {
        erreurs["birthdate"] = "Date de naissance invalide"
    }

    // VÉRIFICATION DES BOUTONS RADIO
    let listeRadio = document.getElementsByName("location")
    let btnCoche = false
    // pour chaque bouton radio, on vérifie s'il est coché
    listeRadio.forEach((btn) => {
        if (btn.checked) {
            btnCoche = true
            formData["location"] = btn.value
        }
    })
    if (!btnCoche) { erreurs["location"] = "Localisation invalide" }

    // VÉRIFICATION CONDITIONS GÉNÉRALES
    let caseConditionsGenerales = document.getElementById("checkbox1")
    if (!caseConditionsGenerales.checked) {
        erreurs["conditionsGenerales"] = "Il faut accepter les conditions générales"
    }

    // AFFICHAGE DES ERREURS
    console.log(erreurs)
}