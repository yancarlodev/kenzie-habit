export default class Api {
  static url = "https://habits-kenzie.herokuapp.com/api/userLogin";
  static token = JSON.parse(localStorage.getItem("@kenzie-blog:token"));
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
      .catch(err => console.log(err))
  }

  static getHabitById(id) {
    const apiURL = `https://habits-kenzie.herokuapp.com/api/habits/${id}`

    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('@kenzie-habit:token'))}`,
      }
    }

    const apiResponse = fetch(apiURL, options).then(response => response.json()).catch(error => error)

    return apiResponse
  }

  static async updateHabitStatus(id, status) {
    const apiURL = `https://habits-kenzie.herokuapp.com/api/habits/${id}`

    const options = {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('@kenzie-habit:token'))}`,
      },
      body: JSON.stringify(status)
    }

    const apiResponse = await fetch(apiURL, options).then(res => res.json()).catch(error => error)
    console.log(apiResponse)
    return apiResponse
  }
}