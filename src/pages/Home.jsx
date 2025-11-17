import React, { useEffect, useState } from "react";
import { Await, Link } from "react-router-dom";
import { getAllJobs } from "../services/JobServices";
import JobCard from "../components/JobCard";
function Home() {
  const [jobs, setjobs] = useState([]);
  useEffect(() => {
    async function latestJobs() {
      try {
        const data = await getAllJobs();
        setjobs(data);
      } catch (error) {
        console.log(error);
      }
    }
    latestJobs();
  }, []);
  const latestjobs = jobs.slice(0, 4);
  return (
    <div className=" text-center m-5">
      <p className="font-extrabold text-gray-800 text-4xl mt-20 ">Find Your Dream IT Jobs</p>
      <div className="p-2 text-xl font-semibold mt-5 text-gray-600">
        Stay updated with the newest openings from Kerala’s top IT hubs —
        Infopark and Technopark.
      </div>
      <div className="p-2 text-gray-500">
        Your one-stop portal for IT jobs in Kochi, Trivandrum, and beyond.
      </div>
      
      <div className="grid grid-cols-4 gap-4  max-w-6xl mx-auto  mt-10">
        {latestjobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      <div className="mt-10">
        <Link to={"/Jobs"}>
          <button className="py-3 px-6 bg-indigo-500 text-white font-semibold shadow-md text-lg rounded-xl hover:text-indigo-100 transition ">
            Explore Jobs
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
