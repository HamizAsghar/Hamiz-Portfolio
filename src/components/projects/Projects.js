import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour,projectFive,projectSix, projectSeven } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] "
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        
        <ProjectsCard
          title="CryptoVerse Web"
          des="I created the CryptoVerse website to provide a sleek, responsive platform for showcasing crypto-related services and updates. It features modern UI/UX, real-time data integration, and a seamless user experience tailored for the crypto community."
          src={projectOne}
          link= 'https://cryptoverse-ai.com/'
        />

        <ProjectsCard
          title="Admin Panal"
          des="I created a comprehensive admin panel for managing user information, attendance tracking, and detailed salary reports. This system ensures efficient employee data handling and payroll management."
          src={projectTwo}
          link= 'https://admin-panal-nine.vercel.app/'
        />

        <ProjectsCard
          title="HealthPulse"
          des=" I developed a professional website for the company to enhance its online presence and showcase its services. The site is user-friendly, responsive, and designed to attract and engage potential clients."
          src={projectThree}
          link= 'https://zocean.vercel.app/'
        />
        <ProjectsCard
          title="OrbitX"
          des=" In the NASA Space Hackathon, we developed an innovative project focused on utilizing AI-driven models to analyze space data for enhanced exploration and navigation. Our approach aims to optimize resource management and decision-making for future space missions."
          src={projectFour}
          link= 'https://orbit-x.vercel.app/'
        />
        <ProjectsCard
          title="SiteBuilder"
          des="It leverages AI to generate and display code snippets instantly using the Together AI LLaMA API and HELICONE API. The application also includes a sandbox feature that allows users to easily transfer code into a live editor, saving valuable time during development."
          src={projectFive}
          link= 'https://zeshi-the-brand.vercel.app/'
        />
        <ProjectsCard
          title="Intervuo"
          des="This is an AI-powered interviewer bot developed by Team Pathfinder to revolutionize the recruitment process. Our bot conducts interviews autonomously, providing a consistent and efficient way to assess candidates without human intervention."
          src={projectSix}
          link= 'https://voca-mind.vercel.app/'
        />
        <ProjectsCard
          title="Finance Management"
          des="This is a comprehensive finance management system designed to efficiently track, manage, and analyze financial transactions. It helps individuals and businesses maintain financial stability by organizing expenses, incomes, and budgets in one centralized platform."
          src={projectSeven}
          link='https://finance-management-swart.vercel.app/'
        />
      </div>
    </section>
  );
}

export default Projects