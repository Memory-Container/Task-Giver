let members = document.querySelectorAll(".member-info")
let tabs = document.querySelectorAll('.bar-option')
let taskTab = document.querySelector(".task-section")
let groupTab = document.querySelector(".group-section")
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
let mockTask = {
    untransfered: [
        {
            taskName: "Task1",
            taskStart: '15/02/2025',
            taskEnd: '24/02/2025',
            taskDesc: `
                Nothing nothing nothing
            `,
            taskUser: [
                {
                    userImg: '',
                    username: '',
                }
            ],
            taskChecklist: [
                {
                    title: 'UI',
                    status: 'incomplete',
                }
            ],
        }
    ]
}
function openTaskModal(board) {
    openModal({
        title: '',
        message: `
            <div style='display:flex; flex-direction: column; gap: 5px'>
                <label>
                    <div>
                        Tên công việc <span class='important'>*</span>
                    </div>
                    <input type="text" required>
                </label>
                <label>
                    Người nhận việc
                    <input type="text" placeholder="Thêm người...">
                </label>
                <div style='display:flex; flex-direction: row; gap: 5px'>      
                    <label>
                        Ngày bắt đẩu
                        <input type="datetime-local">
                    </label>
                    <label>
                        Ngày kết thúc
                        <input type="datetime-local">
                    </label>
                </div>
                <label>
                    Mô tả
                    <textarea maxLength="500" placeholder='Tối đa 500 ký tự...'></textarea>
                </label>
            </div>
            
        `,
        options: [
            {
                type: "tertiary",
                message: 'Hủy bỏ',
                callback: closeModal
            },
            {
                type: "primary",
                message: 'Tạo việc',
                callback: dummyFunction
            }

        ]
    })
}
function addToBoard(board) {
    let boardContainer = document.querySelector(`.task-board#${board}`)
}