import React from "react";
import { useState } from 'react';
import axios from 'axios';



function Addpatient() {

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    // Create object with form data
    const patient = { name, address, phonenumber};
    console.log(patient);
    
    try {
      // add patient post request
      const result = await axios.post(
        "http://localhost:3000/api/patient/Patient",
        patient
      );
      console.log(result.data);
      alert("patient added successfully");
      window.location.href = "/j_drivers";
    } catch (error) {
      console.log(error);
    }
  };




  return (
    <div className="flex justify-center items-center h-screen bg-sky-500">
      <div className="w-96 rounded-lg shadow-lg bg-white p-8 ">
        <form onSubmit={handleSubmit}>
          {/* input name */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-dark font-custom text-center">
              Enter New Patient Details
            </h2>
            <input
              type="text"
              placeholder="Name"
              required
              className=" border-2 border-black mt-1 p-2 block w-full rounded-3xl bg-wight-green border-none focus:outline-whatsapp-green placeholder-gray-500 placeholder-opacity-50 font-custom text-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* input Address */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Address"
              required
              className="mt-1 p-2 block w-full rounded-3xl bg-wight-green border-none focus:outline-whatsapp-green placeholder-gray-500 placeholder-opacity-50 font-custom text-md"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          {/* input phone number */}
          <div className="mb-4">
            <input
              type="tel"
              placeholder="Phone Number"
              required
              maxLength="10"
              className="mt-1 p-2 block w-full rounded-3xl bg-wight-green border-none focus:outline-whatsapp-green placeholder-gray-500 placeholder-opacity-50 font-custom text-md"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
            />
          </div>
          
          {/* Submit button */}
          <div>
            <button
              type="submit"
              className="text-white bg-dark hover:bg-darkhover block w-full focus:outline-none  font-semibold rounded-md font-custom text-md px-5 py-2.5 text-center dark:bg-dark dark:hover:bg-darkhover"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addpatient;
