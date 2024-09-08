import React from "react";
import hat from "../../asstes/hat.png";

// Interface for ProgressBarProps
interface ProgressBarProps {
  step: number;
}

// ProgressBar component
export const ProgressBar: React.FC<ProgressBarProps> = ({ step }) => {
  const totalSteps = 4;
  const progressPercentage = (step / totalSteps) * 100;
  let updatedProgress = 0;
  if (step <= 2) {
    updatedProgress = progressPercentage - 17;
  } else if (step === 3) {
    updatedProgress = progressPercentage - 12;
  } else {
    updatedProgress = progressPercentage;
  }
  return (
    <div className="relative flex items-center mb-2">
      {/* Progress line */}
      <div className="absolute w-full h-2 bg-gray-300 rounded-full">
        <div
          className="h-full bg-green-500 rounded-full transition-all duration-500"
          style={{
            width: `${updatedProgress}%`,
          }}
        ></div>
      </div>

      {/* Step indicators */}
      <div className="flex justify-between  gap-28 w-3/4 z-10">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="relative flex flex-col items-center">
            {/* Hat Image */}
            {step === s && (
              <img
                src={hat}
                alt="Hat"
                className="absolute -top-3 z-20 left-5 w-9 h-5" // Position the hat on top of the step number
              />
            )}

            {/* Step number */}
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full border-4 ${
                step >= s
                  ? "bg-green-500 border-green-500 text-white"
                  : "bg-white border-gray-300 text-gray-500"
              } transition-all duration-300 z-10`}
            >
              {s}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
