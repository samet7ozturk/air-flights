const express = require("express");
const router = express.Router();
const {
  getReservations,
  createReservation,
  deleteReservation,
} = require("../controllers/reservations");

router.get("/", getReservations);
router.post("/", createReservation);
router.delete("/:reservationId", deleteReservation);

module.exports = router;
