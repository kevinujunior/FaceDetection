import axios from "axios";

export const postNewAuth = (data) => {
  const url = "http://localhost:8000/rest_auth/registration/";

  const body = JSON.stringify(data);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .post(url, body, config)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const postExistingAuth = (data) => {
  const url = "http://localhost:8000/rest_auth/login/";

  const body = JSON.stringify(data);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .post(url, body, config)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
