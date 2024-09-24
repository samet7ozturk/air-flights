const axios = require("axios");

const getAirlines = async (req, res) => {
  try {
    // Gelen sorgu parametrelerini logla
    console.log("Query Parameters: ", req.query);

    const { page = 0, sort = "+iata" } = req.query;

    const response = await axios.get(
      "https://api.schiphol.nl/public-flights/airlines",
      {
        headers: {
          ResourceVersion: "v4",
          app_id: process.env.SCHIPHOL_APP_ID,
          app_key: process.env.SCHIPHOL_API_KEY,
        },
        params: {
          page,
          sort,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching flights" });
  }
};

const getAirlineByCode = async (req, res) => {
  try {
    console.log("Airline Code: ", req.params.iataCode);

    const { iataCode } = req.params;

    const response = await axios.get(
      `https://api.schiphol.nl/public-flights/airlines/${iataCode}`,
      {
        headers: {
          ResourceVersion: "v4",
          app_id: process.env.SCHIPHOL_APP_ID,
          app_key: process.env.SCHIPHOL_API_KEY,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching airline data" });
  }
};

module.exports = { getAirlines, getAirlineByCode };
