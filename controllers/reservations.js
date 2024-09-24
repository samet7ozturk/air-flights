const Reservation = require("../models/Reservation");
const axios = require("axios");

const createReservation = async (req, res) => {
  try {
    console.log("Query Parameters: ", req.query);
    const { flightNumber, passengerName, stops, departureDate, price } =
      req.body;
    const date2 = new Date(departureDate);
    const reservation = new Reservation({
      flightNumber,
      passengerName,
      stops,
      departureDate,
      price,
      date: date2,
    });
    await reservation.save();
    res.status(201).json(reservation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error saving reservation" });
  }
};

const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching reservations" });
  }
};

const deleteReservation = async (req, res) => {
  try {
    const { reservationId } = req.params;
    const reservation = await Reservation.findByIdAndDelete(reservationId);
    if (!reservation) {
      return res.status(404).json({ error: "Reservation not found" });
    }
    res.status(200).json({ message: "Reservation deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting reservation" });
  }
};

module.exports = { createReservation, getReservations, deleteReservation };
