import axios from "axios";

// exporting an object containing methods we'll use for accessing the Random User Generator API

export default {
  getRandomEmployee: function () {
    return axios.get("https://randomuser.me/api/?results=30");
  },
};
