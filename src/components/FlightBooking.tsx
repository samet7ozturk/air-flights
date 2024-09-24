import { useState } from "react";
import { FaPlane, FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchFlightsThunk } from "../store/thunks/flightsThunk";
import Pagination from "../util/Pagination";

const FlightBooking = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.flights);

  const [selectedOption, setSelectedOption] = useState<
    "round-trip" | "one-way"
  >("round-trip");

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handleSearchFlights = () => {
    dispatch(
      fetchFlightsThunk(currentPage, false, fromScheduleDate, returnDate)
    );
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    dispatch(fetchFlightsThunk(page, false, fromScheduleDate, returnDate));
  };

  const [fromScheduleDate, setFromScheduleDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [returnDate, setReturnDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const today = new Date().toISOString().split("T")[0];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-white flex flex-col p-6 rounded-md">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <FaPlane />
          <h2 className="text-lg font-semibold">BOOK YOUR FLIGHT</h2>
        </div>
        <div className="flex">
          <button
            className={`rounded-l-full px-4 py-2 ${
              selectedOption === "round-trip"
                ? "bg-[#4a0097] text-white"
                : "bg-[#e6e0eb] text-black"
            }`}
            onClick={() => setSelectedOption("round-trip")}
          >
            Round trip
          </button>
          <button
            className={`rounded-r-full px-4 py-2 ${
              selectedOption === "one-way"
                ? "bg-[#4a0097] text-white"
                : "bg-[#e6e0eb] text-black"
            }`}
            onClick={() => setSelectedOption("one-way")}
          >
            One way
          </button>
        </div>
      </div>

      <div className="flex mb-4 gap-4">
        <div className="flex gap-1 w-full">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="From"
              className="w-full rounded-l-full pl-10 py-2 border-2 border-[#e0e0e0]"
            />
            <FaPlaneDeparture className="absolute top-1/2 transform -translate-y-1/2 left-2 text-[#4a0097] h-6 w-6" />
          </div>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="To"
              className="w-full rounded-r-full pl-10 py-2 border-2 border-[#e0e0e0]"
            />
            <FaPlaneArrival className="absolute top-1/2 transform -translate-y-1/2 left-2 text-[#4a0097] h-6 w-6" />
          </div>
        </div>

        <div className="flex gap-1 w-full">
          <div className="relative w-full">
            <input
              type="date"
              value={fromScheduleDate}
              min={today}
              onChange={(e) => setFromScheduleDate(e.target.value)}
              className="w-full rounded-l-full pl-10 py-2 border-2 border-[#e0e0e0]"
            />
            <IoMdCalendar className="absolute top-1/2 transform -translate-y-1/2 left-2 text-[#4a0097] h-6 w-6" />
          </div>
          <div className="relative w-full">
            <input
              type="date"
              value={returnDate}
              min={today}
              onChange={(e) => setReturnDate(e.target.value)}
              disabled={selectedOption === "one-way"}
              className={`w-full rounded-r-full pl-10 py-2 border-2 border-[#e0e0e0] ${
                selectedOption === "one-way"
                  ? "opacity-20 cursor-not-allowed"
                  : ""
              }`}
            />
            <IoMdCalendar
              className={`absolute top-1/2 transform -translate-y-1/2 left-2 text-[#4a0097] h-6 w-6 ${
                selectedOption === "one-way" ? "opacity-20" : ""
              }`}
            />
          </div>
        </div>
      </div>

      <div>
        <button
          onClick={handleSearchFlights}
          className="rounded-md bg-[#4a0097] text-white px-4 py-2"
        >
          Show flights
        </button>
      </div>
      <div className="flex justify-end">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default FlightBooking;
