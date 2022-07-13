export class LoginController {
  static getInputsLogin() {
    const form = document.querySelector("#loginForm");
    const arrayForm = Array.from(form.elements);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let obj = {
        email: arrayForm[0].value,
        password: arrayForm[1].value,
      };
    });
  }
}
