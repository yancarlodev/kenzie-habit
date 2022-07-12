import LoginRequest from "../models/Login.requestl.js";

class LoginController {
  static controllerLogin() {
    const buttonLogin = document.querySelector(".button-login");

    buttonLogin.addEventListener("click", async (e) => {
      e.preventDefault();
      const dados = {};
      const formValue = [...e.target.form];
      formValue.forEach((input) => {
        if (input.value !== "") {
          dados[input.name] = input.value;
        }
      });
     const request = await LoginRequest.loginUser(dados)
     if(request.token !== undefined){
        location.href = "../../pages/homepage.html"
     }else{
        alert(request.message)
      }
    });
  }
}
LoginController.controllerLogin();
