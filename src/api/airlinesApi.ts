import { InstanceAxios } from "./instanceAxios";
import { ApiUrl } from "./apiUrl";

export const fetchAirlines = async (page: number = 0, sort: string = "") => {
  try {
    const params: {
      page: number;
      sort?: string;
    } = {
      page: page,
    };

    if (sort) {
      params.sort = sort;
    }

    const response = await InstanceAxios.get(ApiUrl.GET_AIRLINES, {
      params,
    });
    return response.data.airlines;
  } catch (error) {
    throw error;
  }
};
