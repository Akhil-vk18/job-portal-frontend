import React from 'react'

function About() {
  return (
    <div className="px-5 py-16 max-w-5xl mx-auto">
      {/* title */}
      <h1 className="text-4xl text-center font-bold text-indigo-600 mb-6">
        About Kerala IT Job Portal
      </h1>
      {/* subheading */}
      <p className="text-center text-lg mb-10 text-gray-700">
        Your trusted platform for finding the latest job openings from Infopark,
        Technopark
      </p>
      {/* section1 */}
      <div className=" bg-white shadow-md rounded-xl p-6 mb-6 ">
        <h2 className="text-2xl font-semibold text-indigo-500 mb-4">
          {" "}
          Our Mission
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to connect talented individuals with the best IT
          opportunities across Kerala. We collect job openings from verified
          company sources including Infopark, Technopark, and other major tech
          hubs. Whether you're a fresher or an experienced developer, this
          platform helps you discover opportunities faster.
        </p>
      </div>
      {/* section 2 */}
      <div className=" bg-white shadow-md rounded-xl p-6 mb-6 ">
        <h2 className="text-2xl font-semibold text-indigo-500 mb-4">
          Why Choose Our Portal
        </h2>
        <ul className="list-disc ml-6 text-gray-700 leading-relaxed space-y-1">
          <li>Real-time job updates from verified IT companies</li>
          <li>Easy-to-use search and filtering system</li>
          <li>Clean and distraction-free job browsing experience</li>
          <li>Shows latest jobs based on posted date</li>
          <li>Fresher-friendly & experienced-level jobs available</li>
        </ul>
      </div>
      {/* section 3 */}
      <div className=" bg-white shadow-md rounded-xl p-6 mb-6 ">
        <h2 className="text-2xl font-semibold text-indigo-500 mb-4">
          Who We Are
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          This portal is created by Akhil Santhosh, a Computer Science
          Engineering student who loves building simple and useful applications.
          I’m interested in Java, Spring Boot, React, and backend development.
          This website was made to help people easily find genuine IT job
          opportunities from Infopark, Technopark, and other major IT hubs in
          Kerala.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The goal is simple — to connect people with genuine job openings from
          Infopark, Technopark, and leading IT companies across Kerala. As the
          platform continues to grow, more features and enhancements will be
          added to make job searching smoother and smarter for everyone.
        </p>
      </div>
    </div>
  );
}

export default About    