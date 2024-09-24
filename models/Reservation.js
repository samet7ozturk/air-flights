const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  flightNumber: { type: Number, required: true },
  passengerName: { type: String, required: true },
  stops: { type: String, required: true },
  departureDate: { type: Date, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Reservation", ReservationSchema);
