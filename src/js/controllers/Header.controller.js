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

    static buttonOptions() {
        const buttonEdit = document.getElementById("edit-perfil")
        const buttonLogout = document.getElementById("logout")
    
        buttonEdit.addEventListener("click", () => {
            console.log("esse é o botão de editar")
        })

        buttonLogout.addEventListener("click", () => {
            console.log("esse é o botão de sair")
        })
    }

    static profileHeader(userName, userImg, userDscr) {
        const wrapperHeader = document.querySelector(".header--img")
        const wrapperImg = document.querySelector(".wrapper__sub-header--img")
        const wrapperName = document.querySelector(".wrapper__sub-header--username")
        
        const imgProfile = document.createElement("img")
        imgProfile.src = userImg
        imgProfile.alt = "user-img"

        const img = document.createElement("img")
        img.src = userImg
        img.alt = "user-img"
        
        const name = document.createElement("p")
        const dscrp = document.createElement("p")

        name.innerText = userName
        name.classList.add("user-name")

        dscrp.innerText = userDscr
        dscrp.classList.add("user-description")

        wrapperHeader.appendChild(imgProfile)
        wrapperImg.appendChild(img)
        wrapperName.append(name, dscrp)

    }

    static logout() {
        const buttonLogout = document.getElementById("logout")

        buttonLogout.addEventListener("click", event => {
            console.log("teste")
        })
    }
}


