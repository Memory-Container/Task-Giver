let header = document.getElementsByTagName("header")[0] ?? []
let footer = document.getElementsByTagName("footer")[0] ?? []
let logo = document.getElementsByClassName("logo")
let menu = document.getElementsByClassName("hamburger")
footer.innerHTML = `
        <div class="container flex-c g24">
            <div class="flex-c g5">
                <div class="logo">

                </div>
                <div class="f14 w5">
                    Farland Superlunary © 2025. All rights reserved.
                </div>
            </div>
            <div class="flex-r t-flex-c g20 j-between">
                <div class="flex-r t-flex-wrap j-between g20" style="width: 100%">
                    <div class="linkContainer">
                        <div class="f-link">
                            Homepage
                        </div>
                        <div class="f-link">
                            Schedule
                        </div>
                    </div>
                    <div class="linkContainer">
                        <div class="f-link">
                            Terms Of Service
                        </div>
                        <div class="f-link">
                            Privacy Policy
                        </div>
                    </div>
                    <div class="linkContainer">
                        <div class="linkType">
                            Contact Information
                        </div>
                        <div class="link">
                            Address: 123 That road, This city, Random Country
                        </div>
                        <div class="link">
                            Phone Number: 0-1800-INFORMATION
                        </div>
                        <div class="link">
                            Gmail: abluecat@waitingforever.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
`
header.innerHTML = `
        <div class="container flex-r j-between">
            <div class="logo">
            </div>
            <nav class="main-nav">
                <ul class="nav-menu">
                    <li class="nav-item">
                        <a class="nav-link" href="../../pages/schedule/" id="schedule">Lịch trình</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../../pages/todo/" id="todo">Danh sách việc</a>
                    </li>
                </ul>
            </nav>
            <div class="flex-r g10 a-center">
            </div>
        </div>
`
function initializeNav() {
    let link = document.querySelectorAll(".nav-link")
    let currentPage = window.location.pathname.match(/[\w]+/gm)[1]
    for (let i = 0; i < link.length; i++) {
        if (link[i].id == currentPage) {
            link[i].classList.add("active")
        }
    }
}
initializeNav()