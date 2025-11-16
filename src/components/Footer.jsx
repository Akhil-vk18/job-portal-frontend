import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="bg-indigo-600 text-indigo-100  py-5 px-6 mt-10  ">
      <div className=" flex  justify-between items-center">
        <p className="text-center  text-sm">
          © {new Date().getFullYear()}
          <span className="font-semibold"> Job Portal </span>• Built with ❤️
          using Spring Boot & React.
        </p>
        <div className="flex gap-4 ">
          <a
            href="https://github.com/Akhil-vk18"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/akhil-santhosh-1b381228a/"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:text-white"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
