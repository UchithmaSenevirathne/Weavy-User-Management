import axios from "axios";

const API_URL = process.env.REACT_APP_WEAVY_API;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_WEAVY_API_KEY}`,
    "Content-Type": "application/json",
  },
});

export default api;
