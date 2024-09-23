import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchReservationsThunk } from "../store/thunks/reservationThunk";

const MyFlights = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { reservations, loading, error } = useSelector(
    (state: RootState) => state.reservations
  );

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
    <div className="flex flex-col items-center">
      <div className="w-[90%] py-6 flex gap-8 font-bold">
        <button className="border rounded-md px-4 py-2">Times</button>
        <button className="border rounded-md px-4 py-2">Stops</button>
        <button className="border rounded-md px-4 py-2">Airlines</button>
        <button className="border rounded-md px-4 py-2">Airports</button>
        <button className="border rounded-md px-4 py-2">Amenities</button>
      </div>
      <div className="bg-[#e7dcff] w-full py-12 flex flex-col justify-center items-center">
        <div className="w-[90%] flex flex-col gap-6">
          <div className="flex">
            <p>Sort by:</p>
            <select name="sort" className="bg-[#e7dcff] font-bold">
              <option value="Recommended">Recommended</option>
            </select>
          </div>
          {reservations.length > 0 ? (
            reservations.map((reservation) => (
              <div key={reservation._id} className="w-full flex shadow-md">
                <div className="bg-white border p-4 rounded-md w-full">
                  <div>
                    <p>7:40 AM - 9:12 AM</p>
                  </div>
                  <div className="flex justify-between">
                    <p>
                      <strong>Flight Number:</strong> {reservation.flightNumber}
                    </p>
                    <p>
                      <strong>Passenger Name: </strong>
                      {reservation.passengerName}
                    </p>
                    <p>
                      <strong>Date: </strong>
                      {new Date(reservation.date).toLocaleDateString()}
                    </p>
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
