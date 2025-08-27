import React from "react";
import { Zap, Braces, RefreshCw } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Zero JavaScript knowledge required",
      description:
        "Build interactive features using only HTML attributes. No JavaScript knowledge required.",
      icon: "⚡",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Lightweight",
      description:
        "Small footprint, fast loading, lightweight framework with minimal footprint. Perfect for rapid prototyping.",
      icon: "🚀",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Intuitive Syntax",
      description:
        "All attributes end with 'z' for easy recognition. Simple and memorable.",
      icon: "🎯",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 min-h-[400px] lg:h-[600px]">
          {/* Left side: 2 small cards stacked */}
          <div className="flex flex-col gap-6 md:gap-8 order-2 lg:order-1">
            {/* Small card 1 */}
            <div className="bg-black text-white shadow-[2px_2px_3px_1px_#71eaff]  hover:shadow rounded-xl p-4 md:p-6  transition-all duration-300 flex-1">
              <div className="mb-3 md:mb-4">
                <Braces className="w-10 h-10 md:w-12 md:h-12 text-[#71eaff]" />
              </div>
              <h1 className="text-lg md:text-2xl hero-font font-light mb-2 md:mb-3">
                Zero JavaScript knowledge required
              </h1>
              <p className="text-sm md:text-base leading-relaxed">
                Build interactive features using only HTML attributes. No
                JavaScript knowledge required.
              </p>
            </div>

            {/* Small card 2 */}
            <div className="bg-black text-white rounded-xl shadow-[2px_2px_3px_1px_#3cff52] hover:shadow p-4 md:p-6  transition-all duration-300 flex-1">
              <div className="mb-3 md:mb-4">
                <Zap className="w-10 h-10 md:w-12 md:h-12 text-[#3cff52]" />
              </div>
              <h1 className="text-lg md:text-2xl font-light mb-2 md:mb-3">
                Lightweight & Fast
              </h1>
              <p className="text-sm md:text-base leading-relaxed">
                Small footprint, fast loading, lightweight framework with
                minimal footprint. Perfect for rapid prototyping.
              </p>
            </div>
          </div>

          {/* Right side: 1 tall card */}
          <div className="bg-black text-white shadow-[3px_3px_4px_2px_#fafa10] hover:shadow rounded-xl p-6 md:p-8  transition-all duration-300 flex flex-col justify-center order-1 lg:order-2 min-h-[300px] lg:min-h-0">
            <div className="mb-4 md:mb-6">
              <RefreshCw className="w-12 h-12 md:w-20 md:h-20 text-yellow-500" />
            </div>
            <h3 className="text-2xl md:text-3xl hero-font font-light mb-4 md:mb-6">
              State Management on the Fly
            </h3>
            <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              Built-in state management with letz, getz, and setz attributes. No
              complex setup or boilerplate code required.
            </p>
            <div className="bg-gray-50 rounded-lg p-3 md:p-4 overflow-x-auto">
              <code className="text-xs md:text-sm text-gray-700 whitespace-nowrap">
                {'<input letz="name" />'}
                <br />
                {'<p>Hello <span getz="name"></span>!</p>'}
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
