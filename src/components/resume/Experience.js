import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
       <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Next-JS Developer"
            subTitle="Edify College Of IT- (2025- Present)"
            result="Internship"
            des="
Completed a 3-month frontend internship at Tech-Hub Join them as a Next-JS Developoer, learned React.js, Tailwind CSS, and JavaScript. Gained skills in building user-friendly interfaces and creating interactive web applications."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Tech-Hub - (Nov 2023- Feb 2024)"
            result="Internship"
            des="Completed a 3-month frontend internship at Techsa Dev and Joined them. Acquired skills in building user-friendly interfaces and collaborating effectively with teams"
          />
        
        </div>
      </div>
   
  
    </motion.div>
  );
};

export default Experience;
