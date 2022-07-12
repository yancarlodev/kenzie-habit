export default class Main {
    static clickButttonCreate () {
        const button = document.querySelector(".section__filter--button")
        const sectionModal = document.querySelector(".blocker")
        const spanX = document.querySelector(".fa-x")

        button.addEventListener("click", event => {
            event.preventDefault()
            sectionModal.classList.remove("hidden")
        })
        spanX.addEventListener("click", event => {
            event.preventDefault()
            sectionModal.classList.add("hidden")
        })
    }
}