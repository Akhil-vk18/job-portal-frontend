import React from "react";

function JobCard({ job }) {
  console.log(job);

  return (
    <div className="">
      <div className="bg-green-300 p-3 border-b-2 rounded-md mb-4">
        <h2 className="font-bold text-lg text-indigo-500">{job.title}</h2>
        <p className="mt-1 text-indigo-500 font-semibold text-base">
          {job.companyname} • {job.location}
        </p>
        <p className="mt-1">
          <strong>Experience</strong>:{job.experience}
        </p>
        <p className="mt-1">
          <strong>Skills</strong>:{job.requirements}
        </p>
        <a
          href={job.applylink}
          rel="noopener noreferrer"
          target="_blank"
          className="bg-blue-400 inline-block  rounded-lg  p-2 "
        >
          Details
        </a>
      </div>
    </div>
  );
}

export default JobCard;
