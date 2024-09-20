import { AppDispatch } from "../store";
import {
  fetchFlightsStart,
  fetchFlightsSuccess,
  fetchFlightsFailure,
} from "../slices/flightsSlice";
import { fetchFlights } from "../../api/flightsApi";

export const fetchFlightsThunk = (
  page: number = 0,
  includeDelays: boolean = false,
  fromScheduleDate: string = "",
  toScheduleDate: string = ""
) => {
  return async (dispatch: AppDispatch) => {
    dispatch(fetchFlightsStart());
    try {
      const data = await fetchFlights(
        page,
        includeDelays,
        fromScheduleDate,
        toScheduleDate
      );
      dispatch(fetchFlightsSuccess(data));
    } catch (error) {
      dispatch(
        fetchFlightsFailure(
          "Uçuş verilerini getirirken bir hata oluştu(Thunk)."
        )
      );
    }
  };
};
