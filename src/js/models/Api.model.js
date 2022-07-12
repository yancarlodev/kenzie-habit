export default class Api {
    static url = "https://habits-kenzie.herokuapp.com/api/userLogin";
  
    static async loginUser(loginData) {
      return await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      })
        .then((res) => res.json())
        .then((res) => {
          localStorage.setItem("@kenzie-habit:user", JSON.stringify(res.response));
          localStorage.setItem("@kenzie-habit:token", JSON.stringify(res.token));
          return res;
        })
        .catch((err) => console.log(err));
    }
  }
  
