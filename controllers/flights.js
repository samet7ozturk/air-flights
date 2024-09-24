const axios = require("axios");

const getFlights = async (req, res) => {
  try {
    // Gelen sorgu parametrelerini logla
    console.log("Query Parameters: ", req.query);

    const {
      page = 0,
      includeDelays = false,
      sort = "+scheduleDate",
      fromScheduleDate,
      toScheduleDate,
    } = req.query;

    const response = await axios.get(
      "https://api.schiphol.nl/public-flights/flights",
      {
        headers: {
          ResourceVersion: "v4",
          app_id: process.env.SCHIPHOL_APP_ID,
          app_key: process.env.SCHIPHOL_API_KEY,
        },
        params: {
          page,
          includedelays: includeDelays,
          sort,
          fromScheduleDate,
          toScheduleDate,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching flights" });
  }
};

module.exports = { getFlights };
