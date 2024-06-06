const URL = "https://665ecc2c1e9017dc16f17042.mockapi.io/api/";

import axios from "axios";

const booksInstance = axios.create({
  baseURL: "https://665ecc2c1e9017dc16f17042.mockapi.io/api/adverts",
});

export const requestFetchBooks = async () => {
  const { data } = await booksInstance.get("/");
  return data;
};

export const requestAddBooks = async (body) => {
  const { data } = await booksInstance.post("/", body);
  return data;
};
export const requestDeleteBook = async (id) => {
  const { data } = await booksInstance.delete(`/${id}`);
  return data;
};