import React from "react";

function JobCard({ job }) {
  console.log(job);

  return (
    <div className="w-full">
      <div className="bg-indigo-100 p-4 shadow-md rounded-lg flex flex-col justify-between mb-4 h-full">
        <h2 className="font-bold text-xl text-indigo-700">{job.title}</h2>
        <p className="mt-1 text-indigo-500 font-semibold">
          {job.companyname} • {job.location}
        </p>
        <p className="mt-2">
          <strong>Experience</strong>:{job.experience}
        </p>
        <p className="mt-1">
          <span className="font-semibold">Skills</span>:{job.requirements}
        </p>
        <div className="mt-3">
          <a
            href={job.applylink}
            rel="noopener noreferrer"
            target="_blank"
            className=" bg-indigo-600 text-white font-medium inline-block  rounded-lg px-4 py-2   "
          >
            Details
          </a>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
