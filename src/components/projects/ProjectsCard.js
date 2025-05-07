import React from 'react';
import { FaGlobe } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ProjectsCard = ({ title, des, src, link}) => {
  return (
    <div className="w-full bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] bg-opacity-90 backdrop-blur-md  p-4 rounded-lg shadow-shadowOne group  transition-colors duration-1000">
      <div className="overflow-hidden rounded-lg aspect-video mb-4">
        <img
          className="w-full h-full object-cover object-center group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt={title}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-designColor group-hover:text-white duration-300">
            {title}
          </h3>
          <div className="flex gap-3">
            <Link to={link} className="project-icon-link">
              <span className="project-icon">
                <FaGlobe />
              </span>
            </Link>
          </div>
        </div>
        <p className="text-sm  duration-300">
          {des}
        </p>
      </div>
    </div>
  );
}

export default ProjectsCard;