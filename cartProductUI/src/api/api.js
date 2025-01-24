import axios from "axios";

const instanceProduct = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export { instanceProduct };
