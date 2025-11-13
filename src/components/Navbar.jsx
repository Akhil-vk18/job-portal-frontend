import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="flex justify-between items-center bg-purple-400 p-3 rounded-b-3xl h-25 ">
      <span className="flex ml-5 text-blue-600 text-xl font-bold">
        <Link to={"/home"}>JobPortal</Link>
      </span>
      <div className=" ">
        <ul className=" flex mr-10 gap-5">
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/jobs"}>Jobs</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar