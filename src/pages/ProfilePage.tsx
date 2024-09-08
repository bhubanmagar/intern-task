import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "../Components/progressBar/ProgressBar";
import background from "../asstes/background.png";
import logo from "../asstes/logo.png";

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState<string | ArrayBuffer | null>(
    null
  );
  const navigate = useNavigate();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setProfileImage(base64String);
        localStorage.setItem("profileImage", base64String);
      };
      reader.readAsDataURL(file);
    }
  };
  const backHandler = () => {
    navigate("/address");
  };

  const nextHandler = () => {
    navigate("/review");
  };

  // Load image from localStorage on component mount
  React.useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  return (
    <>
      <div
        className="w-full h-screen flex justify-center items-center flex-col bg-cos-bg"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <div className="  w-full flex justify-start ">
          <img src={logo} alt="logo" className=" h-20 w-28 ml-8 m-1" />
        </div>{" "}
        <div className="w-full font-bold text-3xl text-center pl-4 ">
          <span>Register</span>
        </div>
        <ProgressBar step={3} />
        <div className="bg-transparent flex items-center justify-center h-screen mb-9">
          <div className=" bg-white bg-opacity-90 w-costum-width-1 rounded-lg shadow-md p-4 h-auto">
            <h2 className="text-center text-xl font-semibold mb-2">
              Set Your Profile Picture
            </h2>
            <div className="flex justify-center mb-1 m-2">
              <div className="relative">
                <img
                  src={profileImage as string | undefined}
                  alt="Profile"
                  className="w-56 h-60 rounded-2xl border border-gray-300"
                />
                <div>
                  <button className="bg-green-500 ml-5 text-white p-1 w-48 rounded-full m-2">
                    <input
                      type="file"
                      accept="image/*"
                      className="opacity-0 absolute inset-0"
                      onChange={handleImageUpload}
                    />
                    Upload
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-2">
              <button
                className="bg-gray-500 text-white py-2 px-4 w-24 rounded-md"
                onClick={backHandler}
              >
                Back
              </button>
              <button
                className="bg-green-500 text-white py-2 px-4 w-24 rounded-md"
                onClick={nextHandler}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
