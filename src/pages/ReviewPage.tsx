import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface PersonalDetailsType {
  Fname: string;
  Mname: string;
  Lname: string;
  Phone: string;
  BirthDate: string;
  Gender: string;
}

interface AddressType {
  country: string;
  district: string;
  municipality: string;
  city: string;
  ward: string;
}

const ReviewPage = () => {
  const [personalDetails, setPersonalDetails] =
    useState<PersonalDetailsType | null>(null);
  const [address, setAddressDetails] = useState<AddressType | null>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);
  const navigate = useNavigate();

  const getData = () => {
    try {
      const personal = localStorage.getItem("personalDetails");
      const location = localStorage.getItem("address");
      const profile = localStorage.getItem("profileImage");

      setPersonalDetails(personal ? JSON.parse(personal) : null);
      setAddressDetails(location ? JSON.parse(location) : null);
      setImageURL(profile);
    } catch (error) {
      console.error("Error retrieving data from localStorage:", error);
    }
  };

  const backHandler = () => {
    navigate("/profile");
  };

  const nextHandler = () => {
    toast.success("Submitted Successfully!", {
      position: "top-center",
    });
    navigate("/details");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center flex-col bg-green-400">
        <div className="w-full font-bold text-3xl text-center m-2">
          <span> Register</span>
        </div>
        <div className="bg-transparent w-costum-width-1 rounded-lg shadow-md p-6 h-auto">
          <div className=" w-full flex justify-center text-2xl font-bold">
            Review Your Details
          </div>
          {/* Profile Section */}
          <div className="flex items-center space-x-4 mb-2">
            <img
              src={
                imageURL ||
                "https://play-lh.googleusercontent.com/15OKLti0ofnjK4XK1bgRXgsoblPvMi3hCA5z2o9WAcjssFNt2dXxemp2Om9vB3A_jYAe=w480-h960-rw"
              }
              alt="Profile"
              className="w-52 h-48 rounded-xl object-cover"
            />
          </div>

          <div className="flex flex-col w-full p-3">
            <h3 className="text-xl font-semibold m-3">Personal Details</h3>
            {/* Personal Details */}
            {personalDetails ? (
              <div className="flex flex-col  gap-3">
                <div className="flex  gap-7">
                  <p>
                    <strong>First Name:</strong> {personalDetails.Fname}
                  </p>
                  <p>
                    <strong>Middle Name:</strong> {personalDetails.Mname}
                  </p>
                  <p>
                    <strong>Last Name:</strong> {personalDetails.Lname}
                  </p>
                </div>
                <div className="flex gap-7">
                  <p>
                    <strong>Phone:</strong> {personalDetails.Phone}
                  </p>
                  <p>
                    <strong>Birth Date:</strong> {personalDetails.BirthDate}
                  </p>
                  <p>
                    <strong>Gender:</strong> {personalDetails.Gender}
                  </p>
                </div>
              </div>
            ) : (
              <p>No personal details available.</p>
            )}
          </div>

          <div className="flex p-3">
            {/* Address Details */}
            {address ? (
              <div className="flex flex-col gap-3">
                <div className="flex gap-7">
                  <div>
                    <strong>Country: </strong>
                    <p>{address.country}</p>
                  </div>
                  <div>
                    <strong>District: </strong>
                    <p>{address.district}</p>
                  </div>
                  <div>
                    <strong>Municipality: </strong>
                    <p>{address.municipality}</p>
                  </div>
                </div>
                <div className="flex  gap-7">
                  <div>
                    <strong>City: </strong>
                    <p>{address.city}</p>
                  </div>
                  <div>
                    <strong>Ward: </strong>
                    <p>{address.ward}</p>
                  </div>
                </div>
              </div>
            ) : (
              <p>No address details available.</p>
            )}
          </div>

          {/* Buttons Section */}
          <div className="mt-2 flex justify-end space-x-4">
            <button
              className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
              onClick={backHandler}
            >
              Back
            </button>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              onClick={nextHandler}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewPage;