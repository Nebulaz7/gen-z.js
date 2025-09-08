import React from "react";
import Navbar from "../components/Navbar";
import GrainOverlay from "../Animations/GrainOverlay";
import "../globals.css";

const page = () => {
  return (
    <div className="grid-background min-h-screen">
      <GrainOverlay />
      <Navbar />
      <div className="relative items-center justify-center min-h-[100vh] px-6 py-12 pb-8 md:pt-20 lg:pt-34">
        <div className="text-left mt-15 md:text-center">
          <h1 className="text-5xl lg:text-6xl lg:px-25 font-light hero-font leading-tight mb-6 gradient-text">
            Project Examples
          </h1>
          <p className="md:text-xl md:px-50 text-gray-200">
            Build interactive web experiences using nothing but HTML attributes,
            <br />
            add z-attributes to bring your pages to life
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
