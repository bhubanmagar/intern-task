import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CountrySelector from "../Components/Country";
import MunicipalitySelector from "../Components/Municipality";
import DistrictSelector from "../Components/DistrictSelector";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "../Components/progressBar/ProgressBar";
import background from "../asstes/background.png";
import logo from "../asstes/logo.png";

// Define the form schema using Zod
const addressSchema = z.object({
  country: z.string().nonempty("Country is required"),
  district: z.string().nonempty("District is required"),
  municipality: z.string().nonempty("Municipality is required"),
  city: z.string().min(3, "City must be at least 3 characters"),
  ward: z
    .string()
    .regex(/^\d+$/, "Ward must be a number")
    .min(1, "Ward is required"),
});

// Define TypeScript types for form fields
type AddressFormSchema = z.infer<typeof addressSchema>;

const AddressPage: React.FC = () => {
  // React Hook Form setup with zod validation and TypeScript type inference
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AddressFormSchema>({
    resolver: zodResolver(addressSchema),
  });

  const navigate = useNavigate();

  // Submission handler (typed using the AddressFormSchema)
  const onSubmit: SubmitHandler<AddressFormSchema> = (data) => {
    const address = JSON.stringify(data);
    localStorage.setItem("address", address);
    navigate("/profile");
    console.log("Form Data: ", data);
  };

  return (
    <>
      <div className="  w-full flex justify-start z-20 bg-transparent absolute top-2 ">
        <img src={logo} alt="logo" className=" h-20 w-28 ml-8" />
      </div>
      <div
        className="w-full h-full flex justify-center items-center flex-col bg-cos-bg"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        {/* Logo Section */}

        {/* Title Section */}
        <div className="w-full text-center absolute top-9 sm:mb-14 pl-4">
          <h1 className="text-2xl sm:text-3xl font-bold">Register</h1>
        </div>

        {/* Progress Bar */}
        <ProgressBar step={2} />

        {/* Form Section */}
        <div className="w-full max-w-4xl px-4 ">
          <form
            className="bg-white bg-opacity-90 rounded-3xl border p-6 sm:p-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Form Title */}
            <div className="w-full text-left font-bold text-xl sm:text-2xl mb-6">
              <span>Address</span>
            </div>

            {/* Country, District, Municipality - Responsive Flexbox */}
            <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6">
              <div className="flex-1">
                <Controller
                  name="country"
                  control={control}
                  render={({ field }) => <CountrySelector {...field} />}
                />
                {errors.country && (
                  <p className="text-red-500">{errors.country.message}</p>
                )}
              </div>

              <div className="flex-1">
                <Controller
                  name="district"
                  control={control}
                  render={({ field }) => <DistrictSelector {...field} />}
                />
                {errors.district && (
                  <p className="text-red-500">{errors.district.message}</p>
                )}
              </div>

              <div className="flex-1">
                <Controller
                  name="municipality"
                  control={control}
                  render={({ field }) => <MunicipalitySelector {...field} />}
                />
                {errors.municipality && (
                  <p className="text-red-500">{errors.municipality.message}</p>
                )}
              </div>
            </div>

            {/* City and Ward Inputs */}
            <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6">
              <div className="flex-1">
                <label htmlFor="city" className="ml-1 font-bold">
                  City
                </label>
                <input
                  type="text"
                  {...register("city")}
                  className="p-3 w-full rounded-xl mt-2 border"
                  placeholder="Eg: Kathmandu"
                />
                {errors.city && (
                  <p className="text-red-500">{errors.city.message}</p>
                )}
              </div>

              <div className="flex-1">
                <label htmlFor="ward" className="ml-1 font-bold">
                  Ward
                </label>
                <input
                  type="text"
                  {...register("ward")}
                  className="p-3 w-full rounded-xl mt-2 border"
                  placeholder="Eg: 4"
                />
                {errors.ward && (
                  <p className="text-red-500">{errors.ward.message}</p>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="w-full flex justify-between">
              <button
                type="button"
                className="bg-gray-500 text-white font-bold py-2 px-6 rounded-xl"
                onClick={() => {
                  navigate("/");
                }}
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-green-600 text-white font-bold py-2 px-6 rounded-xl"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddressPage;
