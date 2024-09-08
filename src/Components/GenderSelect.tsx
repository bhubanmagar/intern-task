import React from "react";

interface GenderSelectProps {
  selectedGender: string;
  setSelectedGender: (gender: string) => void;
}

const GenderSelect: React.FC<GenderSelectProps> = ({
  selectedGender,
  setSelectedGender,
}) => {
  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedGender(event.target.value); // Update selected gender
  };

  return (
    <div className="m-1 mt-2">
      <h2 className="text-lg font-semibold mb-2 ml-3">Gender</h2>
      <div className="flex items-center space-x-6 ml-3">
        {/* Male Radio */}
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio text-green-500"
            name="gender"
            value="male"
            checked={selectedGender === "male"}
            onChange={handleGenderChange}
          />
          <span className="ml-2 text-gray-700">Male</span>
        </label>

        {/* Female Radio */}
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio text-green-500"
            name="gender"
            value="female"
            checked={selectedGender === "female"}
            onChange={handleGenderChange}
          />
          <span className="ml-2 text-gray-700">Female</span>
        </label>

        {/* Others Radio */}
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio text-green-500"
            name="gender"
            value="others"
            checked={selectedGender === "others"}
            onChange={handleGenderChange}
          />
          <span className="ml-2 text-gray-700">Others</span>
        </label>
      </div>
    </div>
  );
};

export default GenderSelect;
