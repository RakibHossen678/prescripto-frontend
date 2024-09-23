import { assets } from "../assets/assets";

const Banner = () => {
  return (
    <div className="flex bg-primary rounded-lg my-20 px-6 sm:px-10 md:px-14 lg:px-12 md:mx-10 ">
      {/* left */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className="text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl  font-semibold">
          <p>Book Appointment</p>
          <p className="mt-4">With 100+ Trusted Doctors</p>
        </div> 
        <button className="bg-white px-8 py-3 rounded-full text-sm sm:text-base text-gray-600 mt-6  hover:scale-105 transition-all duration-300">
          Create account
        </button>
      </div>
      {/* right */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img
          className="w-full absolute -bottom-[01px] right-0 max-w-md"
          src={assets.appointment_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
