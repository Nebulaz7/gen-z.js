"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GrainOverlay from "../Animations/GrainOverlay";
import "../globals.css";
import { ArrowUpRight } from "lucide-react";

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
          <div className="backdrop-blur-lg rounded-xl pt-2 p-6 bg-gradient-to-b shadow-[4px_4px_0px_0px_#fafa10] from-gray-100 to-gray-200">
            <Image
              src="/counter-img.png"
              alt="Example Project 1"
              width={400}
              height={200}
              className="w-full h-48 object-cover rounded-lg mb-4 border-1 border-black"
            />
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Counter App
            </h2>
            <p className="text-black mb-7">
              A simple counter application built with gen-z.js.
            </p>
            <button
              onClick={() => {
                window.location.href =
                  "https://codepen.io/Nebulaz7/pen/bNVZGqb";
              }}
              className="text-[#f2f2f2] cursor-pointer bg-[#000000] px-4 py-2 rounded-full shadow-[2px_2px_0px_0px_#fafa10] hover:shadow-[1px_1px_0px_0px_#fafa10] hover:scale-90 transition duration-300"
            >
              View Project{" "}
              <ArrowUpRight className="inline-block ml-1 mb-1" size={22} />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
