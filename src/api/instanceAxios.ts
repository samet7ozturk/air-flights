import axios from "axios";

export const InstanceAxios = axios.create({
  baseURL: "https://api.schiphol.nl/public-flights",
  headers: {
    resourceversion: "v4",
    app_id: "431c6a6b",
    app_key: "682bf9a146fc1b546e31fa6a4d64c2a7",
  },
});
