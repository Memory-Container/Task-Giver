function openGroupModal() {
    openModal({
        title: "Tham gia nhóm bằng ID",
        message: `
        <section class="add-section">
            <input placeholder="Nhập ID Nhóm" class="addGroup">
            <button class="secondary addGroup"><i class="fa-solid fa-arrow-right"></i></button>
        </section>
            <div class="small-info">ID Nhóm có 8 ký tự! (Bao gồm cả số và chữ)</div>
        <section class="create-section">
            <div class="create-title">Bạn cũng có thể tạo nhóm</div>
            <button class="secondary" onclick="openCreateGroupModal()">Tạo nhóm</button>
        </div>
        `,
        options: ['hidden'],
    })
}
function openCreateGroupModal() {
    closeModal()
    openModal({
        title: "Tạo nhóm riêng của bạn",
        message: `
            <label class="create-group">
            <div>Tên nhóm <span class="important">*</span></div>
                <input type="text" name="group-name" required maxlength="50">
            </label>
            <label class="create-group">Mô tả nhóm <textarea type="text" name="group-desc" maxlength="150" placeholder="Tối đa 150 ký tự..."></textarea></label>
        `,
        options: [
            {
                type: 'tertiary',
                message: 'Quay lại', 
                callback: openGroupModal
            },
            {
                type: 'primary',
                message: 'Tạo', 
                callback: getGroupData
            }
        ]
    })
}
function dummyFunction() {
    console.log("Do nothing")
}
function getGroupData() {
    let form = document.querySelector(".modal-form")
    let submitter = document.querySelector("#submit")
    let name = document.querySelector('input[name="group-name"]')
    if (name.value == '') {
        return;
    }
    let formData = new FormData(form, submitter)
    let groupContainer = document.querySelector(".group-container.container")
    let groupDesc = formData.get('group-desc') == '' ? `Nhóm giao việc của ${formData.get('group-name')}` : formData.get('group-desc')
    groupContainer.innerHTML += `
        <div class="group">
            <div class="group-banner">

            </div>
            <div class="group-content">
                <div class="group-main">
                    <div class="group-header">
                        <div class="group-icon">

                        </div>
                        <h3 class="group-name">
                            ${formData.get('group-name')}
                        </h3>
                    </div>
                    <div class="group-body">
                        <div class="group-desc">
                            ${groupDesc}
                        </div>
                    </div>
                </div>
                <div class="group-footer">
                    <div class="small-info">
                        5 thành viên
                    </div>
                </div>
            </div>
        </div>
    `
    for (const [key, value] of formData) {
        console.log(formData);
    }
    closeModal()
    return formData
}
let group = document.querySelectorAll(".group")
group.forEach((element, index) => {
    element.addEventListener("click", () => {
    window.location.assign("../../pages/groupDetails")
    })
})