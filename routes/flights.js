const express = require("express");
const router = express.Router();
const { getFlights } = require("../controllers/flights");

router.get("/", getFlights);

module.exports = router;
