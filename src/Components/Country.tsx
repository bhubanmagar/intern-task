import React from "react";
import { ControllerRenderProps } from "react-hook-form";

interface CountrySelectorProps extends ControllerRenderProps {
  // Define any additional props if needed
}

const CountrySelector: React.FC<CountrySelectorProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className="">
      {/* Label */}
      <label htmlFor="country" className="font-bold ml-4">
        Country
      </label>

      {/* Select Input */}
      <div className="relative">
        <select
          id="country"
          name="country"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mt-1 block w-60 pl-4 pr-12 py-3 text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-2xl appearance-none"
        >
          <option value="" disabled selected>
            Eg: Nepal
          </option>
          <option value="Nepal">USA</option>
          <option value="India">India</option>
          <option value="China">China</option>
        </select>

        {/* Dropdown icon */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CountrySelector;
