import React from "react";
import { FaPlane } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-[#e7dcff] h-[100vh] flex justify-center items-center">
      <div className="bg-[#f6f4f8]">
        <div className="flex gap-36">
          <div>
            <div className="flex items-center gap-1">
              <FaPlane />
              <h1>PLANE SCAPE</h1>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <FaPlane />
              <p>Deals</p>
            </div>
            <div className="flex items-center gap-1">
              <FaPlane />
              <p>Discover</p>
            </div>
            <div className="flex items-center gap-1">
              <FaPlane />
              <p>Joane Smith</p>
            </div>
          </div>
        </div>
      </div>
      {/* Book Your Flight */}
      {/* Ticket Details */}
      {/* Sort By */}
      {/* Extra */}
    </div>
  );
};

export default Home;
