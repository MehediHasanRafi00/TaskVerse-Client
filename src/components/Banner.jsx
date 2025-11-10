import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";


const images = [
  "https://www.upwork.com/att/download/portfolio/persons/uid/1394948321970139136/profile/projects/files/4b674d48-20ad-4d50-bdaf-1e15f9429fb9",
  "https://www.upwork.com/att/download/portfolio/persons/uid/1559111323520700416/profile/projects/files/fee8d083-eb15-417f-8040-75040ce8c24c",
  "https://i.ibb.co.com/bgDFFmxn/watch-now-2.png",
  "https://i.ibb.co.com/p68BRpzV/watch-now-1.png",
  "https://www.upwork.com/att/download/portfolio/persons/uid/1394948321970139136/profile/projects/files/c708e0a0-73ae-4575-8381-c229709868ae",
];

const BannerColumn = ({ direction = "down" }) => {
  const width = 500;
  const height = 300;
  const gap = 16;
  const heightPerImage = height + gap;
  const totalHeight = images.length * heightPerImage;

  const loopImages = [...images, ...images];

  return (
    <div className="overflow-hidden flex flex-col gap-4">
      <motion.div
        animate={{
          y: direction === "down" ? [0, -totalHeight] : [-totalHeight, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col gap-4"
      >
        {loopImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="banner"
            className="object-cover rounded-xl border border-secondary shadow-md transition-shadow hover:shadow-[0_0_2px_#f7ce3e,0_0_4px_#f7ce3e]"
            style={{ width: `${width}px`, height: `${height}px` }}
          />
        ))}
      </motion.div>
    </div>
  );
};

const Banner = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Gradient overlay (brand color with fade) */}
      <div className="absolute inset-0 bg-linear-to-b from-[#042A2B]/80 via-[#0A7373]/50 to-transparent"></div>

      {/* Title & Subtitle */}
      <div className="absolute z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white  drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]">
          Turn Your Skills Into Opportunity
        </h1>
        <p className="text-xl md:text-2xl text-[#E0F2F1] drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
          Work with global clients and build the career you deserve.
        </p>
        <div className="space-x-3 mt-4">
            <Link to={'/all-jobs'} className="btn btn-primary btn-lg">All Jobs</Link>
            <Link to={'/add-job'} className="btn btn-secondary text-primary btn-lg">Create a Job</Link>
        </div>
      </div>

      {/* Image Columns */}
      <div className="absolute inset-0 flex justify-center gap-4 px-2 md:px-8">
        {[0, 1, 2, 3, 4].map((i) => (
          <BannerColumn key={i} direction={i % 2 === 0 ? "down" : "up"} />
        ))}
      </div>
    </section>
  );
};

export default Banner;
