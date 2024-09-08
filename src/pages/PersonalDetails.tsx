import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as z from "zod";
import DateSelector from "../Components/DateSelector";
import GenderSelect from "../Components/GenderSelect";
import { useNavigate } from "react-router-dom";
import background from "../asstes/background.png";
import logo from "../asstes/logo.png";
import { ProgressBar } from "../Components/progressBar/ProgressBar";
// Define schema with zod
const schema = z.object({
  Fname: z.string().min(1, { message: "First name is required" }),
  Mname: z.string().min(1, { message: "Middle name is required" }),
  Lname: z.string().min(1, { message: "Last name is required" }),
  Phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" }),
  BirthDate: z
    .string()
    .refine((date) => date !== "", { message: "Birth date is required" }),
  Gender: z.string().min(1, { message: "Gender is required" }),
});

// Infer the form fields type from the schema
type FormFields = z.infer<typeof schema>;

const PersonalDetail: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue, // Use this to set the value of fields
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedGender, setSelectedGender] = useState("male");
  const navigate = useNavigate();
  const submitHandler: SubmitHandler<FormFields> = (data) => {
    const dd = JSON.stringify(data);
    localStorage.setItem("personalDetails", dd);
    navigate("/address");
    console.log(data);
  };

  // Update the date value in react-hook-form
  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    setValue("BirthDate", date);
  };

  // Update the gender value in react-hook-form
  const handleGenderChange = (gender: string) => {
    setSelectedGender(gender);
    setValue("Gender", gender);
  };

  return (
    <>
      <div className="  w-full flex justify-start z-20 bg-transparent absolute top-2 ">
        <img src={logo} alt="logo" className=" h-20 w-28 ml-8" />
      </div>{" "}
      <div
        className="w-full  flex  h-screen justify-center items-center flex-col  bg-cos-bg"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <div className="w-full font-bold  flex text-3xl text-center mb-16 ">
          <div className="flex w-full justify-center pl-4">
            <span className="">Register</span>
          </div>
        </div>
        <ProgressBar step={1} />
        <div className="w-custom-width h-custom-height p-2 bg-white bg-opacity-90 rounded-3xl border mb-9">
          <div className="w-full flex justify-start font-bold text-2xl m-2">
            <span>Personal Details</span>
          </div>

          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="w-full flex gap-11 m-1 mt-7 mb-6">
              <div>
                <label htmlFor="Fname" className="ml-4 font-bold">
                  First Name
                </label>
                <br />
                <input
                  type="text"
                  {...register("Fname")}
                  className="p-2 w-60 rounded-2xl"
                  placeholder="Enter your First Name"
                />
                {errors.Fname && (
                  <p className="text-red-500">{errors.Fname.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="Mname" className="ml-4 font-bold">
                  Middle Name
                </label>
                <br />
                <input
                  type="text"
                  {...register("Mname")}
                  className="p-2 w-60 rounded-2xl"
                  placeholder="Enter your Middle Name"
                />
                {errors.Mname && (
                  <p className="text-red-500">{errors.Mname.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="Lname" className="ml-4 font-bold">
                  Last Name
                </label>
                <br />
                <input
                  type="text"
                  {...register("Lname")}
                  className="p-2 w-60 rounded-2xl"
                  placeholder="Enter your Last Name"
                />
                {errors.Lname && (
                  <p className="text-red-500">{errors.Lname.message}</p>
                )}
              </div>
            </div>

            <div className="w-full flex m-1 mt-5 gap-11 mb-5">
              <div>
                <label htmlFor="Phone" className="ml-4 font-bold">
                  Phone
                </label>
                <br />
                <input
                  type="text"
                  {...register("Phone")}
                  className="p-2 w-60 rounded-2xl"
                  placeholder="98*********"
                />
                {errors.Phone && (
                  <p className="text-red-500">{errors.Phone.message}</p>
                )}
              </div>
              <div>
                <DateSelector
                  selectedDate={selectedDate}
                  setSelectedDate={handleDateChange}
                />
                {errors.BirthDate && (
                  <p className="text-red-500">{errors.BirthDate.message}</p>
                )}
              </div>
            </div>

            <div className="w-full mb-8">
              <GenderSelect
                selectedGender={selectedGender}
                setSelectedGender={handleGenderChange}
              />
              {errors.Gender && (
                <p className="text-red-500">{errors.Gender.message}</p>
              )}
            </div>
            <div className="w-full flex justify-end">
              <button
                className="bg-green-600 text-white font-bold p-2 w-28 rounded-2xl mr-6 mb-0"
                type="submit"
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

export default PersonalDetail;
