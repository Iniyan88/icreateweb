import React, { useState } from "react";
import { saveContact } from "../apis/Api";
const ContactMe = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    designation: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveContact(formData);
    setFormData({
      fullName: "",
      email: "",
      designation: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 w-full">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto w-full">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="h-14 w-14 bg-purple-200 rounded-full flex flex-shrink-0 justify-center items-center text-purple-500 text-2xl font-mono">
                ?
              </div>
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Get in touch</h2>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">
                  We are always here to help you
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="flex flex-col">
                    <label className="leading-loose">Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder=""
                      className="w-full bg-white rounded-md border border-gray-200 focus:border-purple-500 focus:outline-none text-gray-700 py-2 px-3"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=""
                      className="w-full bg-white rounded-md border border-gray-200 focus:border-purple-500 focus:outline-none text-gray-700 py-2 px-3"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Student/Employee</label>
                    <input
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      placeholder=""
                      className="w-full bg-white rounded-md border border-gray-200 focus:border-purple-500 focus:outline-none text-gray-700 py-2 px-3"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Queries</label>
                    <textarea
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder=""
                      className="w-full bg-white rounded-md border border-gray-200 focus:border-purple-500 focus:outline-none text-gray-700 py-2 px-3"
                    />
                  </div>
                </div>
                <div className="pt-4 flex items-center space-x-4">
                  <button
                    type="submit"
                    className="bg-purple-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
