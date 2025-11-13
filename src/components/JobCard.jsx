import React from 'react'

function JobCard({job}) {
    console.log(job);
  return (
    <div>
      <h2>{job.title}</h2>
    <p>{job.requirements}</p>
    </div>
  );
}

export default JobCard