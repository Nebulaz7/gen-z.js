"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Contribute = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative w-[80vw] mx-auto my-5 rounded-4xl bg-gradient-to-b shadow-[4px_4px_0px_0px_#fafa10] from-gray-100 to-gray-200"
    >
      <div className="relative flex flex-col items-center justify-center px-6 py-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h2 className="hero-font text-3xl md:text-4xl lg:text-6xl font-light leading-tight text-black mb-6">
            Want to contribute?
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-black pb-4 max-w-3xl mx-auto leading-relaxed">
            Join our community and help make this project better, contribute
            code, documentation, or ideas to make to help this project grow.
          </p>
          <button className="text-[#f2f2f2] cursor-pointer bg-[#000000] px-4 py-2 ml-3 mt-2 rounded-full shadow-[2px_2px_0px_0px_#fafa10] hover:shadow-[1px_1px_0px_0px_#fafa10] hover:scale-90 transition duration-300">
            Open source
            <ExternalLink className="inline-block ml-1 mb-1" size={22} />
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Contribute;
