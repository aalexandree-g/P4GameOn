import { checkForm } from './fonctions.js'

// form fields
const firstnameInput = document.getElementById("first")
const lastnameInput = document.getElementById("last")
const emailInput = document.getElementById("email")
const birthdateInput = document.getElementById("birthdate")
const quantityInput = document.getElementById("quantity")
const conditionsCheckbox = document.getElementById("checkbox1")

// regex
const nameRegex = /^[a-zA-Z]{2,}(-[a-zA-Z]+)?$/
const emailRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+$/
const quantityRegex = /^[0-9]+$/

// error messages
const firstnameMessage = "Veuillez entrer 2 lettres ou plus pour le prénom."
const lastnameMessage = "Veuillez entrer 2 caractères ou plus pour le nom."
const emailMessage = "L'adresse email est incorrecte."
const birthdateMessage = "Veuillez entrer votre date de naissance."
const quantityMessage = "Veuillez entrer un nombre."
const locationMessage = "Veuillez choisir une option."
const conditionsMessage = "Veuillez accepter les termes et conditions."

// check form when submit
document.querySelector("form").addEventListener("submit", (event) => {
    // block the form's reload
    event.preventDefault()
    // put data into formUser
    let formUser = [
        {
            id : "first",
            input : firstnameInput,
            regex : nameRegex,
            msgError : firstnameMessage
        },
        {
            id : "last",
            input : lastnameInput,
            regex : nameRegex,
            msgError : lastnameMessage
        },
        {
            id : "email",
            input : emailInput,
            regex : emailRegex,
            msgError : emailMessage
        },
        {
            id : "birthdate",
            input : birthdateInput,
            msgError : birthdateMessage
        },
        {
            id : "quantity",
            input : quantityInput,
            regex : quantityRegex,
            msgError : quantityMessage
        },
        {
            id : "location1",
            input : document.querySelector("input[name='location']:checked"),
            msgError : locationMessage
        },
        {
            id : "checkbox1",
            input : conditionsCheckbox,
            msgError : conditionsMessage
        }
    ]
    checkForm(formUser)
})