import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo1 from "../assets/teal-climate-logo-1.svg";
import Logo2 from "../assets/teal-climate-logo-2.svg";
import { IoMdMenu } from "react-icons/io";
import { BsFillMoonFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { useThemeContext } from "../Contexts/ThemeContext";
const Navbar = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();
  // State for toggling the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Navigation items array
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact us", path: "/contact" },
    // { name: "Blogs", path: "/blogs" },
  ];

  return (
    <div className="sticky top-0 z-10 bg-white dark:bg-[#1e1e1e] dark:text-[#D1D5DB]">
      <nav className="flex max-lg:flex-wrap lg:items-center justify-between px-[6vw] lg:px-[1vw]  xl:px-[3vw] py-4">
        {/* Logo */}
        <NavLink to="/" className="flex gap-1">
          <img src={Logo1} alt="Logo" />
          <img
            src={Logo2}
            className="filter dark:invert dark:brightness-0 dark:contrast-100"
            alt="Logo"
          />
        </NavLink>

        {/* Hamburger Menu Icon */}
        <div className="flex gap-5 items-center">
          <button className="text-xl lg:hidden" onClick={toggleTheme}>
            {isDarkMode ? <FiSun /> : <BsFillMoonFill />}
          </button>
          <button
            className="text-3xl lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <IoMdMenu />
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`max-lg:absolute left-0 max-lg:top-16 w-full max-lg:bg-white max-lg:dark:bg-[#1e1e1e] overflow-hidden duration-500 max-lg:px-[5vw]  ${
            isMenuOpen ? "h-[290px] sm:h-[320px]" : "h-0"
          } lg:relative lg:flex lg:h-auto lg:bg-transparent lg:py-0 max-lg:mt-2`}
        >
          <ul className="flex flex-col gap-2 lg:flex-row lg:gap-4 lg:items-center lg:mx-auto ">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block btn-primary ${
                      isActive
                        ? "bg-tc-blue dark:bg-tc-dark-blue text-white"
                        : ""
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Login and Sign Up */}
          <div className="flex flex-col lg:items-center gay-y-3 gap-2 mt-4 lg:mt-0 lg:flex-row">
            <a
              href="https://carbon.tealclimate.com/login"
              className="btn-primary bg-tc-blue dark:bg-tc-dark-blue text-white hover:bg-black "
            >
              Login
            </a>
            <a
              href="https://carbon.tealclimate.com/signup"
              className="btn-primary border-2 border-tc-blue "
            >
              Sign up
            </a>
            <button
              className="ms-4 text-xl max-lg:hidden"
              onClick={toggleTheme}
            >
              {isDarkMode ? <FiSun /> : <BsFillMoonFill />}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
