import { InstanceAxios } from "./instanceAxios";
import { ApiUrl } from "./apiUrl";

export const fetchFlights = async (
  page: number = 0,
  includeDelays: boolean = false
) => {
  try {
    const response = await InstanceAxios.get(ApiUrl.GET_FLIGHTS, {
      params: {
        page,
        includedelays: includeDelays,
        sort: "+scheduleTime",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching flights", error);
    throw error;
  }
};
