import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { Flight } from "../store/slices/flightsSlice";
import Modal from "react-modal";
import modalStyles from "../styles/modal";
import { FaPlane, FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { postReservations } from "../api/reservationApi";
import {
  fetchReservationsFailure,
  fetchReservationsSuccess,
} from "../store/slices/reservationsSlice";
import { toast, ToastContainer } from "react-toastify";

const TicketDetails = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { flights, stopsFilter, sortOption, loading, error } = useSelector(
    (state: RootState) => state.flights
  );
  const { airlines } = useSelector((state: RootState) => state.airlines);

  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
  const [flightPrices, setFlightPrices] = useState<{ [key: string]: number }>(
    {}
  );
  const [availableFlights, setAvailableFlights] = useState<Flight[]>(flights);
  const [flightAirports, setFlightAirports] = useState<{
    [key: string]: string;
  }>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (flight: Flight) => {
    setSelectedFlight(flight);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedFlight(null);
    setIsModalOpen(false);
  };

  const bookFlight = async (
    flightNumber: number,
    stops: string,
    departureDate: Date,
    price: number
  ) => {
    try {
      const req = {
        flightNumber,
        passengerName: "Samet",
        stops,
        departureDate,
        price,
      };
      const data = await postReservations(req);
      dispatch(fetchReservationsSuccess([data]));
      toast.success("Reservation created successfully!");
    } catch (error) {
      dispatch(
        fetchReservationsFailure(
          "An error occurred while creating the reservation"
        )
      );
    }
    setAvailableFlights((prevFlights) =>
      prevFlights.filter((flight) => flight.flightNumber !== flightNumber)
    );
  };

  const filterFlights = availableFlights.filter((flight) => {
    const stopsCount = flight.route.destinations.length - 1;

    if (stopsFilter.includes("Nonstop") && stopsCount === 0) return true;
    if (stopsFilter.includes("1 stop") && stopsCount === 1) return true;
    if (stopsFilter.includes("2+ stops") && stopsCount >= 2) return true;

    return stopsFilter.length === 0;
  });

  const sortedFlights = [...filterFlights].sort((a, b) => {
    const priceA = flightPrices[a.flightNumber];
    const priceB = flightPrices[b.flightNumber];

    return sortOption === "lowest" ? priceA - priceB : priceB - priceA;
  });

  const getRandomPrice = () => {
    return Math.floor(Math.random() * (800 - 200 + 1)) + 200;
  };

  const getRandomAirport = useCallback(() => {
    if (airlines.length > 0) {
      const randomIndex = Math.floor(Math.random() * airlines.length);
      return airlines[randomIndex].publicName;
    }
    return "Unknown Airport";
  }, [airlines]);

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(":").map(Number);
    const isPM = hours >= 12;
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes} ${isPM ? "PM" : "AM"}`;
  };

  useEffect(() => {
    const prices: { [key: string]: number } = {};
    const airports: { [key: string]: string } = {};

    flights.forEach((flight) => {
      prices[flight.flightNumber] = getRandomPrice();
      airports[flight.flightNumber] = getRandomAirport();
    });

    setFlightPrices(prices);
    setFlightAirports(airports);
    setAvailableFlights(flights);
  }, [flights, getRandomAirport]);

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!flights || flights.length === 0) {
    return <div>Select airport and date</div>;
  }

  return (
    <div className="mb-6">
      <ToastContainer position="top-center" autoClose={3000} />
      {sortedFlights.map((flight, index) => {
        const stopsCount = flight.route.destinations.length - 1;
        const stopText =
          stopsCount === 0
            ? "Nonstop"
            : stopsCount === 1
            ? "1 stop"
            : `${stopsCount}+ stops`;

        const arrivalAirport =
          flight.route.destinations[flight.route.destinations.length - 1];

        const flightPrice = flightPrices[flight.flightNumber];

        return (
          <div
            key={index}
            className="relative flex flex-col bg-white rounded-xl rounded-bl-none p-6 mb-20 animate-slider1 hover:scale-115 transition-transform duration-300"
          >
            <div className="py-2">
              <p className="font-bold">Milano - Madrid</p>
            </div>

            <div className="flex justify-between items-center py-4">
              <div className="flex flex-col w-[10%]">
                <div className="flex items-center gap-2">
                  <FaPlaneDeparture />
                  <p>Departure</p>
                </div>
                <p className="font-bold text-lg">
                  {formatTime(flight.scheduleTime)}
                </p>
                <p>Airport: {flightAirports[flight.flightNumber]}</p>
              </div>

              <div className="w-[10%]">
                <hr className="border-none p-[2px] bg-gray-400 rounded-md" />
              </div>

              <div className="flex flex-col items-center">
                <p>{flight.prefixIATA}</p>
                <FaPlane className="text-[#4a0097]" />
                <p>1h 32m ({stopText})</p>
              </div>

              <div className="w-[10%]">
                <hr className="border-none p-[2px] bg-gray-400 rounded-md" />
              </div>

              <div className="flex flex-col w-[10%] justify-end">
                <div className="flex items-center gap-2">
                  <FaPlaneArrival />
                  <p>Arrival</p>
                </div>
                <p className="font-bold text-lg">
                  {formatTime(flight.scheduleTime)}
                </p>
                <p>Airport: {arrivalAirport}</p>
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <p className="font-bold text-[#4a0097]">
                  Price: {flightPrice}$
                </p>
                <p>Round Trip</p>
              </div>
              <button
                className="absolute right-0 bottom-0 bg-[#4a0097] text-white rounded-tl-lg px-10 py-4"
                onClick={() =>
                  bookFlight(
                    flight.flightNumber,
                    stopText,
                    new Date(flight.scheduleDate),
                    flightPrice
                  )
                }
              >
                <p>Book Flight</p>
              </button>
            </div>

            <div className="absolute bottom-[-48px] left-0 w-fit text-[#4a0097]">
              <p
                className="bg-[#e6e0eb] rounded-b-lg p-3 underline underline-offset-2 hover:cursor-pointer"
                onClick={() => openModal({ ...flight, price: flightPrice })}
              >
                Check the details
              </p>
            </div>
          </div>
        );
      })}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Flight Details"
      >
        {selectedFlight && (
          <div className="text-lg">
            <div className="absolute right-3 top-3 text-[#4a0097]">
              <button onClick={closeModal}>
                <IoIosCloseCircle className="w-8 h-8" />
              </button>
            </div>
            <div className="text-center pb-6">
              <p className="font-bold text-2xl text-[#4a0097]">
                Flight Details
              </p>
            </div>
            <div className="flex flex-col gap-4 border-[#4a0097]">
              <p className="border-b-2">
                <strong>Flight Number:</strong> {selectedFlight.flightName}
              </p>
              <p className="border-b-2">
                <strong>Departure Date:</strong> {selectedFlight.scheduleDate}
              </p>
              <p className="border-b-2">
                <strong>Departure Time:</strong>{" "}
                {formatTime(selectedFlight.scheduleTime)}
              </p>
              <p className="border-b-2">
                <strong>Arrival:</strong> {selectedFlight.route.destinations[0]}
              </p>
              <p className="border-b-2">
                <strong>Price:</strong> {selectedFlight.price}$
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default TicketDetails;
