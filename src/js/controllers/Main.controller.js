import Api from "../models/Api.model.js";
import MainView from "../views/Main.view.js";
import editHabitController from "./editHabit.controller.js";

export default class Main {
    static currentHabitId = 0
    
    static clickButttonCreate() {
        const button = document.querySelector(".section__filter--button")
        const sectionModal = document.querySelector("#modal-criar")
        const spanX = document.querySelector(".fa-x")
        const buttonInserir = document.querySelector(".button--big")
        const popUp = document.querySelector(".container_pop-up_create-habit")
        const inputTitle = document.querySelector("#habit_title")
        
        console.log(inputTitle.value)
        button.addEventListener("click", event => {
            event.preventDefault()
            
            sectionModal.classList.remove("hidden")
        })
        spanX.addEventListener("click", event => {
            event.preventDefault()
            sectionModal.classList.add("hidden")
        })

        buttonInserir.addEventListener("click", (e) => {
            e.preventDefault()
            if(inputTitle.value != "") {
                popUp.classList.toggle("hidden");
                setTimeout(() => {
                    popUp.classList.toggle("hidden");
                }, 3000)
            }
            sectionModal.classList.add("hidden")
        })
    }

    static async showAllComplets() {
        const button = document.querySelector("#postsConcluded");
        const posts = await Api.habitReadAll();
        const tableBody = document.querySelector('.habits__table-body');

        button.addEventListener("click", async event => {
            const posts = await Api.habitReadAll()
            event.preventDefault()

            tableBody.innerHTML = "";
            
            const truePosts = posts.filter(post => {
                if (post.habit_status) {
                    return true
                }
            })
            await MainView.renderAllHabits(truePosts)
        })
    }

    static showAll() {
        const buttonTodos = document.querySelector("#allPosts");
        const tableBody = document.querySelector('.habits__table-body');
        
        buttonTodos.addEventListener("click", async event => {
            const todos = await Api.habitReadAll()
            event.preventDefault()

            tableBody.innerHTML = ""
            await MainView.renderAllHabits(todos)
        })
    }

    static clickButtonEdit() {
        const tableBody = document.querySelector('.habits__table-body')
        const editModal = document.querySelector('#edit-modal')
        const editForm = document.querySelector('.modal-edit-habito-form')
        const popUp = document.querySelector(".container_pop-up_edit-habit")
        const buttonSave = document.querySelector("#buttonSave")
        
        tableBody.addEventListener('click', async event => {
            if (event.target.tagName === 'BUTTON') {
                editModal.classList.remove('hidden')
               
                const inputArray = [...editForm.elements]

                const habit = await Api.getHabitById(event.target.id)
                
                // buttonSave.addEventListener("click", (e) => {
                //     e.preventDefault()
                //     console.log("Hábito editado com sucesso!")
                //     popUp.classList.toggle("hidden");
                //     setTimeout(() => {
                //         popUp.classList.toggle("hidden");
                //     }, 3000)
                //     editModal.classList.toggle("hidden")
                // })

                this.currentHabitId = event.target.id

                const idButton = document.querySelector('.button_red')
                idButton.id = event.target.id


                inputArray.forEach(input => {
                    if (input.tagName != 'BUTTON') {
                        if (input.type != 'checkbox') {
                            input.value = habit[input.name] 
                        } else {
                            input.checked = habit[input.name]
                        }
                    }
                })

                editHabitController.resetAlterationObject()
            }
        })

        
    }

    static clickCheckbox() {
        const tableBody = document.querySelector(".habits__table-body");

        tableBody.addEventListener("click", (event) => {
        if (event.target.type === "checkbox") {
            // const statusObject = {
            //     habit_status: event.target.checked
            // }
            const buttonId = event.composedPath()[3].childNodes[4].childNodes[0].id;

            Api.habitComplete(buttonId);

            MainView.checkIfItsComplete();
        }
    });
    }
  
    static messageError() {
        const title = document.querySelector("#habit_title")
        const description = document.querySelector("#habit_description")
        let hasError = false

        const titleErr = document.querySelector("#title_error")
        const descriptionErr = document.querySelector("#description_error")

        if (title.value === "") {
            titleErr.classList.remove("hidden")
            title.classList.add("input--error")
            hasError = true
        } else {
            titleErr.classList.add("hidden")
            title.classList.remove("input--error")
        }
        if (description.value === "") {
            descriptionErr.classList.remove("hidden")
            description.classList.add("input--error")
            hasError = true
        } else {
            descriptionErr.classList.add("hidden")
            description.classList.remove("input--error")
        }
        return hasError
    }

    static loadMoreButton() {
        const button = document.querySelector('.load-more')
        
        button.addEventListener('click', event => {
            MainView.rangeNumber += 10
            MainView.renderAllHabits(Api.habitReadAll())
        })
    }
}
