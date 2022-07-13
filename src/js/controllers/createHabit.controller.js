import LoginRequest from "../models/Api.model.js"

export default class createHabit {
    static controllerHabit(){
        const buttonInserir = document.querySelector(".button-inserir")
        buttonInserir.addEventListener("click", async (e) => {
            e.preventDefault();
            const dados = {};
            const formValue = [...e.target.form];
            formValue.forEach((input) => {
              if (input.value !== "") {
                dados[input.name] = input.value;
              }
            });
            console.log(dados)
        })

    }
}
