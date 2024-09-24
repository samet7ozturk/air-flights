const express = require("express");
const router = express.Router();
const { getAirlines, getAirlineByCode } = require("../controllers/airlines");

router.get("/", getAirlines);
router.get("/:iataCode", getAirlineByCode);

module.exports = router;
