"use client";
import React, { useEffect, useState } from "react";
import { color, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { text } from "stream/consumers";

// Define variants for the blinking cursor (typed)
const cursorVariants: Variants = {
  hidden: { opacity: 0 },
  blink: {
    opacity: [0, 1, 0],
    transition: {
      duration: 0.9,
      repeat: Infinity, // loop forever
      repeatType: "loop", // helps some versions' typings
      ease: "linear",
    },
  },
};

const CodeCard = () => {
  // Typewriter setup
  const codeLines = [
    {
      num: 1,
      segments: [{ text: "<!DOCTYPE html>", color: "#6a7282" }],
    },
    {
      num: 2,
      segments: [
        { text: "<", color: "#d1d5dc" },
        { text: "html", color: "#fb64b6" },
        { text: ">", color: "#d1d5dc" },
      ],
    },
    {
      num: 3,
      segments: [
        { text: "  <", color: "#d1d5dc" },
        { text: "head", color: "#fb64b6" },
        { text: ">", color: "#d1d5dc" },
      ],
    },
    {
      num: 4,
      segments: [
        { text: "    <", color: "#d1d5dc" },
        { text: "title", color: "#fb64b6" },
        { text: ">", color: "#d1d5dc" },
        { text: "My Gen-Z App", color: "#f8f8f2" },
        { text: "</", color: "#d1d5dc" },
        { text: "title", color: "#fb64b6" },
        { text: ">", color: "#d1d5dc" },
      ],
    },
    {
      num: 5,
      segments: [
        { text: "  </", color: "#d1d5dc" },
        { text: "head", color: "#fb64b6" },
        { text: ">", color: "#d1d5dc" },
      ],
    },
    {
      num: 6,
      segments: [
        { text: "  <", color: "#d1d5dc" },
        { text: "body", color: "#fb64b6" },
        { text: ">", color: "#d1d5dc" },
      ],
    },
    {
      num: 7,
      segments: [
        { text: "    <", color: "#d1d5dc" },
        { text: "button", color: "#fb64b6" },
        { text: " ", color: "#f8f8f2" },
        { text: "alertz", color: "#ffb86c" }, // orange for Gen-Z attributes
        { text: "=", color: "#ff79c6" },
        { text: '"Hello World!"', color: "#f1fa8c" }, // yellow for strings
        { text: ">", color: "#d1d5dc" },
        { text: "Click me", color: "#f8f8f2" }, // white for content
        { text: "</", color: "#d1d5dc" },
        { text: "button", color: "#fb64b6" },
        { text: ">", color: "#d1d5dc" },
      ],
    },
    {
      num: 8,
      segments: [
        { text: "    <", color: "#d1d5dc" },
        { text: "script", color: "#fb64b6" },
        { text: " ", color: "#f8f8f2" },
        {
          text: "src=",
          color: "#ffb86c",
        }, // orange for Gen-Z attributes
        {
          text: '"https://cdn.jsdelivr.net/gh/Nebulaz7/gen-z.js@1.1.0/dist/gen-z.min.js"',
          color: "#f1fa8c",
        },
        { text: ">", color: "#d1d5dc" },
        { text: "</", color: "#d1d5dc" },
        { text: "script", color: "#fb64b6" },
        { text: ">", color: "#d1d5dc" },
      ],
    },
    {
      num: 9,
      segments: [
        { text: "  </", color: "##d1d5dc" },
        { text: "body", color: "#fb64b6" },
        { text: ">", color: "##d1d5dc" },
      ],
    },
    {
      num: 10,
      segments: [
        { text: " </", color: "##d1d5dc" },
        { text: "html", color: "#fb64b6" },
        { text: ">", color: "##d1d5dc" },
      ],
    },
  ];

  const [visibleChars, setVisibleChars] = useState(0);

  //   useEffect(() => {
  //     if (visibleChars >= fullText.length) return;
  //     const id = setTimeout(() => setVisibleChars((c) => c + 1), 18); // typing speed
  //     return () => clearTimeout(id);
  //   }, [visibleChars, fullText.length]);

  //   const displayed = fullText.slice(0, visibleChars);

  return (
    <section id="features" aria-labelledby="features-label" className=" py-6">
      <div className="min-w-[90vw] items-center px-5 justify-center">
        {/* Demo section */}
        <div className="w-full">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/10 to-yellow-500/20 rounded-2xl blur-xl" />
            <div className="relative border-0.5 border-[#fafa10] bg-gray-900 rounded-xl p-6 overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="ml-4 text-gray-400 text-sm">index.html</span>
              </div>
              <pre className="text-sm md:text-md text-gray-300 bg-gray-700/50 p-3 rounded-lg whitespace-pre-wrap break-words leading-relaxed min-h-[10rem]">
                <code>
                  {codeLines.map((line) => (
                    <div key={line.num}>
                      <span style={{ color: "#6a7282" }}>{line.num}</span>{" "}
                      {line.segments?.map((segment, index) => (
                        <span key={index} style={{ color: segment.color }}>
                          {segment.text}
                        </span>
                      ))}
                    </div>
                  ))}

                  {/* Blinking cursor */}
                  {/* <motion.span
                    aria-hidden="true"
                    className="inline-block w-2 -mb-[2px] bg-gradient-to-r from-yellow-200 to-yellow-300"
                    variants={cursorVariants}
                    initial="hidden"
                    whileInView="blink"
                    viewport={{ once: true }}
                    style={{ height: "1em", marginLeft: "2px" }}
                  /> */}
                </code>
              </pre>
              <button className="text-black cursor-pointer bg-[#f2f2f2] px-4 py-2 ml-3 mt-2 rounded-full shadow-[2px_2px_0px_0px_#fafa10] hover:shadow-[1px_1px_0px_0px_#fafa10] hover:scale-90 transition duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeCard;
