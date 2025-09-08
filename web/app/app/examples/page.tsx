import React from "react";
import Navbar from "../components/Navbar";
import GrainOverlay from "../Animations/GrainOverlay";
import "../globals.css";

const page = () => {
  return (
    <div className="grid-background min-h-screen">
      <GrainOverlay />
      <Navbar />
      <div className="relative items-center justify-center min-h-[100vh] px-6 py-12 pb-8 md:pt-24 lg:pt-34">
        <div className="mt-15 text-center">
          <h1 className="text-5xl lg:text-6xl lg:px-25 font-light hero-font leading-tight mb-6 gradient-text">
            Project Examples
          </h1>
          <p className="md:text-xl md:px-50 text-gray-200">
            View some projects built with gen-z.js.
          </p>
        </div>
        {/* Project containers */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Project 1 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Example Project 1
            </h2>
            <p className="text-gray-300 mb-4">
              A brief description of Example Project 1 built with gen-z.js.
            </p>
            <a
              href="#"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
