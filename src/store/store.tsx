import { configureStore } from "@reduxjs/toolkit";
import flightsReducer from "./slices/flightsSlice";
import airlinesReducer from "./slices/airlinesSlice";
import reservationsSlice from "./slices/reservationsSlice";

export const store = configureStore({
  reducer: {
    flights: flightsReducer,
    airlines: airlinesReducer,
    reservations: reservationsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
