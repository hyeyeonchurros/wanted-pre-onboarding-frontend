import axios from "axios";

export const instance = axios.create({
  baseURL: "https://pre-onboarding-selection-task.shop/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  async function (config) {
    const accessToken = localStorage.getItem("access_token");
    // eslint-disable-next-line no-unused-expressions
    accessToken
      ? (config.headers = {
          Authorization: `Bearer ${accessToken}`,
        })
      : null;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
