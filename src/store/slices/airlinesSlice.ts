import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Airline {
  iata: string;
  icao: string;
  nvls: string;
  publicName: string;
}

interface AirlinesState {
  airlines: Airline[];
  loading: boolean;
  error: string | null;
}

const initialState: AirlinesState = {
  airlines: [],
  loading: false,
  error: null,
};

const airlinesSlice = createSlice({
  name: "airlines",
  initialState,
  reducers: {
    fetchAirlinesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchAirlinesSuccess(state, action: PayloadAction<Airline[]>) {
      state.loading = false;
      state.airlines = action.payload;
    },
    fetchAirlinesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchAirlinesStart,
  fetchAirlinesSuccess,
  fetchAirlinesFailure,
} = airlinesSlice.actions;
export default airlinesSlice.reducer;
