import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyFlights from "./pages/MyFlights";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-flights" element={<MyFlights />} />
    </Routes>
  );
}

export default App;
