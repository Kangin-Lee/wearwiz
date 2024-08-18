import axios from "axios";

// const BASE_URL = "http://localhost:3000";
const BASE_URL = 'https://my-json-server.typicode.com/Kangin-Lee/wearwiz'

export const apiService = axios.create({
  baseURL: BASE_URL,
  maxContentLength: Infinity, // 또는 원하는 크기로 설정
});
