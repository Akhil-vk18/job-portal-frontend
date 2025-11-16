import React from 'react'
import { useState,useEffect } from 'react';
import JobList from '../components/JobList'
import { getAllJobs,getByTitle } from "../services/JobServices";
import SearchBar from '../components/SearchBar';
function Job() {
   
  return (
    <div className='p-10'>
    
      <JobList />
    </div>
  )
}

export default Job