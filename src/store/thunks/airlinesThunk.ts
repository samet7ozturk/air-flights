import { AppDispatch } from "../store";
import {
  fetchAirlinesStart,
  fetchAirlinesSuccess,
  fetchAirlinesFailure,
} from "../slices/airlinesSlice";
import { fetchAirlines } from "../../api/airlinesApi";

export const fetchAirlinesThunk = (page: number = 0, sort: string = "") => {
  return async (dispatch: AppDispatch) => {
    dispatch(fetchAirlinesStart());
    try {
      const data = await fetchAirlines(page, sort);
      dispatch(fetchAirlinesSuccess(data));
    } catch (error) {
      dispatch(
        fetchAirlinesFailure("There was an error fetching airport data(Thunk)")
      );
    }
  };
};
