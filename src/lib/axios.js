import axios from "axios";
import apiUrl from "../constants/constant";

const api = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
});

export default api;
