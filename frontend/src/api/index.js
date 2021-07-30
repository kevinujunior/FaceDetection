import axios from "axios";

export const responseGoogle = async (response, history) => {
  // console.log(response);
  const res = await axios.post(
    "https://mamun-facedetector.herokuapp.com/rest_auth/google/",
    {
      access_token: response.accessToken,
    }
  );
  authenticate(res.data, () => {
    console.log("Stored key locally");
  });
  history.push("/");
  window.location.reload();
};

export const loginFb = async (response, history) => {
  const res = await axios.post(
    "https://mamun-facedetector.herokuapp.com/rest_auth/facebook/",
    {
      access_token: response.accessToken,
    }
  );
  console.log(res.data);
  authenticate(res.data, () => {
    console.log("Stored key locally");
  });
  history.push("/");
  window.location.reload();
};

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
