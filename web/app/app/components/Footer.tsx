import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-8 px-10 bg-black/40 backdrop-blur-xl border-t border-white/10">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Copyright Text */}
        <div className="text-gray-400 text-sm  mb-4 sm:mb-0">
          <h1 className="font-md flex text-center text-white text-xl mb-4">
            <Image
              src="/logo.svg"
              alt="GenZ Logo"
              width={40}
              height={30}
              className="object-contain"
            />
            GenZ.js
          </h1>
          <h1 className="mb-2 text-gray-200">
            A framework created with 💛 by{" "}
            <a href="https://x.com/Nebulaz7" className="text-yellow-500">
              Peters Joshua
            </a>
          </h1>
          © 2025 GenZ.js
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-col sm:flex-row sm:text-center space-y-2 sm:space-y-0 sm:space-x-4">
          {/* Twitter/X */}
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 items-center justify-center text-gray-200 hover:text-white transition-all duration-300"
          >
            Github
          </Link>

          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 items-center justify-center text-gray-200 hover:text-white transition-all duration-300"
          >
            Docs
          </Link>

          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 items-center justify-center text-gray-200 hover:text-white  transition-all duration-300"
          >
            Examples
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
