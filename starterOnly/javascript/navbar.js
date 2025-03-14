// add class "responsive" to navbar
function editNav() {
    const nav = document.querySelector(".navbar")
    if (nav.className === "navbar") {
        nav.classList.add("responsive")
    } else {
        nav.className = "navbar"
    }
}

// menu opens by clicking on icon
document.getElementById("menu_icon").addEventListener("click", editNav)