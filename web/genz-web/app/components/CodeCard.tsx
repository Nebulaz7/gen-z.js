"use client";
import React, { useEffect, useState } from "react";
import { Mic } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

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
  const fullText = `<!DOCTYPE html>
<html>
  <head>
    <title>My Gen-Z App</title>
  </head>
  <body>
    <button alertz="Hello World!">Click me</button>
    <script src="https://cdn.jsdelivr.net/gh/Nebulaz7/gen-z.js@0.0.1/dist/gen-z-v.0.0.1.js"></script>
  </body>
</html>`;
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    if (visibleChars >= fullText.length) return;
    const id = setTimeout(() => setVisibleChars((c) => c + 1), 18); // typing speed
    return () => clearTimeout(id);
  }, [visibleChars, fullText.length]);

  const displayed = fullText.slice(0, visibleChars);

  return (
    <section
      id="features"
      aria-labelledby="features-label"
      className="px-3 py-6 sm:py-12"
    >
      <div className="min-w-[90vw] items-center px-5 justify-center">
        {/* Demo section */}
        <div className="w-full">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-2xl blur-2xl" />
            <div className="relative border-2 border-[rgba(250, 250, 16, 0.922)] bg-gray-900 rounded-xl p-6 overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="ml-4 text-gray-400 text-sm"></span>
              </div>
              <pre className="text-lg text-gray-300 bg-gray-700/50 p-3 rounded-lg whitespace-pre-wrap break-words leading-relaxed min-h-[10rem]">
                <code>
                  {displayed}
                  <motion.span
                    aria-hidden="true"
                    className="inline-block w-2 -mb-[2px] bg-gradient-to-r from-indigo-400 to-purple-400"
                    variants={cursorVariants}
                    initial="hidden"
                    whileInView="blink"
                    viewport={{ once: true }}
                    style={{ height: "1em", marginLeft: "2px" }}
                  />
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeCard;
