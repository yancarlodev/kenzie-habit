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

static profileHeader(userName, userImg) {
    const wrapperHeader = document.querySelector(".wrapper__header--img")
    const wrapperImg = document.querySelector(".wrapper__sub-header--img")
    const wrapperName = document.querySelector(".wrapper__sub-header--username")
    
    wrapperHeader.innerHTML = ""
    wrapperImg.innerHTML = ""
    wrapperName.innerHTML = ""
    const imgProfile = document.createElement("img")
    imgProfile.src = userImg
    imgProfile.alt = "user-img"
    imgProfile.id = "header--button"

    const img = document.createElement("img")
    img.src = userImg
    img.alt = "user-img"
    
    const name = document.createElement("p")
    const dscrp = document.createElement("p")

    console.log(userName)
    name.innerText = "userName"
    name.classList.add("user-name")

    /* dscrp.innerText = userDscr */
    dscrp.classList.add("user-description")

    wrapperHeader.appendChild(imgProfile)
    wrapperImg.appendChild(img)
    wrapperName.appendChild(name)

}

static logout() {
    const buttonLogout = document.getElementById("logout")

    buttonLogout.addEventListener("click", () => {
            location.href = "../src/pages/index.html"
            localStorage.removeItem("@kenzie-habit:user")
            localStorage.removeItem("@kenzie-habit:token")
    })
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

}


