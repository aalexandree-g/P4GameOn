// DOM Elements
const modalbg = document.querySelector(".bground")
const formData = document.querySelectorAll(".formData")

// launch modal form
function launchModal() { modalbg.style.display = "block" }

// launch modal event
document.querySelectorAll(".modal-btn").forEach((btn) => { btn.addEventListener("click", launchModal) })

// close modal by clicking on cross (X)
document.querySelector(".close").addEventListener("click", () => { modalbg.style.display = "none" })

// close modal by clicking away from form
modalbg.addEventListener("click", (event) => {
    if (event.target === modalbg) {
        modalbg.style.display = "none" 
    }
})