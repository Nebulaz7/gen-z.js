import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-4 px-1 md:py-8 md:px-10 bg-black/40 backdrop-blur-xl border-t border-white/10">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Important Links */}
        <div className="flex flex-row sm:flex-row sm:text-center space-x-4 sm:space-x-4 space-y-0 sm:space-y-0 order-1 sm:order-2 mb-4 sm:mb-0">
          <Link
            href="https://github.com/Nebulaz7/gen-z.js"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 items-center justify-center text-gray-200 hover:text-white transition-all duration-300"
          >
            Github
          </Link>

          <Link
            href="/docs"
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

        {/* Copyright Text */}
        <div className="text-gray-400 text-sm order-2 sm:order-1">
          <h1 className="font-md flex text-left md:text-center text-white text-xl mb-4">
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
            <a href="https://x.com/joshpet77" className="text-yellow-500">
              Peters Joshua
            </a>
          </h1>
          © 2025 GenZ.js
        </div>
      </div>
    </footer>
  );
};

export default Footer;
