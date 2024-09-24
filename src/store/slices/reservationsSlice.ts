import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Reservation {
  _id: string;
  flightNumber: number;
  passengerName: string;
  departureDate: string;
  stops: string;
  price: number;
}

interface ReservationsState {
  reservations: Reservation[];
  loading: boolean;
  error: string | null;
}

const initialState: ReservationsState = {
  reservations: [],
  loading: false,
  error: null,
};

const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    fetchReservationsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchReservationsSuccess(state, action: PayloadAction<Reservation[]>) {
      state.loading = false;
      state.reservations = action.payload;
    },
    fetchReservationsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchReservationsStart,
  fetchReservationsSuccess,
  fetchReservationsFailure,
} = reservationsSlice.actions;
export default reservationsSlice.reducer;
