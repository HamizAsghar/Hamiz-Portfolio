import React, { useRef, useState } from "react";
import { FaLinkedinIn, FaGithub, FaComment } from "react-icons/fa";
import { logo } from "../../assets/index";
import { Link } from "react-router-dom";
import Chatbot from "./Chatbot";

const Footer = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const chatbotRef = useRef(null);

  const toggleChatbot = () => {
    setIsChatbotOpen((prev) => !prev);
    if (!isChatbotOpen && chatbotRef.current) {
      chatbotRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  return (
    <div className="w-full py-10 h-auto border-t-[1px] border-t-black flex flex-col items-center gap-6 relative">
      {/* Logo and Name */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="logo"
          className="w-12 h-12 rounded-full border-[1px] border-gray-700"
        />
        <span className="text-gray-500 text-2xl font-bold">Hami</span>
      </div>

      {/* Social Icons */}
      <div className="flex gap-5">
        <Link to="https://github.com/HamizAsghar" target="_blank">
          <span className="bannerIcon">
            <FaGithub />
          </span>
        </Link>
        <Link
          to="https://www.linkedin.com/in/hamiz-asghar-349915320/"
          target="_blank"
        >
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </Link>
      </div>

      {/* Copyright */}
      <p className="text-gray-500 text-sm font-titleFont tracking-wide">
        © {new Date().getFullYear()} Hami. All rights reserved.
      </p>

      {/* Quick Chat Button */}
      <button
        onClick={toggleChatbot}
        className="fixed bottom-8 right-8 bg-designColor text-white p-4 rounded-full shadow-lg hover:bg-opacity-80 transition-all duration-300 flex items-center gap-2 z-50"
      >
        <FaComment size={24} />
        <span className="hidden md:inline">Quick Chat</span>
      </button>

      {/* Chatbot */}
      {isChatbotOpen && (
        <div ref={chatbotRef} className="fixed bottom-20 right-8 z-50">
          <Chatbot onClose={() => setIsChatbotOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default Footer;

