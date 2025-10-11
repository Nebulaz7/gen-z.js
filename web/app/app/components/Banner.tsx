"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, XCircle } from "lucide-react";

interface BannerProps {
  onClose?: () => void;
}

const Banner = ({ onClose }: BannerProps) => {
  const [isVisible, setIsVisible] = React.useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#fafa10] via-yellow-300 to-yellow-400 text-black">
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
          {/* Banner content */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center flex-1 gap-2 sm:gap-2 text-xs sm:text-sm md:text-base w-full sm:w-auto">
            <p className="font-medium flex flex-wrap items-center gap-1">
              <span className="flex items-center gap-1 whitespace-nowrap">
                🚀{" "}
                <span className="text-[10px] sm:text-xs bg-black/20 px-1.5 py-0.5 rounded-full">
                  New
                </span>
              </span>
              <span className="hidden sm:inline">
                Introducing CLI support for GenZ.js,
              </span>
              <span className="sm:hidden">CLI support for GenZ.js</span>
              <code className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-black/10 rounded text-[10px] sm:text-xs md:text-sm font-mono whitespace-nowrap">
                npx create-genz-app
              </code>
            </p>
            <Link
              href="/docs/installation"
              className="inline-flex items-center gap-1 font-semibold hover:underline underline-offset-4 transition-all hover:gap-2 text-xs sm:text-sm whitespace-nowrap"
            >
              View docs
              <ArrowRight className="inline-block mt-1 w-3 h-3 sm:w-4 sm:h-4" />
            </Link>
          </div>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 sm:relative sm:top-auto sm:right-auto flex-shrink-0 cursor-pointer p-1 hover:bg-black/10 rounded-full transition-colors"
            aria-label="Close banner"
          >
            <XCircle className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
