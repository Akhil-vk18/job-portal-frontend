import React, { useEffect, useState } from "react";
import { getAllJobs } from "../services/JobServices";
import JobCard from "./JobCard";

function JobList() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    async function fetchJobs() {
      try {
        const data = await getAllJobs();
        setJobs(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchJobs();
  }, []);

  return (
    <div className="">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
        
      ))
      
      }
    </div>
  );
}

export default JobList;
