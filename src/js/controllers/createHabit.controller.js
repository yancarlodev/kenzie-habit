import Api from "../models/Api.model.js";

export default class createHabit {
  static controllerHabit() {
    const modal = document.querySelector("#modal-criar");
    const pop_up = document.querySelector(".container_pop-up_create-habit");
    const buttonInserir = document.querySelector(".button-inserir");

    buttonInserir.addEventListener("click", async (e) => {
      e.preventDefault();
      const dados = {};
      const formValue = [...e.target.form];
      formValue.forEach((input) => {
        if (input.value !== "") {
          dados[input.name] = input.value;
        }
      });

      const request = await Api.createHabit(dados);
      console.log(request);
      if (request.habit_id !== undefined) {
        modal.style.display = "none";
        pop_up.style.display = "flex";
      }else{
        alert(request.messege)
      }
    });
  }
}
