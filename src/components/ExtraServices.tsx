import { FaCar, FaUmbrellaBeach } from "react-icons/fa";
import { FaHotel } from "react-icons/fa6";

export default function ExtraServices() {
  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="relative cursor-pointer hover:scale-105 transition-transform duration-300">
        <img
          src="/images/extraServicesImages/car-image.png"
          alt="image1"
          className="max-h-[250px] rounded-2xl"
        />
        <div className="absolute bottom-[5%] left-[5%] text-white font-bold text-lg">
          <FaCar className="w-8 h-8" />
          <p>CAR RENTALS</p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:scale-105 transition-transform duration-300">
        <img
          src="/images/extraServicesImages/hotel-image.png"
          alt="image2"
          className="max-h-[250px] rounded-2xl"
        />
        <div className="absolute bottom-[5%] left-[5%] text-white font-bold text-lg">
          <FaHotel />
          <p>HOTELS</p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:scale-105 transition-transform duration-300">
        <img
          src="/images/extraServicesImages/travel-package-image.png"
          alt="image3"
          className="max-h-[250px] rounded-2xl"
        />
        <div className="absolute bottom-[5%] left-[5%] text-white font-bold text-lg">
          <FaUmbrellaBeach />
          <p>TRAVEL PACKAGES</p>
        </div>
      </div>
    </div>
  );
}
