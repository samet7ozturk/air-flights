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
      console.log("Fetched Reservations Data: ", data);
      dispatch(fetchReservationsSuccess(data));
    } catch (error) {
      dispatch(
        fetchReservationsFailure(
          "Rezervasyon verilerini getirirken bir hata oluştu."
        )
      );
    }
  };
};
