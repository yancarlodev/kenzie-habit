import Api from "../models/Api.model.js";

export default class Delete {
  static deleleHabit() {
    const button = document.querySelector(".delete-button");
    const modalDelete = document.querySelector(".container_delete-habit");
    const modalEdit = document.querySelector("#edit-modal");
    const backButton = document.querySelector("#cancelar");
    const buttonDelete = document.querySelector(".button_red");
    const buttonExit = document.querySelector("#exit")

    button.addEventListener("click", (e) => {
      e.preventDefault();
      modalEdit.classList.add("hidden");
      modalDelete.classList.remove("hidden");
    });
    backButton.addEventListener("click", (e) => {
      e.preventDefault();
      modalEdit.classList.remove("hidden");
      modalDelete.classList.add("hidden");
    });
    buttonDelete.addEventListener("click", async (e) => {
      e.preventDefault()
      const id = e.target.id;
      location.reload(true)
      const deleteRequest = await Api.habitDelete(id); 
    });
    buttonExit.addEventListener("click", (e) => {
        modalDelete.classList.add("hidden")
    })
  }
}

