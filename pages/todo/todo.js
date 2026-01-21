let filterType = document.querySelectorAll(".filter-type")
let dropdown = document.querySelectorAll(".dropdown")
let calendar = document.querySelector(".calendar-date")
filterType.forEach((element, id) => {
    element.addEventListener("click", () => {
        if (dropdown[id].style.display == "none") {
            dropdown[id].style.display = "flex"
        }  else {
            dropdown[id].style.display = "none"
        }
    })
})