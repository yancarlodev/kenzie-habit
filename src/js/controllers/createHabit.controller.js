import Api from "../models/Api.model.js";
import MainView from "../views/Main.view.js";
import Main from "./Main.controller.js";

export default class createHabit {
  static controllerHabit() {
    const modal = document.querySelector("#modal-criar");
    const pop_up = document.querySelector(".container_pop-up_create-habit");
    const buttonInserir = document.querySelector(".button-inserir");
    const edit = document.querySelector("#edit-habit")
    const modalEdit = document.querySelector(".container_edit-habit")

    buttonInserir.addEventListener("click", async (e) => {
      e.preventDefault();
      const dados = {};
      const formValue = [...e.target.form];
      formValue.forEach((input) => {
        if (input.value !== "") {
          dados[input.name] = input.value;
        }
      });
        if (Main.messageError() === false) {
            const request = await Api.createHabit(dados);
      
            MainView.renderAllHabits(Api.habitReadAll())
            modal.classList.add('hidden')
          } 
      });
    edit.addEventListener("click", (e) => {
      modalEdit.classList.add("hidden")
    })
  }
}
