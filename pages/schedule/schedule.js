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
let string = ""
for (let i = 0; i <= 5; i++) {
    string += "<tr class='calendar-row'>"
    for (let j = 7 * i + 1; j <= 7 * (i + 1); j++) {
        string += `<td class='days'><button class="circle">${j % 31 == 0 ? j : j % 31}</button></td>`
    }
    string += "</td>"
}
calendar.innerHTML = string