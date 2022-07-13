import Api from "../models/Api.model.js";

export default class Header {

  static buttonCard() {
    const button = document.getElementById("header--button")
    const popUp = document.getElementById("wrapper__header--pop-up")
    const seta = document.querySelector(".container-seta")

    button.addEventListener("click", () => {
        seta.classList.toggle("hidden")
        popUp.classList.toggle("hidden")
    })
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

  name.innerText = userName;
  name.classList.add("title-4");

  dscrp.classList.add("user-description");

  wrapperHeader.appendChild(imgProfile);
  wrapperImg.appendChild(img);
  wrapperName.appendChild(name);

static logout() {
    const buttonLogout = document.getElementById("logout")

    buttonLogout.addEventListener("click", () => {
            location.href = "../src/pages/index.html"
            localStorage.removeItem("@kenzie-habit:user")
            localStorage.removeItem("@kenzie-habit:token")
    })

  static async userData() {
    const response = await fetch("https://habits-kenzie.herokuapp.com/api/habits", {
        "method": "GET",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.token}`
        },
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
    })
    .catch((error) => error)
    return response
}

static editProfile() {
  const buttonEdit = document.getElementById("edit-perfil")
  const modalEdit = document.querySelector("#containerProfileModal")
  const buttonModalX = document.querySelector("#closeButtonEditProfile")

  buttonEdit.addEventListener("click", (e) => {
    e.preventDefault()
    modalEdit.classList.toggle("hidden")
  })

  buttonModalX.addEventListener("click", (e) => {
    e.preventDefault()
    modalEdit.classList.toggle("hidden")
  })
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

