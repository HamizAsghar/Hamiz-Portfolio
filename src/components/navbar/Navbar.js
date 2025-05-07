import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";
import { useTheme } from "../../ThemeContext";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const themes = [
    { name: "Dark", value: "dark", icon: "🌙" },
    { name: "Light", value: "light", icon: "☀️" },
    { name: "Blue", value: "blue", icon: "🌀" },
    { name: "Green", value: "green", icon: "🌿" },
    { name: "Red", value: "red", icon: "🔥" },
    { name: "Purple", value: "purple", icon: "💜" },
    { name: "Pink", value: "pink", icon: "💖" },
    { name: "Teal", value: "teal", icon: "🦋" },
    { name: "Yellow", value: "yellow", icon: "🌟" },
    { name: "Orange", value: "orange", icon: "🍊" }
  ];

  const renderNavLink = ({ _id, title, link }) => {
    if (link.startsWith("/")) {
      return (
        <RouterLink
          to={link}
          className="text-base font-normal text-[var(--text-secondary)] tracking-wide cursor-pointer hover:text-designColor duration-300"
        >
          {title}
        </RouterLink>
      );
    } else {
      return (
        <ScrollLink
          activeClass="active"
          to={link}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-base font-normal text-[var(--text-secondary)] tracking-wide cursor-pointer hover:text-designColor duration-300"
        >
          {title}
        </ScrollLink>
      );
    }
  };

  return (
    <div className="w-full h-24 px-10 sticky top-0 z-50 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] bg-opacity-90 backdrop-blur-md  mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-[var(--border-color)]">
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="logo"
          className="w-10 h-10 object-contain rounded-full border-[1px] border-[var(--border-color)]"
        />
        <span className="text-[var(--text-secondary)] font-bold">HAMI</span>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map((item) => (
            <li key={item._id}>{renderNavLink(item)}</li>
          ))}
        </ul>
        <div className="relative hidden mdl:inline-flex items-center ml-6">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="px-4 py-2 bg-[var(--bg-primary)] bg-opacity-50 text-[var(--text-primary)] rounded-full text-sm hover:bg-opacity-70 transition flex items-center gap-2 border border-[var(--border-color)]"
          >
            <span>Theme: {themes.find((t) => t.value === theme)?.name || "Select"}</span>
            <span>{themes.find((t) => t.value === theme)?.icon}</span>
          </button>
          {showDropdown && (
            <div className="absolute top-12 right-0 w-40 bg-[var(--bg-primary)] bg-opacity-90 rounded-md shadow-lg z-50 border border-[var(--border-color)]">
              {themes.map((t) => (
                <button
                  key={t.value}
                  onClick={() => {
                    toggleTheme(t.value);
                    setShowDropdown(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--bg-primary)] hover:bg-opacity-70 flex items-center gap-2 ${
                    theme === t.value ? "bg-opacity-50" : ""
                  }`}
                >
                  <span>{t.icon}</span>
                  <span>{t.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-[var(--bg-primary)] bg-opacity-50 w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-[var(--bg-primary)] bg-opacity-90 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <div className="flex items-center gap-2">
                  <img
                    src={logo}
                    alt="logo"
                    className="w-10 h-10 rounded-full border-[1px] border-[var(--border-color)]"
                  />
                  <span className="text-[var(--text-secondary)] font-bold">INBIO</span>
                </div>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li key={item._id}>{renderNavLink(item)}</li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4 text-[var(--text-primary)]">Theme</h2>
                <div className="flex flex-col gap-2">
                  {themes.map((t) => (
                    <button
                      key={t.value}
                      onClick={() => {
                        toggleTheme(t.value);
                        setShowMenu(false);
                      }}
                      className={`text-left px-4 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--bg-primary)] hover:bg-opacity-70 flex items-center gap-2 rounded ${
                        theme === t.value ? "bg-opacity-50" : ""
                      }`}
                    >
                      <span>{t.icon}</span>
                      <span>{t.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4 text-[var(--text-primary)]">Find me in</h2>
                <div className="flex gap-4">
                  <a href="https://github.com/zeshig01" target="_blank" rel="noreferrer">
                    <span className="bannerIcon">
                      <FaGithub />
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/muhammad-zeeshan-ashraf-a3b99a30a"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="bannerIcon">
                      <FaLinkedinIn />
                    </span>
                  </a>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-[var(--text-secondary)] hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;