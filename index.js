const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const app = express();

// MongoDB Bağlantısı
connectDB();

// Middleware'ler
app.use(express.json());
app.use(cors());

// Uçuş ve rezervasyon rotalarını bağlayın
app.use("/api/flights", require("./routes/flights"));
app.use("/api/reservations", require("./routes/reservations"));
app.use("/api/airlines", require("./routes/airlines"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
