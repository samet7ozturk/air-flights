import axios from "axios";

export const InstanceAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
