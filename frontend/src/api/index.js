import axios from "axios";

export const postNewAuth = (data, history) => {
  const url =
    "https://mamun-facedetector.herokuapp.com/rest_auth/registration/";

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
      authenticate(response.data, () => {
        console.log("Stored key locally");
      });
      history.push("/");
      window.location.reload();
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const postExistingAuth = (data, history) => {
  const url = "https://mamun-facedetector.herokuapp.com/rest_auth/login/";

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
      authenticate(response.data, () => {
        console.log("Stored key locally");
      });
      history.push("/");
      window.location.reload();
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const signout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("key");
    axios
      .get("https://mamun-facedetector.herokuapp.com/rest_auth/logout/")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
};

const authenticate = (data, next) => {
  if (typeof window != undefined) {
    localStorage.setItem("key", JSON.stringify(data));
    next();
  }
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("key")) {
    return JSON.parse(localStorage.getItem("key"));
  } else {
    return false;
  }
};
