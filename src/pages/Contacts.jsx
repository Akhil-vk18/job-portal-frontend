import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
function Contacts() {
  return (
    <div className="mx-auto px-6 py-12 text-center max-w-3xl">
      <h1 className="font-bold text-indigo-600   text-4xl mb-6">Contact Me</h1>
      <p className="text-lg  mb-8">
        If you have any suggestion , questions or feedbacks, feel free to reach
        out.
      </p>
      <div className="bg-white p-8 shadow-lg border border-indigo-200 rounded-xl">
        <h2 className="font-semibold text-2xl text-indigo-700 mb-1">
          Software Engineer
        </h2>
        <p className="text-xl font-medium text-gray-800">Akhil Santhosh</p>
        <p className="mt-1 text-gray-600">
          CSE | Java & Spring Boot Enthusiast
        </p>
        {/* email */}
        <div className="flex justify-center  items-center gap-3 mt-3">
          <FaEnvelope size={22} className="text-indigo-500" />

          <a
            href="mailto:connectwithakhilsanthosh@gmail.com"
            className="text-indigo-700 hover:underline"
          >
            connectwithakhilsanthosh@gmail.com
          </a>
        </div>
        {/* social proiles */}

        <h4 className="text-gray-700 mt-3 text-lg font-semibold underline">
          Social Profiles
        </h4>
        <div className="flex justify-center gap-3 mt-1">
          <FaLinkedin size={24} className=" text-[#0077B5]" />

          <a
            className="text-indigo-700 text-center hover:underline font-semibold"
            href="https://www.linkedin.com/in/akhil-santhosh-1b381228a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn-Akhil Santhosh
          </a>
        </div>

        <div className="flex justify-center gap-3 mt-3">
         
            <FaGithub size={24} className="text-[#181717]" />
          
        
            <a
              className="text-indigo-700 text-center hover:underline font-semibold"
              href="https://github.com/Akhil-vk18"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub-Akhil-vk18
            </a>
          
        </div>
      </div>
    </div>
  );
}

export default Contacts;
