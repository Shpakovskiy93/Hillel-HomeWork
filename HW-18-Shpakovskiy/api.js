const API_URL = "https://reqres.in/api";

export const checkUserCredentials = (login, password) => {
  const requestBody = {
    email: login,
    password: password,
  };

  return fetch(`${API_URL}/login`, {
    body: JSON.stringify(requestBody),
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
  }).then(e => {
      if(e.status >= 400) {
          throw e;
      }
      return e
  }).then(e => e.json());
};

export const getUserList = (page = 1) => {
  return fetch(`${API_URL}/users?page=${page}`).then((e) => e.json());
};
