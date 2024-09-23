import { InstanceAxios } from "./instanceAxios";
import { ApiUrl } from "./apiUrl";

export const fetchFlights = async (
  page: number = 0,
  includeDelays: boolean = false,
  fromScheduleDate: string = "",
  toScheduleDate: string = ""
) => {
  try {
    const params: {
      page: number;
      includeDelays: boolean;
      fromScheduleDate: string;
      toScheduleDate?: string;
    } = {
      page,
      includeDelays,
      fromScheduleDate,
    };

    if (toScheduleDate) {
      params.toScheduleDate = toScheduleDate;
    }

    const response = await InstanceAxios.get(ApiUrl.GET_FLIGHTS, {
      params,
    });
    return response.data.flights;
  } catch (error) {
    throw error;
  }
};
