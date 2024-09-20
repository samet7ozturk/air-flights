import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchAirlinesThunk } from "../store/thunks/airlinesThunk";

export default function FilterOptions() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAirlinesThunk());
  }, [dispatch]);

  const { airlines, loading, error } = useSelector(
    (state: RootState) => state.airlines
  );
  console.log("Filter Options Component: ", airlines);

  const [selectedTime, setSelectedTime] = useState("morning");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="font-bold">Sort by:</p>
        <select className="w-full rounded-md p-1">
          <option value="lowest">Lowest Price</option>
          <option value="highest">Highest Price</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <p className="font-bold">Arrival Time</p>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="arrivalTime"
            value="morning"
            checked={selectedTime === "morning"}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="appearance-none h-4 w-4 border-2 border-gray-300 rounded-full checked:bg-[#4a0097] checked:border-transparent"
          />
          5:00 AM - 11:59 AM
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="arrivalTime"
            value="afternoon"
            checked={selectedTime === "afternoon"}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="appearance-none h-4 w-4 border-2 border-gray-300 rounded-full checked:bg-[#4a0097] checked:border-transparent"
          />
          12:00 PM - 4:59 PM
        </label>
      </div>

      <div className="flex flex-col gap-2">
        <p className="font-bold">Stops</p>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="agree"
            className="appearance-none h-4 w-4 border-2 border-gray-300 rounded-full checked:bg-[#4a0097] checked:border-transparent"
          />
          Nonstop
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="agree"
            className="appearance-none h-4 w-4 border-2 border-gray-300 rounded-full checked:bg-[#4a0097] checked:border-transparent"
          />
          1 Stop
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="agree"
            className="appearance-none h-4 w-4 border-2 border-gray-300 rounded-full checked:bg-[#4a0097] checked:border-transparent"
          />
          2+ Stops
        </label>
      </div>

      <div className="flex flex-col gap-2 max-h-48">
        <p className="font-bold">Airlines Included</p>
        <div className="overflow-y-auto">
          {airlines.map((airline) => (
            <label key={airline.iata} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="appearance-none h-4 w-4 border-2 border-gray-300 rounded-full checked:bg-[#4a0097] checked:border-transparent"
              />
              {airline.publicName}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
