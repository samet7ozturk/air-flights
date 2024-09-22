import { InstanceAxios } from "./instanceAxios";
import { ApiUrl } from "./apiUrl";

export const fetchReservations = async () => {
  try {
    const response = await InstanceAxios.get(ApiUrl.GET_RESERVATIONS);
    return response.data;
  } catch (error) {
    console.error("Error fetching reservations", error);
    throw error;
  }
};
