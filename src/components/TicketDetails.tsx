import { FaPlane, FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";

const TicketDetails = () => {
  return (
    <>
      <div className="bg-white rounded-xl rounded-bl-none">
        <div>
          <p className="font-bold">Milano - Madrid</p>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <div>
              <FaPlaneDeparture />
              <p>Departure</p>
            </div>
            <p className="font-bold">7:30 AM</p>
            <p>Airport: MXP</p>
          </div>

          <div className="w-[10%]">
            <hr className="border-none p-[2px] bg-gray-400 rounded-md" />
          </div>

          <div className="flex flex-col items-center">
            <p>Alitalia</p>
            <FaPlane className="text-[#4a0097]" />
            <p>2h 25m (Nonstop)</p>
          </div>

          <div className="w-[10%]">
            <hr className="border-none p-[2px] bg-gray-400 rounded-md" />
          </div>

          <div>
            <div>
              <FaPlaneArrival />
              <p>Arrival</p>
            </div>
            <p className="font-bold">9:55 AM</p>
            <p>Airport: MAD</p>
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <p className="font-bold text-[#4a0097]">Price:$200</p>
            <p>Round Trip</p>
          </div>
          <button className="bg-[#4a0097] text-white rounded-tl-lg px-10 py-6">
            <p>Book Flight</p>
          </button>
        </div>
      </div>
      <div className="w-[10%]">
        <p className="bg-[#e6e0eb] rounded-b-lg">Check the details</p>
      </div>
    </>
  );
};

export default TicketDetails;
