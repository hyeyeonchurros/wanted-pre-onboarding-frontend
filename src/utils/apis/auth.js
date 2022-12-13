import { instance } from "./customAxios";

export const signUp = async ({ email, password }) => {
  const data = await instance.post(`/auth/signup`, { email, password });
  return data.data;
};

export const login = async ({ email, password }) => {
  const data = await instance.post(`/auth/signin`, { email, password });
  return data.data;
};
