import React from "react";
import DateSelector from "../Components/DateSelector";
import GenderSelect from "../Components/GenderSelect";

const PersonalDetail: React.FC = () => {
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
        <div className="w-costum-width h-costum-height p-2 bg-transparent rounded-3xl border ">
          <div className="w-full flex justify-start font-bold text-2xl m-3">
            <span>Personal Details</span>
          </div>
          <div className="w-full flex gap-11 m-1 mt-10 mb-6">
            <div className="">
              <label htmlFor="First Name" className="ml-4 font-bold">
                First Name
              </label>
              <br />
              <input
                type="text"
                className="p-2 w-60 rounded-2xl "
                placeholder="Enter your First Name"
              />
            </div>
            <div className="">
              <label htmlFor="First Name" className="ml-4 font-bold">
                Middle Name
              </label>
              <br />
              <input
                type="text"
                className="p-2 w-60 rounded-2xl "
                placeholder="Enter your middle Name"
              />
            </div>
            <div className="">
              <label htmlFor="First Name" className="ml-4 font-bold">
                Last Name
              </label>
              <br />
              <input
                type="text"
                className="p-2 w-60 rounded-2xl "
                placeholder="Enter your Last Name"
              />
            </div>
          </div>
          <div className="w-full flex m-1 mt-11 gap-11 mb-5">
            <div className="">
              <label htmlFor="First Name" className="ml-4 font-bold">
                Phone
              </label>
              <br />
              <input
                type="text"
                className="p-2 w-60 rounded-2xl "
                placeholder="98*********"
              />
            </div>
            <DateSelector />
          </div>
          <div className="w-full mb-8">
            <GenderSelect />
          </div>
          <div className="w-full flex justify-end">
            <button className="bg-green-600 text-white font-bold p-2 w-28 rounded-2xl mr-6 mb-0">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalDetail;
