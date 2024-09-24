import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchReservationsThunk } from "../store/thunks/reservationThunk";
import { FaRegTrashAlt } from "react-icons/fa";
import { deleteReservation } from "../api/reservationApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const MyFlights = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { reservations, loading, error } = useSelector(
    (state: RootState) => state.reservations
  );

  const handleDeleteReservation = async (id: string) => {
    toast.info("Deleting reservation...");
    try {
      await deleteReservation(id);
      await dispatch(fetchReservationsThunk());
      toast.success("Reservation deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete reservation!");
      throw error;
    }
  };

  useEffect(() => {
    dispatch(fetchReservationsThunk());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col items-center h-[100vh]">
      <ToastContainer position="top-center" />
      <div className="w-[90%] py-6 flex gap-8 font-bold">
        <Link to="/" className="border rounded-md px-4 py-2">
          Home Page
        </Link>
        <button className="border rounded-md px-4 py-2">Times</button>
        <button className="border rounded-md px-4 py-2">Stops</button>
        <button className="border rounded-md px-4 py-2">Airlines</button>
        <button className="border rounded-md px-4 py-2">Airports</button>
        <button className="border rounded-md px-4 py-2">Amenities</button>
      </div>
      <div className="bg-[#e7dcff] w-full py-12 flex flex-col items-center h-full overflow-x-hidden">
        <div className="w-[90%] flex flex-col gap-6">
          <div className="flex">
            <p>Sort by:</p>
            <select name="sort" className="bg-[#e7dcff] font-bold">
              <option value="Recommended">Recommended</option>
            </select>
          </div>
          {reservations.length > 0 ? (
            reservations.map((reservation) => (
              <div
                key={reservation._id}
                className="w-full flex shadow-md animate-slider1"
              >
                <div className="bg-white border p-4 rounded-md w-full flex justify-between">
                  <div className="flex flex-col w-[90%] text-lg gap-4 py-2">
                    <div className="text-2xl">
                      <p>7:40 AM - 9:12 AM</p>
                    </div>
                    <div className="flex justify-between">
                      <p>
                        <strong>Flight Number:</strong>
                        {reservation.flightNumber}
                      </p>
                      <p>
                        <strong>Passenger Name: </strong>
                        {reservation.passengerName}
                      </p>
                      <p>
                        <strong>Date: </strong>
                        {new Date(
                          reservation.departureDate
                        ).toLocaleDateString()}
                      </p>
                      <p>
                        <strong>Stops: </strong>
                        {reservation.stops}
                      </p>
                      <p>
                        <strong>Price: </strong>
                        {reservation.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end items-center w-[10%]">
                    <button
                      onClick={() => handleDeleteReservation(reservation._id)}
                    >
                      <FaRegTrashAlt className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No reservations found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyFlights;
