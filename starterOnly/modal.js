function editNav() {
  var x = document.getElementById("myTopnav")
  if (x.className === "topnav") {
    x.className += " responsive"
  } else {
    x.className = "topnav"
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground")
const formData = document.querySelectorAll(".formData")

// launch modal event
const modalBtn = document.querySelectorAll(".modal-btn")
modalBtn.forEach((btn) => {
  btn.addEventListener("click", launchModal)
})

// launch modal form
function launchModal() {
  modalbg.style.display = "block"
}

// fermeture de la modale au clic sur la croix (X)
const close = document.querySelector(".close")
close.addEventListener("click", () => {
  modalbg.style.display = "none"
})