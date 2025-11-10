import React from "react";
import { motion } from "framer-motion";

const JobCard = ({ job }) => {
  const { title, summary, coverImage, category, description } = job;

  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer"
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 8px #f7ce3e, 0 0 15px #f7ce3e",
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="p-4 rounded-lg overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2" style={{ color: "#042A2B" }}>
          {title}
        </h2>
        <p className="text-gray-600 mb-3">
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>
        <span className="text-sm font-semibold badge badge-secondary text-gray-800 px-2 py-1 rounded">
          {category}
        </span>
      </div>
    </motion.div>
  );
};

export default JobCard;
