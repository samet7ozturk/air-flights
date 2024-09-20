import axios from "axios";

export const InstanceAxios = axios.create({
  baseURL: "http://localhost:5555/api",
});
