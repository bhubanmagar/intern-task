import React from "react";

const CountrySelector: React.FC = () => {
  return (
    <div className="w-full max-w-xs mx-auto">
      {/* Label */}
      <label
        htmlFor="location"
        className="block text-sm font-medium text-gray-700"
      >
        Country
      </label>

      {/* Select Input */}
      <div className="relative">
        <select
          id="country"
          name="country"
          className="mt-1 block w-full pl-4 pr-12 py-3 text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md appearance-none"
          style={{ height: "2.5rem", width: "13rem" }}
          defaultValue=""
        >
          <option value="" disabled>
            Eg: Nepal
          </option>
          <option value="Kathmandu">Nepal</option>
          <option value="Bhaktapur">India</option>
          <option value="Lalitpur">China</option>
        </select>
      </div>
    </div>
  );
};

export default CountrySelector;
