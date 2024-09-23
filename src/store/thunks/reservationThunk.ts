import { AppDispatch } from "../store";
import { fetchReservations, postReservations } from "../../api/reservationApi";
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

export const bookFlightThunk = (flightNumber: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch(fetchReservationsStart());

    const today = new Date().toISOString().split("T")[0];
    const body = {
      flightNumber,
      passengerName: "Samet",
      date: today,
    };

    try {
      const data = await postReservations(body);
      console.log("Booking successful:", data);
      dispatch(fetchReservationsSuccess([data]));
    } catch (error) {
      dispatch(
        fetchReservationsFailure("Rezervasyon oluşturulurken bir hata oluştu.")
      );
    }
  };
};
