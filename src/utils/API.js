import axios from "axios";

// fetches all users at random
const API = {
  getEmployees: function () {
    return axios.get("https://randomuser.me/api/?results=50");
  },
};

export default API;
