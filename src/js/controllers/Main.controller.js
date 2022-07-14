import Api from "../models/Api.model.js";
import MainView from "../views/Main.view.js";

export default class Main {
    static clickButttonCreate() {
        const button = document.querySelector(".section__filter--button")
        const sectionModal = document.querySelector("#modal-criar")
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

        tableBody.addEventListener('click', async event => {
            if (event.target.tagName === 'BUTTON') {
                editModal.classList.remove('hidden')
                const inputArray = [...editForm.elements]

                const habit = await Api.getHabitById(event.target.id)

                inputArray.forEach(input => {
                    if (input.tagName != 'BUTTON') {
                        if (input.type != 'checkbox') {
                            input.value = habit[input.name]
                        } else {
                            input.checked = habit[input.name]
                        }
                    }
                })
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
}
