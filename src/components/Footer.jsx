import React from 'react'
import { FaLinkedin,FaGithub } from 'react-icons/fa';
export default function Footer() {
  return (
    <div className="bg-red-300 text-gray-500  py-5 px-4  ">
      <div className=" flex  justify-between">
        <p className="items-start text-sm">
          © {new Date().getFullYear()} Job Portal | Built with Spring Boot & React
        </p>
        <div className="items-end flex gap-5 ">
          <a
            href="https://github.com/Akhil-vk18"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <FaGithub size={25} />
          </a>
          <a
            href="www.linkedin.com/in/akhil-santhosh-1b381228a"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:text-black"
          >
            <FaLinkedin size={25} />
          </a>
        </div>
      </div>
    </div>
  );
}
