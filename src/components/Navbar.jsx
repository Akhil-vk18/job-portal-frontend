import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="flex justify-between items-center bg-indigo-600 p-5 shadow-md rounded-b-3xl h-25 ">
      <span className="flex ml-6 text-white text-2xl font-extrabold tracking-wide">
        <Link to={"/"}>JobPortal</Link>
      </span>
      <div className=" ">
        <ul className="font-semibold text-indigo-100 flex mr-10 gap-8 text-lg">
          <li>
            <Link className=" transition-colors  hover:text-black" to={"/home"}>
              Home
            </Link>
          </li>
          <li>
            <Link className=" transition-colors  hover:text-black" to={"/jobs"}>
              Jobs
            </Link>
          </li>
          <li>
            <Link
              className=" transition-colors  hover:text-black"
              to={"/about"}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className=" transition-colors  hover:text-black"
              to={"/contact"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar