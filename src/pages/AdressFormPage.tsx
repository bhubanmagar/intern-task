import React from "react";
import CountrySelector from "../Components/Country";
import MunicipalitySelector from "../Components/Municipality";
import DistrictSelector from "../Components/DistrictSelector";
const AdressPage = () => {
  return (
    <>
      <div
        className="w-full h-screen flex justify-center items-center flex-col bg-green-400"
        // style={{
        //   backgroundImage: `url("")`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center center",
        //   backgroundRepeat: "no-repeat",
        //   backgroundOrigin: "content-box",
        // }}
      >
        <div className="w-full font-bold text-3xl text-center m-2">
          <span>Register</span>
        </div>
        <div className="w-costum-width h-costum-h-2 p-2 bg-transparent rounded-3xl border ">
          <div className="w-full flex justify-start font-bold text-2xl m-3 ml-8">
            <span>Address </span>
          </div>
          <div className="w-full flex gap-11 m-1 mt-10 mb-6">
            <CountrySelector />
            <DistrictSelector />
            <MunicipalitySelector />
          </div>
          <div className="w-full flex m-1 mt-11 gap-11 mb-5">
            <div className="">
              <label htmlFor="First Name" className="ml-4 font-bold ">
                City
              </label>
              <br />
              <input
                type="text"
                className="p-3 w-60 rounded-xl mt-3 "
                placeholder="Eg: Kathmandu"
              />
            </div>
            <div className="">
              <label htmlFor="First Name" className="ml-4 font-bold ">
                Ward
              </label>
              <br />
              <input
                type="text"
                className="p-3 w-60 rounded-xl mt-3 "
                placeholder="Eg: 4"
              />
            </div>
          </div>
          <div className="w-full flex justify-end ">
            <button className="bg-gray-500 text-white font-bold p-2 w-28 rounded-2xl mr-6 mt-6">
              Back
            </button>
            <button className="bg-green-600 text-white font-bold p-2 w-28 rounded-2xl mr-6 mt-6">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdressPage;
