import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Flight {
  lastUpdatedAt: string;
  actualLandingTime: string;
  aircraftType: {
    iataMain: string;
    iataSub: string;
  };
  baggageClaim: {
    belts: string[];
  };
  codeshares: {
    codeshares: string[];
  };
  estimatedLandingTime: string;
  expectedTimeOnBelt: string;
  flightDirection: string;
  flightName: string;
  flightNumber: number;
  id: string;
  isOperationalFlight: boolean;
  mainFlight: string;
  prefixIATA: string;
  prefixICAO: string;
  airlineCode: number;
  publicFlightState: {
    flightStates: string[];
  };
  route: {
    destinations: string[];
    eu: string;
    visa: boolean;
  };
  scheduleDateTime: string;
  scheduleDate: string;
  scheduleTime: string;
  serviceType: string;
  terminal: number;
  schemaVersion: string;
  price: number;
}

interface FlightsState {
  flights: Flight[];
  stopsFilter: string[];
  sortOption: string;
  loading: boolean;
  error: string | null;
}

const initialState: FlightsState = {
  flights: [],
  stopsFilter: [],
  sortOption: "lowest",
  loading: false,
  error: null,
};

const flightsSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    fetchFlightsStart(state) {
      state.loading = true;
      state.error = null;
      state.flights = [];
    },
    fetchFlightsSuccess(state, action: PayloadAction<Flight[]>) {
      state.loading = false;
      state.flights = action.payload;
    },
    fetchFlightsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    setStopsFilter(state, action: PayloadAction<string[]>) {
      state.stopsFilter = action.payload;
    },
    setSortOption(state, action: PayloadAction<string>) {
      state.sortOption = action.payload;
    },
  },
});

export const {
  fetchFlightsStart,
  fetchFlightsSuccess,
  fetchFlightsFailure,
  setStopsFilter,
  setSortOption,
} = flightsSlice.actions;
export default flightsSlice.reducer;
