import { configureStore } from "@reduxjs/toolkit";
import flightsReducer from "./slices/flightsSlice";
import airlinesReducer from "./slices/airlinesSlice";

export const store = configureStore({
  reducer: {
    flights: flightsReducer,
    airlines: airlinesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
