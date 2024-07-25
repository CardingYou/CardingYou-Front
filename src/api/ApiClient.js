import axios from "axios";

export const apiClient = axios.create({
    // env에 SERVER_HOST 이름으로 정의하고 import해서 사용
  baseURL: import.meta.env.VITE_APP_SERVER_HOST,
});