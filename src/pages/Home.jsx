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
      <p className="font-bold text-3xl mt-20 ">Find Your Dream IT Jobs</p>
      <div className="p-2 text-xl font-semibold mt-5">
        Stay updated with the newest openings from Kerala’s top IT hubs —
        Infopark and Technopark.
      </div>
      <div className="p-2 font-semibold text-lg">
        Your one-stop portal for IT jobs in Kochi, Trivandrum, and beyond.
      </div>
      <div className="grid grid-cols-4 gap-4 pt-5">
        {latestjobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
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
