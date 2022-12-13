import { instance } from "./customAxios";

export const createTodo = async ({ todo }) => {
  await instance.post(`/todos`, { todo });
};

export const getTodos = async () => {
  return (await instance.get("/todos")).data;
};

export const updateTodo = async (id, { todo, isCompleted }) => {
  const data = await instance.put(`/todos/${id}`, { todo, isCompleted });
  return data;
};

export const deleteTodo = async (id) => {
  await instance.delete(`/todos/${id}`);
};
