import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { addDoc, collection } from "firebase/firestore";
import db from "../../firebaseConfig";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const ContactForm = ({ openContactForm, setOpenContactForm }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (data) => {
    if (
      data.firstName !== "" &&
      data.lastName !== "" &&
      data.email !== "" &&
      data.phone !== "" &&
      data.message !== ""
    ) {
      await addDoc(collection(db, "ContactForm"), {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        message: data.message,
      });
      toast.success("Data added successfully!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });

      reset();

      setOpenContactForm(false);
    } else {
      toast.error("An error occurred. Please try again.", {
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
        openContactForm ? "block" : "hidden"
      } z-50 bg-darkBlue bg-opacity-80 backdrop-blur-sm w-full flex justify-center items-center p-4 overflow-x-hidden overflow-y-auto md:inset-0  max-h-full`}
    >
      <div className="relative w-full max-w-xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-darkBlue rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => setOpenContactForm(false)}
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
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-2xl font-bold text-darkBlue dark:text-white my-5 text-center underline">
              Send your Queries
            </h3>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold "
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="firstName"
                    name="firstName"
                    type="text"
                    {...register("firstName", {
                      required: "Firstname is required",
                      minLength: { value: 3, message: "Invalid Firstname" },
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: "Firstname should only contain alphabets",
                      },
                    })}
                    placeholder="Firstname"
                  />

                  {errors.firstName && (
                    <span className=" absolute -mt-3  text-red text-sm">
                      {errors.firstName?.message}
                    </span>
                  )}
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold "
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
                    <span className=" absolute -mt-3  text-red text-sm">
                      {errors.lastName?.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold "
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold "
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
              <div className="flex flex-wrap -mx-3 mb-9">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold "
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="message"
                    name="message"
                    type="text"
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 20,
                        message: "Message should be atleast 20 characters",
                      },
                    })}
                    placeholder="Message"
                  />
                  {errors.message && (
                    <span className=" absolute   text-red text-sm">
                      {errors.message?.message}
                    </span>
                  )}
                  {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
                </div>
              </div>

              <button
                type="submit"
                className="mb-6 inline-block w-full rounded bg-darkBlue px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
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

export default ContactForm;
