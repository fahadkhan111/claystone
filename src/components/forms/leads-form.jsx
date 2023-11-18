import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { addDoc, collection } from "firebase/firestore";
import db from "../../firebaseConfig";
import { toast } from "react-toastify";
import { Controller, useForm } from "react-hook-form";
const LeadsForm = ({ openLeadsForm, setOpenLeadsForm }) => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({mode: "all"});
  
  const [showOtherInput, setShowOtherInput] = useState(false);

  const categories = ["web", "desktop", "mobile", "server", "ai"];

  const technologyOptions = {
    web: ["React", "ASP.Net", "PHP", "WordPress", "Other"],
    desktop: ["Windows", "Linux", "MacOS", "Other"],
    mobile: ["Flutter", "React Native", "Android", "IOS", "Other"],
    server: ["Django", "Java", "Node.js", "Other"],
    ai: ["Python", "R-Language", "Other"],
  };

  const selectedCategory = watch("selectedCategory");
  const selectedTechnology = watch("selectedTechnology");

  const handleTechnologyChange = (value) => {
    setShowOtherInput(value === "Other");
  };

  const handleFormSubmit = async (data) => {
    if (
      data.firstName &&
      data.lastName &&
      data.email &&
      data.phone &&
      data.selectedCategory &&
      data.selectedTechnology
    ) {
      const formData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        Category: data.selectedCategory,
        Technology: data.selectedTechnology,
      };
      
      if (data.selectedTechnology === "Other") {
        formData.OtherTechnology = data.otherTechnology;
      }
      
      await addDoc(collection(db, "LeadsForm"), formData);
      
      toast.success("Data added successfully!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });

      reset();

      setOpenLeadsForm(false);
    } else {
      toast.error("Please fill in all required fields.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });
    }
  };

  return (
    <div
      id="authentication-modal"
      tabIndex="-1"
      className={`fixed top-0 left-0 right-0 ${
        openLeadsForm ? "block" : "hidden"
      } z-50 bg-darkBlue bg-opacity-80 backdrop-blur-sm w-full flex justify-center items-center p-4 overflow-x-hidden overflow-y-auto md:inset-0  max-h-full`}
    >
      <div className="relative w-full max-w-xl max-h-full">
        <div className="relative bg-white rounded-lg shadow ">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-darkBlue rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => setOpenLeadsForm(false)}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>{" "}
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-2xl font-bold text-darkBlue dark:text-white my-5 text-center underline">
              Tell us what you need!
            </h3>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    className=" border border-darkBlue text-darkBlue text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                    id="firstName"
                    name="firstName"
                    {...register("firstName", {
                      required: "Firstname is required",
                      minLength: { value: 3, message: "Invalid Firstname" },
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: "Firstname should only contain alphabets",
                      },
                    })}
                    type="text"
                    placeholder="Firstname"
                  />
                  {errors.firstName && (
                    <span className=" absolute text-red text-sm">
                      {errors.firstName?.message}
                    </span>
                  )}
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    className=" border border-darkBlue text-darkBlue text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                    id="lastName"
                    name="lastName"
                    type="text"
                    {...register("lastName", {
                      required: "Lastname is required",
                      minLength: { value: 3, message: "Invalid Lastname" },
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: "Lastname should only contain alphabets",
                      },
                    })}
                    placeholder="Lastname"
                  />
                  {errors.lastName && (
                    <span className=" absolute text-red text-sm">
                      {errors.lastName?.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className=" border border-darkBlue text-darkBlue text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                    id="email"
                    name="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address",
                      },
                    })}
                    placeholder="Email"
                  />
                  {errors.email && (
                    <span className=" absolute   text-red text-sm">
                      {errors.email?.message}
                    </span>
                  )}
                </div>

                {/* <input type="text" id="first_name" className=" border border-darkBlue text-darkBlue text-sm rounded-lg focus:outline-none block w-full p-2.5 " placeholder="John" required> */}

                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    className=" border border-darkBlue text-darkBlue text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                    id="phone"
                    type="number"
                    name="phone"
                    {...register("phone", {
                      required: "Phone Number is required",
                      minLength: {
                        value: 10,
                        message: "Number cannot be less than 10",
                      },

                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Invalid Phone Number",
                      },
                    })}
                    placeholder="Phone Number"
                  />
                  {errors.phone && (
                    <span className=" absolute   text-red text-sm">
                      {errors.phone?.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    htmlFor="selectedCategory"
                    className="block mb-2 text-sm font-medium text-darkBlue dark:text-white"
                  >
                    Select a Category
                  </label>
                  <Controller
                    name="selectedCategory"
                    control={control}
                    render={({ field }) => (
                      <select
                        {...field}
                        className=" border border-darkBlue text-darkBlue text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                        name="selectedCategory"
                        {...register("selectedCategory", {
                          required: "Please select an option",
                        })}
                      >
                        <option value="">Choose a Category</option>
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    )}
                  />
                  {errors.selectedCategory && (
                    <span className=" absolute   text-red text-sm">
                      {errors.selectedCategory?.message}
                    </span>
                  )}
                </div>
                <div className="w-full md:w-1/2 px-3    ">
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-darkBlue dark:text-white"
                  >
                    Select Technology
                  </label>
                  <Controller
                    name="selectedTechnology"
                    control={control}
                    render={({ field }) => (
                      <div>
                        <select
                          {...field}
                          className=" border border-darkBlue text-darkBlue text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                          onChange={(e) => {
                            field.onChange(e.target.value);
                            handleTechnologyChange(e.target.value);
                          }}
                          {...register("selectedTechnology", {
                            required: "Please select an option",
                          })}
                        >
                          <option value="">Choose a Technology</option>
                          {technologyOptions[selectedCategory]?.map((tech) => (
                            <option key={tech} value={tech}>
                              {tech}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  />
                  {errors.selectedTechnology && (
                    <span className=" absolute   text-red text-sm">
                      {errors.selectedTechnology?.message}
                    </span>
                  )}
                </div>
              </div>

              {selectedTechnology === "Other" && (
                <div className="w-full my-4 mb-6">
                  <label className="block ...">Other Technology</label>
                  <Controller
                    name="otherTechnology"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        className=" border border-darkBlue text-darkBlue text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                        name="otherTechnology"
                        {...register("otherTechnology", {
                          required: "Other Technology is required",
                          minLength: {
                            value: 5,
                            message: "Please type at least 5 words",
                          },
                        })}
                      />
                    )}
                  />
                  {errors.otherTechnology && (
                    <span className=" absolute   text-red text-sm">
                      {errors.otherTechnology?.message}
                    </span>
                  )}
                </div>
              )}
              <button
                type="submit"
                //  onClick={handleFormSubmit}
                className="my-6 inline-block w-full rounded bg-darkBlue px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsForm;
