import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Flight } from "../store/slices/flightsSlice";
import Modal from "react-modal";
import modalStyles from "../styles/modal";
import { FaPlane, FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";

const TicketDetails = () => {
  const { flights, loading, error } = useSelector(
    (state: RootState) => state.flights
  );

  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (flight: Flight) => {
    setSelectedFlight(flight);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedFlight(null);
    setIsModalOpen(false);
  };

  const bookFlight = async (flightNumber: number) => {
    const today = new Date().toISOString().split("T")[0];
    const body = {
      flightNumber,
      passengerName: "Samet",
      date: today,
    };

    try {
      const response = await axios.post(
        "http://localhost:5555/api/reservations",
        body
      );
      console.log("Booking successful:", response.data);
    } catch (error) {
      console.error("Error booking flight:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!flights || flights.length === 0) {
    return <div>Havaalanı ve tarih seçin</div>;
  }

  return (
    <div className="mb-6">
      {flights.map((flight, index) => {
        const stopsCount = flight.route.destinations.length - 1;
        const stopText =
          stopsCount === 0
            ? "Nonstop"
            : stopsCount === 1
            ? "1 stop"
            : `${stopsCount}+ stops`;

        const arrivalAirport =
          flight.route.destinations[flight.route.destinations.length - 1];

        return (
          <div
            key={index}
            className="relative flex flex-col bg-white rounded-xl rounded-bl-none p-6 mb-20"
          >
            <div>
              <p className="font-bold">Milano - Madrid</p>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <div>
                  <FaPlaneDeparture />
                  <p>Departure</p>
                </div>
                <p className="font-bold">7:30 AM</p>
                <p>Airport: MXP</p>
              </div>

              <div className="w-[10%]">
                <hr className="border-none p-[2px] bg-gray-400 rounded-md" />
              </div>

              <div className="flex flex-col items-center">
                <p>{flight.prefixIATA}</p>
                <FaPlane className="text-[#4a0097]" />
                <p>{stopText}</p>
              </div>

              <div className="w-[10%]">
                <hr className="border-none p-[2px] bg-gray-400 rounded-md" />
              </div>

              <div>
                <div>
                  <FaPlaneArrival />
                  <p>Arrival</p>
                </div>
                <p className="font-bold">{flight.estimatedLandingTime}</p>
                <p>Airport: {arrivalAirport}</p>
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <p className="font-bold text-[#4a0097]">Price: $200</p>
                <p>Round Trip</p>
              </div>
              <button
                className="absolute right-0 bottom-0 bg-[#4a0097] text-white rounded-tl-lg px-10 py-4"
                onClick={() => bookFlight(flight.flightNumber)}
              >
                <p>Book Flight</p>
              </button>
            </div>

            <div className="absolute bottom-[-48px] left-0 w-fit text-[#4a0097]">
              <p
                className="bg-[#e6e0eb] rounded-b-lg p-3 underline underline-offset-2 hover:cursor-pointer"
                onClick={() => openModal(flight)}
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
          <div>
            <h2>Flight Details</h2>
            <p>Flight Number: {selectedFlight.flightNumber}</p>
            <p>Departure: {selectedFlight.scheduleDateTime}</p>
            <p>Arrival: {selectedFlight.estimatedLandingTime}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default TicketDetails;
