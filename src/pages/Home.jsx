import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className=" text-center ">
      <p className="font-bold text-3xl mt-20 ">Find Your Dream IT Jobs</p>
      <div className="p-2 text-xl font-semibold mt-5">
        Stay updated with the newest openings from Kerala’s top IT hubs —
        Infopark and Technopark.
      </div>
      <div className="p-2 font-semibold text-lg">
        Your one-stop portal for IT jobs in Kochi, Trivandrum, and beyond.
      </div>

      <Link to={"/Jobs"}>
        <button className="p-4 bg-purple-400 rounded-xl mt-4 mb-4 hover:bg-indigo-400">
          Explore Jobs
        </button>
      </Link>
    </div>
  );
}

export default Home;
