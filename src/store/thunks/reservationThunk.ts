import { AppDispatch } from "../store";
import { fetchReservations } from "../../api/reservationApi";
import {
  fetchReservationsFailure,
  fetchReservationsStart,
  fetchReservationsSuccess,
} from "../slices/reservationsSlice";

export const fetchReservationsThunk = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(fetchReservationsStart());
    try {
      const data = await fetchReservations();
      dispatch(fetchReservationsSuccess(data));
    } catch (error) {
      dispatch(
        fetchReservationsFailure(
          "An error occurred while fetching the reservation data"
        )
      );
    }
  };
};
