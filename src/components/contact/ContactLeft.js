import React from 'react'
import { contactImg } from "../../assets/index";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaDiscord, FaGithub, FaWhatsapp } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] bg-opacity-90 backdrop-blur-md h-full border p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">

      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold ">Muhammad Hamiz Asghar</h3>
        <p className="text-lg font-normal ">
          MERN Stack Developer
        </p>
        <p className="text-base  tracking-wide">
           Web Developer ¶ Next Specialist ¶ MERN Developer
        </p>
        <p className="text-base flex items-center gap-2">
          Phone: <span>+92 3190218951</span>
        </p>
        <p className="text-base  flex items-center gap-2">
          Email: <span>hamizasghar@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <Link to="https://github.com/HamizAsghar" target="_blank">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </Link>
          <Link to="https://www.linkedin.com/in/hamiz-asghar-349915320/" target="_blank">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </Link>
          <a href="https://wa.me/923190218951" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaWhatsapp />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft
