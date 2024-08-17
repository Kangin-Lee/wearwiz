import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const apiService = axios.create({
  baseURL: BASE_URL,
});
