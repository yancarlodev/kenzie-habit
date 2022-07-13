import Api from "../models/Api.model.js";
export default class Header {
  static buttonCard() {
    const button = document.getElementById("header--button");
    const popUp = document.getElementById("wrapper__header--pop-up");
    const seta = document.getElementById("seta");

    button.addEventListener("click", () => {
      if (popUp.style.display === "none") {
        popUp.style.display = "block";
      } else if (popUp.style.display === "block") {
        popUp.style.display = "none";
      }

      if (seta.style.display === "none") {
        seta.style.display = "block";
      } else if (seta.style.display === "block") {
        seta.style.display = "none";
      }
    });
  }

  static buttonOptions() {
    const buttonEdit = document.getElementById("edit-perfil");
    const buttonLogout = document.getElementById("logout");

    buttonEdit.addEventListener("click", () => {
      console.log("esse é o botão de editar");
    });

    buttonLogout.addEventListener("click", () => {
      console.log("esse é o botão de sair");
    });
  }

  static profileHeader(userName, userImg, userDscr) {
    const wrapperHeader = document.querySelector(".wrapper__header--img");
    const wrapperImg = document.querySelector(".wrapper__sub-header--img");
    const wrapperName = document.querySelector(
      ".wrapper__sub-header--username"
    );

    wrapperHeader.innerHTML = "";
    wrapperImg.innerHTML = "";
    wrapperName.innerHTML = "";
    const imgProfile = document.createElement("img");
    imgProfile.classList.add("");
    imgProfile.src = userImg;
    imgProfile.alt = "user-img";
    imgProfile.id = "header--button";

    const img = document.createElement("img");
    img.src = userImg;
    img.alt = "user-img";

    const name = document.createElement("p");
    const dscrp = document.createElement("p");

    console.log(userName);
    name.innerText = userName;
    name.classList.add("title-4");

    /* dscrp.innerText = userDscr */
    dscrp.classList.add("user-description");

    wrapperHeader.appendChild(imgProfile);
    wrapperImg.appendChild(img);
    wrapperName.appendChild(name);
  }

  static getInputsEditProfile() {
    const form = document.querySelector(".modal-crair-profile-form");
    const section = document.querySelector("#containerProfileModal");
    const arrayForm = Array.from(form.elements);

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      let obj = {
        usr_name: arrayForm[0].value,
        usr_image: arrayForm[1].value,
      };
      this.profileHeader(obj.usr_name, obj.usr_image);

      let api = await Api.editProfile(obj);

      section.classList.add("hidden");
    });
  }
}
