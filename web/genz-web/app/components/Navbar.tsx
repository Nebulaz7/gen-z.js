"use client";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Equal, X, ArrowUpRight, Rss, File } from "lucide-react";
import Link from "next/link";

const MotionLink = motion(Link);

const DoubleLineIcon = ({ size = 30, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 30 30"
    fill="none"
    className={className}
  >
    <rect x="4" y="9" width="22" height="2" rx="1" fill="currentColor" />
    <rect x="4" y="19" width="22" height="2" rx="1" fill="currentColor" />
  </svg>
);
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="fixed top-0 left-0 right-0 flex py-3 px-3 bg-[121212]/70 lg:bg-[#333333]/70 border-white border-b-1 m-0 lg:py-4 font-sm bg-primary backdrop-blur-xl z-30 lg:shadow-sm lg:shadow-yellow-600/50"
    >
      <nav className="flex justify-between items-center gap-5 w-full max-w-7xl px-2 md:px-6 h-[3.5rem] mx-auto">
        <h1 className="font-md text-white text-2xl">GenZ logo</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-300">
          <li>
            <MotionLink
              href="/"
              className="hover:text-white hover:bg-[#555555] px-3 py-1 hover:rounded-xl text-xl"
              layout
            >
              Docs
            </MotionLink>
          </li>
          <li>
            <MotionLink
              href="/"
              className="hover:text-white hover:bg-[#555555] px-3 py-1 hover:rounded-xl text-xl"
              layout
            >
              Blog
            </MotionLink>
          </li>
          <li>
            <MotionLink
              href="/"
              className="hover:text-white hover:bg-[#555555] px-3 py-1 hover:rounded-xl text-xl"
              layout
            >
              Github
            </MotionLink>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <motion.button
            className="bg-[var(--primary)] text-[1.1rem] text-black px-5 cursor-pointer py-2 rounded-full flex items-center gap-2 hover:bg-amber-300 transition duration-300"
            whileHover="hover"
            variants={{
              hover: { scale: 1.0 },
            }}
            layout
          >
            v1.0.0
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden lg:hidden text-white p-2 cursor-pointer"
        >
          <motion.div
            initial={false}
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? (
              <X size={30} className="hidden" />
            ) : (
              <DoubleLineIcon />
            )}
          </motion.div>
        </button>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <motion.div
        initial={{ x: "-100%", y: "-100%" }}
        animate={{
          x: isMenuOpen ? 0 : "-100%",
          y: isMenuOpen ? 0 : "-100%",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="absolute top-0 left-0 w-full md:hidden min-h-[50vh] bg-transparent z-30 flex flex-col"
      >
        {/* Menu Header */}
        <div className="flex justify-between bg-transparent items-center p-3">
          <h1 className="font-md text-white text-xl"></h1>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white p-2 cursor-pointer"
          >
            <X size={30} />
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex-1 bg-white pt-4  pb-0 rounded-2xl m-4 shadow-[2px_4px_0px_0px_#fafa10]">
          <ul className="flex flex-col gap-6 pl-6">
            <li className="gap-0">
              <Link
                href="/"
                className="text-2xl text-black border-b-2 border-black hover:text-3xl  transition-colors"
              >
                Docs
                <File className="inline-block ml-2" size={24} />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-2xl text-black border-b-2 border-black hover:text-3xl  transition-colors"
              >
                Github
                <ArrowUpRight className="inline-block ml-2" size={24} />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-2xl text-black border-b-2 border-black hover:text-3xl  transition-colors"
              >
                Blog
                <Rss className="inline-block ml-2" size={24} />
              </Link>
            </li>
            <li></li>
          </ul>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
