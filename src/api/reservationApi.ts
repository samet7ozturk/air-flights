import { InstanceAxios } from "./instanceAxios";
import { ApiUrl } from "./apiUrl";

export const fetchReservations = async () => {
  try {
    const response = await InstanceAxios.get(ApiUrl.GET_RESERVATIONS);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postReservations = async (body: any) => {
  try {
    const response = await InstanceAxios.post(ApiUrl.GET_RESERVATIONS, body);
    return response.data;
  } catch (error) {
    throw error;
  }
};
