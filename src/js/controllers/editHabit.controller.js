import Api from "../models/Api.model.js"
import MainView from "../views/Main.view.js"
import Main from "./Main.controller.js"

export default class editHabitController {
    static alterationsObject = {}

    static getUserInput() {
        const form = document.querySelector('.modal-edit-habito-form')
        const editModal = document.querySelector('#edit-modal')

        const formInputs = [...form]

        form.addEventListener('submit', event => {
            event.preventDefault()

            formInputs.forEach(input => {
                if(input.tagName != 'BUTTON' && input.type != 'checkbox') {
                    this.alterationsObject[input.name] = input.value
                }
            })

            Api.habitEdit(this.alterationsObject, Main.currentHabitId)
            setTimeout(() => {
                MainView.renderAllHabits(Api.habitReadAll())
            }, 200)
            editModal.classList.add('hidden')
        })
    }

    static resetAlterationObject() {
        this.alterationsObject = {}
    }
}