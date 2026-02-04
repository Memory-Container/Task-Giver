let members = document.querySelectorAll(".member-info")
let memberCheckbox = document.querySelectorAll(".member-info input[type='checkbox']")
let tabs = document.querySelectorAll('.bar-option')
let taskTab = document.querySelector(".task-section")
let groupTab = document.querySelector(".group-section")
let memberTab = document.querySelector(".member-section")
tabs.forEach((element, index) => {
    element.addEventListener("click", () => {
        if (element.id == "task") {
            taskTab.style.display = "flex"
            groupTab.style.display = 'none'
            memberTab.style.display = 'none'
            console.log(1, element.id)
        } else if (element.id == 'group') {
            taskTab.style.display = "none"
            groupTab.style.display = 'flex'
            memberTab.style.display = 'none'
            console.log(1, element.id)
        } else if (element.id == 'member') {
            taskTab.style.display = "none"
            groupTab.style.display = 'none'
            memberTab.style.display = 'flex'
            console.log(1, element.id)
        }
    })
})
members.forEach((element, index) => {
    element.addEventListener("click", () => {
        memberCheckbox[index].checked = !memberCheckbox[index].checked
    })
})