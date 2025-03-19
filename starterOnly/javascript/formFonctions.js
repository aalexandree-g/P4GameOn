// check input with regex
function inputIsWrong(regex, input) { return (regex && !regex.test(input.value)) }

// check if birthdate is empty
function birthdateIsEmpty(id, input) { return (id === "birthdate" && input.value === "") }

// check if there is no radio button selected
function noLocationSelected(input) { return (input === null) }

// check if conditions are accepted
function conditionsNotAccepted(id, input) { return (id === "checkbox1" && !input.checked) }

// show error message under concerned field
function errorMessage(fieldId, msgError) {
    let champ = document.getElementById(fieldId)
    if (champ) {
        let elementParent = champ.closest(".formData")
        elementParent.dataset.error = msgError
        elementParent.dataset.errorVisible = "true"
    }
}

export function checkForm(formUser) {
    // delete error messages if there are already
    document.querySelectorAll("[data-error]").forEach((msg) => {
        delete msg.dataset.error
        delete msg.dataset.errorVisible
    })
    // delete validation messages if there are already
    document.querySelectorAll(".validation").forEach((msg) => msg.remove())

    // iterate through each object in formUser
    let isValid = true
    formUser.forEach((field) => {
        // check if every part of the form is valid
        if (
            inputIsWrong(field.regex, field.input) ||
            birthdateIsEmpty(field.id, field.input) ||
            noLocationSelected(field.input) ||
            conditionsNotAccepted(field.id, field.input)
        ) {
            errorMessage(field.id, field.msgError)
            isValid = false
        }
    })
    // show success message
    if (isValid) {
        // make the form disappear
        let form = document.getElementById("mainForm")
        form.style.opacity = "0"

        // create success div
        let success = document.createElement("div")
        success.classList.add("modal-success")
        
        // create success message
        let messageValidation = document.createElement("p")
        messageValidation.classList.add("validation")
        messageValidation.innerText = "Merci ! Votre réservation a été reçue."

        // create close button
        let btnClose = document.createElement("button")
        btnClose.classList.add("btn-close", "button")
        btnClose.innerText = "Fermer"
        btnClose.addEventListener("click", () => {
            document.querySelector(".bground").style.display = "none"
        })
        
        // add message and button to div
        success.appendChild(messageValidation)
        success.appendChild(btnClose)
        document.querySelector(".modal-body").appendChild(success)
    }
}