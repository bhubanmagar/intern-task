import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    navigate("/adress");
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
      <div className="w-full h-screen flex justify-center items-center flex-col bg-green-400">
        <div className="w-full font-bold text-3xl text-center m-2">
          <span>Register</span>
        </div>
        <div className="bg-transparent flex items-center justify-center h-screen">
          <div className="bg-transparent w-costum-width-1 rounded-lg shadow-md p-6 h-costum-h-3">
            <h2 className="text-center text-xl font-semibold mb-3">
              Set Your Profile Picture
            </h2>
            <div className="flex justify-center mb-4 m-5">
              <div className="relative">
                <img
                  src={profileImage as string | undefined}
                  alt="Profile"
                  className="w-56 h-64 rounded-2xl border border-gray-300"
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
            <div className="flex justify-end gap-2 mt-20">
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
