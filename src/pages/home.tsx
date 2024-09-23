import FlightBooking from "../components/FlightBooking";
import { FaPlane, FaTag } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import TicketDetails from "../components/TicketDetails";
import FilterOptions from "../components/FilterOptions";
import ExtraServices from "../components/ExtraServices";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[#e7dcff] p-[5%] flex flex-col justify-center items-center">
      <div className="bg-[#f6f4f8] w-[90%] p-8 rounded-2xl flex flex-col gap-6">
        <div className="flex justify-between pl-4 pr-10">
          <div>
            <div className="flex items-center gap-1">
              <FaPlane />
              <h1>PLANE SCAPE</h1>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <FaTag className="text-[#4a0097]" />
              <p>Deals</p>
            </div>
            <div className="flex items-center gap-1">
              <FaEarthAmericas className="text-[#4a0097]" />
              <p>Discover</p>
            </div>
            <div className="flex items-center gap-1">
              <img
                src="/assets/images/homePageImages/profile-image.png"
                alt="profile"
                className="w-10 rounded-full"
              />
              <Link to="/my-flights">
                <p>My Tickets</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col w-[80%] gap-6">
            <FlightBooking />
            <div className="flex gap-6">
              <div className="w-[80%]">
                <TicketDetails />
                <TicketDetails />
              </div>
              <div className="w-[20%]">
                <FilterOptions />
              </div>
            </div>
          </div>
          <div className="w-[20%]">
            <ExtraServices />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
