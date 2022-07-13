export default class Api {
  static url = "https://habits-kenzie.herokuapp.com/api/userLogin";
  static url_edit = "https://habits-kenzie.herokuapp.com/api/habits/";
  static token = JSON.parse(localStorage.getItem("@kenzie-habit:token"));
  static user = JSON.parse(localStorage.getItem("@kenzie-habit:user"));
  static headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${this.token}`,
  };
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
        localStorage.setItem(
          "@kenzie-habit:user",
          JSON.stringify(res.response)
        );
        localStorage.setItem("@kenzie-habit:token", JSON.stringify(res.token));
        return res;
      })
      .catch((err) => console.log(err));
  }
  static async createHabit(data) {
    return await fetch(this.url, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }
  static async habitEdit(data, habit_Id) {
    return await fetch(`${this.url_edit}${habit_Id}`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
  }
  static async habitComplete(habit_id) {
    return await fetch(`${this.url_edit}complete/:${habit_id}`, {
      method: "PATCH",
      headers: this.headers,
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
  }
  static async habitDelete(habit_id) {
    return await fetch(`${this.url_edit}${habit_id}`, {
      method: "DELETE",
      headers: this.headers,
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
  }
  static async habitReadAll() {
    return await fetch(`${this.url_edit}`, {
      method: "GET",
      headers: this.headers,
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
  }
}

console.log(Api.user)