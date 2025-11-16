import React, { useEffect, useState } from "react";
import { getAllJobs,getByTitle } from "../services/JobServices";
import JobCard from "./JobCard";
import SearchBar from "./SearchBar";
function JobList() {
 const [jobs, setJobs] = useState([]);
 const [searchTerm, setSearchTerm] = useState("");
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
 async function search() {
 
  console.log(searchTerm);
   const searchedData = await getByTitle(searchTerm);
   setJobs(searchedData);
 }
  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} search={search}/>
      <div className="grid grid-cols-4 gap-4">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
}

export default JobList;
