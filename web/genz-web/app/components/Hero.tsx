import React from "react";
import CodeCard from "./CodeCard";

const Hero = () => {
  return (
    <section className="relative items-center justify-center min-h-[100vh] px-6 py-12 md:pt-20 lg:pt-24">
      <div className="text-left mt-15 md:text-center">
        <h1 className="text-5xl lg:text-7xl lg:px-25 font-light hero-font leading-tight mb-6">
          Zero JavaScript <br />{" "}
          <span className="highlight-text">Knowledge</span>, Infinite <br />{" "}
          <span className="gradient-text">Possibilities</span>
        </h1>
        <p className="md:text-xl md:px-50 text-gray-200">
          Build interactive web experiences using nothing but HTML attributes,
          <br />
          add z-attributes to bring your pages to life
        </p>
      </div>
      <div>
        <CodeCard />
      </div>
    </section>
  );
};

export default Hero;
