import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2008 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BS in Computer Science"
            subTitle="University Of Central Punjab, Faisalabad Campus (2022 - Present)"
            result="3.45/4"
            des="In my Bachelor degree in Computer Science, I sharpened programming skills and explored database management and software engineering. Hands-on projects provided practical experience in building software solutions and grasping complex algorithms."
          />
          <ResumeCard
            title="ICS"
            subTitle="Student's INN College Faisalabad (2020 - 2022)"
            result="74%"
            des=" I specialized in mathematics, delving into advanced topics like calculus, algebra, and Computer Science, developing analytical and problem-solving skills."
          />
          <ResumeCard
            title="Matriculation"
            subTitle="The Arqam High School (2008 - 2019)"
            result="81%"
            des="During my school education, I focused on computer fundamentals, gaining a strong understanding of programming concepts and basic software applications. "
          />
        </div>
      </div>
      {/* part Two */}

    
    </motion.div>
  );
};

export default Education;
