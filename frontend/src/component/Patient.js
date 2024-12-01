import React from "react";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function Patient() {
  return (
    <div className="bg-sky-500 h-screen">
      {/* Title */}
      <h1 className="flex justify-center text-5xl font-semibold  p-8 font-serif text-green-800">
        Driver details
      </h1>

      <div className="flex justify-center gap-8 p-5 ">
        {/* Add driver button */}
        <Link to="/Addpatient">
          <button
            type="button"
            className="text-white bg-whatsapp-green hover:bg-Buttongreen focus:outline-none focus:ring-4 focus:ring-Buttongreen font-medium rounded-full text-me px-5 py-2.5 text-center  dark:whatsapp-green dark:hover:bg-Buttongreen dark:focus:ring-Buttongreen font-sans shadow-xl"
          >
            Click Here to Add a Patient
          </button>
        </Link>
      </div>

      {/* Drivers table */}
      <div className="flex justify-center items-center">
        <div className="overflow-x-auto shadow-2xl sm:rounded-lg ">
          <table className="w-full text-sm text-left rtl:text-right dark:text-gray-400">
            <thead className="text-xs text-whatsapp-green uppercase bg-wight-green dark:bg-whatsapp-green dark:text-wight-green">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Vehicle Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Availability
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-table-row hover:tablerow-hover dark:hover:bg-tablerow-hover">
                <td className="px-6 py-4 font-medium text-green-900"></td>
                <td className="px-6 py-4 font-medium text-green-900"></td>
                <td className="px-6 py-4 font-medium text-green-900"></td>
                <td className="px-6 py-4 font-medium text-green-900"></td>
                <td className="px-6 py-4 font-medium text-green-900"></td>
                <td className="px-6 py-4 text-right text-green-900">
                  <Link to={``}>
                    <button className="btn1 mr-3">
                      <FaEdit className="mr-5 text-xl" />
                    </button>
                  </Link>
                  <button className="btn1">
                    <MdDeleteForever className="mr-5 text-2xl" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Patient;
