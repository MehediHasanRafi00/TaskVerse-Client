import React, { use } from "react";
import { motion } from "framer-motion";
import JobCard from "./JobCard";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const LatestJobs = ({latestJobsPromise}) => {
    const data = use(latestJobsPromise)

  return (
    <div className="container mx-auto my-8 px-5">
      <motion.h2
        className="text-3xl font-semibold text-black text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Latest Jobs 
      </motion.h2>
      <motion.p
        className="mb-5 text-gray-700 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Browse and apply for available tasks on TaskVerse
      </motion.p>

      <motion.div
        className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {data.map((job) => (
          <motion.div key={job._id} variants={cardVariants}>
            <JobCard job={job} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LatestJobs;
