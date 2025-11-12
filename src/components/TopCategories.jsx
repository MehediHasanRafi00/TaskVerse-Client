import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Paintbrush,
  PenTool,
  Video,
  Megaphone,
  Cpu,
  Briefcase,
  Globe,
  BarChart,
  Wrench,
  Shield,
  Clock,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";

// ============ TOP CATEGORIES COMPONENT ============
const categories = [
  {
    name: "Web Development",
    icon: Code,
    color: "from-blue-500 to-blue-600",
    jobs: "1,234",
  },
  {
    name: "Graphic Design",
    icon: Paintbrush,
    color: "from-pink-500 to-rose-600",
    jobs: "856",
  },
  {
    name: "Content Writing",
    icon: PenTool,
    color: "from-purple-500 to-purple-600",
    jobs: "642",
  },
  {
    name: "Video Editing",
    icon: Video,
    color: "from-red-500 to-red-600",
    jobs: "523",
  },
  {
    name: "Digital Marketing",
    icon: Megaphone,
    color: "from-orange-500 to-orange-600",
    jobs: "789",
  },
  {
    name: "Software Testing",
    icon: Cpu,
    color: "from-green-500 to-green-600",
    jobs: "456",
  },
  {
    name: "Project Management",
    icon: Briefcase,
    color: "from-indigo-500 to-indigo-600",
    jobs: "398",
  },
  {
    name: "SEO Optimization",
    icon: Globe,
    color: "from-teal-500 to-teal-600",
    jobs: "612",
  },
  {
    name: "Data Analysis",
    icon: BarChart,
    color: "from-cyan-500 to-cyan-600",
    jobs: "734",
  },
  {
    name: "Technical Support",
    icon: Wrench,
    color: "from-yellow-500 to-yellow-600",
    jobs: "445",
  },
];

const TopCategories = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-semibold text-primary">
              Popular Categories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Explore Top{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Categories
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the most in-demand job categories and connect with
            opportunities worldwide
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative bg-white p-6 rounded-2xl shadow-md hover:shadow-[0_8px_30px_rgba(0,0,0,0.12),0_0_20px_rgba(247,206,62,0.15)] border border-gray-100 hover:border-secondary/30 transition-all duration-300 overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all duration-300">
                      <Icon
                        className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300"
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Name */}
                    <h3 className="font-bold text-base text-gray-900 group-hover:text-white transition-colors duration-300 mb-2">
                      {cat.name}
                    </h3>

                    {/* Job Count */}
                    <p className="text-sm text-gray-500 group-hover:text-white/80 transition-colors duration-300">
                      {cat.jobs} jobs
                    </p>
                  </div>

                  {/* Arrow on Hover */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="btn bg-secondary text-primary hover:bg-secondary/90 border-none shadow-lg hover:shadow-[0_0_30px_rgba(247,206,62,0.4)] transition-all duration-300 px-8">
            View All Categories
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TopCategories;
