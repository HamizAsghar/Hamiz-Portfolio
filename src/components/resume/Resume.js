// import React, {  useState } from 'react'
// import Title from '../layouts/Title';
// import Education from './Education';
// import Skills from './Skills';
// import Achievement from './Achievement';
// import Experience from "./Experience"

// const Resume = () => {
//    const [educationData, setEducationData] = useState(true);
//    const [skillData, setSkillData] = useState(false);
//    const [experienceData, setExperienceData] = useState(false);
//    const [achievementData, setAchievementData] = useState(false);
//   return (
//     <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
//       <div className="flex justify-center items-center text-center">
//         <Title title="2+ YEARS OF EXPERIENCE" des="My Resume" />
//       </div>
//       <div>
//         <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
//           <li
//             onClick={() =>
//               setEducationData(true) &
//               setSkillData(false) &
//               setExperienceData(false) &
//               setAchievementData(false)
//             }
//             className={`${
//               educationData
//                 ? "border-designColor rounded-lg"
//                 : "border-transparent"
//             } resumeLi`}
//           >
//             Education
//           </li>
//           <li
//             onClick={() =>
//               setEducationData(false) &
//               setSkillData(true) &
//               setExperienceData(false) &
//               setAchievementData(false)
//             }
//             className={`${
//               skillData ? "border-designColor rounded-lg" : "border-transparent"
//             } resumeLi`}
//           >
//             Professional Skills
//           </li>
//           <li
//             onClick={() =>
//               setEducationData(false) &
//               setSkillData(false) &
//               setExperienceData(true) &
//               setAchievementData(false)
//             }
//             className={`${
//               experienceData
//                 ? "border-designColor rounded-lg"
//                 : "border-transparent"
//             } resumeLi`}
//           >
//             Experience
//           </li>
//           <li
//             onClick={() =>
//               setEducationData(false) &
//               setSkillData(false) &
//               setExperienceData(false) &
//               setAchievementData(true)
//             }
//             className={`${
//               achievementData
//                 ? "border-designColor rounded-lg"
//                 : "border-transparent"
//             } resumeLi`}
//           >
//             Achievements
//           </li>
//         </ul>
//       </div>
//       {educationData && <Education />}
//       {skillData && <Skills />}
//       {achievementData && <Achievement />}
//       {experienceData && <Experience />}
 
//     </section>
//   );
// }

// export default Resume










import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Achievement from "./Achievement";
import Experience from "./Experience";
import { FaDownload } from "react-icons/fa";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="2+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>

      {/* Tabs */}
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
              } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${skillData ? "border-designColor rounded-lg" : "border-transparent"
              } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) &
              setAchievementData(false)
            }
            className={`${experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
              } resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(true)
            }
            className={`${achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
              } resumeLi`}
          >
            Achievements
          </li>
        </ul>
      </div>

      {/* Download Resume Button */}
      <div className="flex justify-center mt-8">
        <a
          href="/Hamiz Resume-1.pdf"
          download
          className="flex items-center gap-2 px-6 py-3 bg-designColor text-white rounded-lg shadow-lg hover:bg-opacity-90 transition duration-300 text-sm md:text-base"
        >
          <FaDownload className="text-lg" />
          Download Resume
        </a>
      </div>

      {/* Dynamic Section Content */}
      {educationData && <Education />}
      {skillData && <Skills />}
      {achievementData && <Achievement />}
      {experienceData && <Experience />}
    </section>
  );
};

export default Resume;
