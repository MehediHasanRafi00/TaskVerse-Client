import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";


const images = [
  "https://www.upwork.com/att/download/portfolio/persons/uid/1394948321970139136/profile/projects/files/4b674d48-20ad-4d50-bdaf-1e15f9429fb9",
  "https://www.upwork.com/att/download/portfolio/persons/uid/1559111323520700416/profile/projects/files/fee8d083-eb15-417f-8040-75040ce8c24c",
  "https://www.upwork.com/att/download/portfolio/persons/uid/424213781807923200/profile/projects/files/dccd1421-6082-4382-b501-dc1f2458f824",
  "https://www.upwork.com/att/download/portfolio/persons/uid/1930510942944320022/profile/projects/files/094b9681-747b-4e95-936b-ad7804321551",
  "https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/59c9b3b161773e3f841c376d13d41e9b?response-content-disposition=inline%3B%20filename%3D%22image_large%22%3B%20filename%2A%3Dutf-8%27%27image_large&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCFu2xckJ1P4pFKgKoO4har2EtRIwHu6WrHqBJjjPx1wgIgfAhXzXxon70uT%2F0%2FC6r9bj617qQhyucwnmJPMhkNm2gqmwUI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw3Mzk5MzkxNzM4MTkiDOOaJBRe0pTMwPYt3CrvBC%2BHsG1ReSmMLbfhwUHH2SytNZZdyFX0gZnCRi9%2F73JAtmO%2BC%2FJ3nkpBOkYjfJFimzyWReuDtESjS1nQNrkSaF9V5jgDwXDZUFLsaohteBxGK22UJXF3nMXnScYtkvxTNDl2yuLvGdi6OlkrNnpBx%2Bnw98TNyMWCAn%2FKyfurAYTEGh0bxvAIvvGHmwdDIE7TH6muVq5yN%2F1gfHh3RZpdacNBmgMbnJca73IxdFre2wsLdaXfjytWwzDacFv6205GYidNafFj6hL1Q5xbCp75YtuS%2FdEXMQv%2B2QezocLrVPltxk2LCzuGrwV%2BSTS97PiI6185Z9JsB3QqTiv%2Fm90MNsihOt3D1OfruXqWE%2FKs6vJ56YPodC7jXU%2BH2ZjBGM6N9y2bMh%2FFuG3B5hBGhIT6do50oc3YTbe0loFmEmbofefAIPXmPdRqcaqybY2Ca90ZD8eu25aqT1pLUQNqLoVu8iBGe66Z5E35AANG9GteeyQMb5UXqPaVYFANIq9JumEAG9h5EJfSLehHG7luctDIzThJq5JW20s8Zar4KKFSG1HY1ZdzwQTG9GAh7PMERqibnErlucUiFEBT1%2BtH5l%2B2NteBoHr3Ihto65Vdmw3CtXHI4oPh8O8gM86Ljszzk%2FV67oHxJX9US0nuUSZ2TSlypLd%2Bmk4xjDlVKN%2BykQwthw8VaHlvhTKBehSnQeT2NO7hlfiemHe%2FgvlXou3%2FM4tEV084zW3jw829IuJBysTOVx66ibvA0860TaOYsAfX3Q6WNfi6A5WAcw1CpQMPDEHU5YVmlp%2BiRWNIzwOk8qQUkbHc0O1Y7e0kaoKrFhqPwYBFMLfaw8gGOpkBFryqRIS2%2BKTuv5XP8V1%2BXiTHDcTJjgU5a1wcEBhqdM%2B6IjUbg7%2BfmdLDzjlvFZQBmyfGCT9q8qUWfVK%2Bel9aVj%2Fcs8QPO7lkyofP9f%2FPg7amEsr3G0MjneBqQ%2BVVH8zGZ6ircm%2BjfMf6%2FknEy1X3sG8fwDLVLoGqCYSrQYQekmihMOvPwcufiRTxplxb7AoOCMcDPyUfx26K&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20251109T201858Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1799&X-Amz-Credential=ASIA2YR6PYW5WFCEQ6T5%2F20251109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=cf81e1fe167ce76d69b51e8faec8f81e85d0f3c673164670f7c34f71370b5d0b",
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
