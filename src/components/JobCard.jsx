import React from 'react'

function JobCard({job}) {
    console.log(job);
  return (
    <div className='bg-blue-400 p-3'>
      <h2>{job.title}</h2>
    <p>{job.requirements}</p>
    </div>
  );
}

export default JobCard