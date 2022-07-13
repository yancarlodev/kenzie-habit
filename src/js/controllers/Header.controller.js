
export default class Header {

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

  static buttonCard() {
      const button = document.getElementById("header--button")
      const popUp = document.getElementById("wrapper__header--pop-up")
      const seta = document.querySelector(".container-seta")

      button.addEventListener("click", () => {
          seta.classList.toggle("hidden")
          popUp.classList.toggle("hidden")
      })
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

