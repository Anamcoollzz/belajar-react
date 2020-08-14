import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/";

const endpoint = {
  getUsers() {
    return new Promise((resolve, reject) => {
      axios
        .get("users")
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  storeUser(data) {
    return new Promise((resolve, reject) => {
      axios
        .post("users", data)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  updateUser(id, data) {
    return new Promise((resolve, reject) => {
      axios
        .put("users/" + id, data)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  deleteUser(id) {
    return new Promise((resolve, reject) => {
      axios
        .delete("users/" + id)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

export default endpoint;
