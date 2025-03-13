function editNav() {
    let nav = document.getElementById("myTopnav")
    if (nav.className === "topnav") {
        nav.classList.add("responsive")
    } else {
        nav.className = "topnav"
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground")
const formData = document.querySelectorAll(".formData")

// launch modal event
document.querySelectorAll(".modal-btn").forEach((btn) => { btn.addEventListener("click", launchModal) })

// launch modal form
function launchModal() { modalbg.style.display = "block" }

// close modal by clicking on cross (X)
document.querySelector(".close").addEventListener("click", () => { modalbg.style.display = "none" })
