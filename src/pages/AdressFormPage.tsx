import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CountrySelector from "../Components/Country";
import MunicipalitySelector from "../Components/Municipality";
import DistrictSelector from "../Components/DistrictSelector";
import { useNavigate } from "react-router-dom";

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
    const adress = JSON.stringify(data);
    localStorage.setItem("address", adress);
    navigate("/profile");
    console.log("Form Data: ", data);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col bg-green-400">
      <div className="w-full font-bold text-3xl text-center m-2">
        <span>Register</span>
      </div>
      <div className="">
        <form
          className="w-full h-auto p-2 bg-transparent rounded-3xl border"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full flex justify-start font-bold text-2xl m-3 ml-8">
            <span>Address</span>
          </div>

          <div className="w-full flex gap-11 m-1 mt-10 mb-6">
            {/* Country Selector */}
            <div>
              <Controller
                name="country"
                control={control}
                render={({ field }) => <CountrySelector {...field} />}
              />
              {errors.country && (
                <p className="text-red-500">{errors.country.message}</p>
              )}
            </div>

            {/* District Selector */}
            <div>
              <Controller
                name="district"
                control={control}
                render={({ field }) => <DistrictSelector {...field} />}
              />
              {errors.district && (
                <p className="text-red-500">{errors.district.message}</p>
              )}
            </div>

            {/* Municipality Selector */}
            <div>
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

          <div className="w-full flex m-1 mt-11 gap-11 mb-5">
            {/* City */}
            <div>
              <label htmlFor="city" className="ml-4 font-bold ">
                City
              </label>
              <br />
              <input
                type="text"
                {...register("city")}
                className="p-3 w-60 rounded-xl mt-3"
                placeholder="Eg: Kathmandu"
              />
              {errors.city && (
                <p className="text-red-500">{errors.city.message}</p>
              )}
            </div>

            {/* Ward */}
            <div>
              <label htmlFor="ward" className="ml-4 font-bold ">
                Ward
              </label>
              <br />
              <input
                type="text"
                {...register("ward")}
                className="p-3 w-60 rounded-xl mt-3"
                placeholder="Eg: 4"
              />
              {errors.ward && (
                <p className="text-red-500">{errors.ward.message}</p>
              )}
            </div>
          </div>

          <div className="w-full flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white font-bold p-2 w-28 rounded-2xl mr-6 mt-6"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-green-600 text-white font-bold p-2 w-28 rounded-2xl mr-6 mt-6"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressPage;
