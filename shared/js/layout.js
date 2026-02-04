let header = document.getElementsByTagName("header")[0] ?? []
let footer = document.getElementsByTagName("footer")[0] ?? []
let logo = document.getElementsByClassName("logo")
let menu = document.getElementsByClassName("hamburger")
footer.innerHTML = `
`
header.innerHTML = `
        <div class="container flex-r j-between">
            <div class="logo">
            </div>
            <nav class="main-nav">
                <ul class="nav-menu">
                    <li class="nav-item">
                        <a class="nav-link" href="../../pages/group/" id="homepage">Nhóm</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../../pages/schedule/" id="schedule">Lịch trình</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../../pages/todo/" id="todo">Việc cần làm</a>
                    </li>
                </ul>
            </nav>
            <div class="flex-r g10 a-center">
                <button class="primary" id="signIn">Đăng nhập</button>
            </div>
        </div>
`
let currentPage
function initializeNav() {
    let link = document.querySelectorAll(".nav-link")
    let signIn = document.querySelector("#signIn")
    currentPage = window.location.pathname.match(/[\w]+/gm)[1]
    signIn.addEventListener('click', () => {
        window.location.assign('../../pages/signIn/')
    })
    if (currentPage == 'signIn') {
        document.querySelector('#signIn').style.display = 'none'
    }
    for (let i = 0; i < link.length; i++) {
        if (link[i].id == currentPage) {
            link[i].classList.add("active")
        }
    }
}
initializeNav()