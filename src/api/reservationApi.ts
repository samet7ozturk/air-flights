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
    const response = await InstanceAxios.post(ApiUrl.POST_RESERVATIONS, body);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteReservation = async (id: string) => {
  try {
    const response = await InstanceAxios.delete(
      ApiUrl.DELETE_RESERVATIONS.replace("{id}", id)
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
