import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import tealClimateIcon from "../assets/tealclimate-icon.svg";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  // Data arrays for reusable sections
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact Us", path: "/contact" },
  ];

  const resources = [{ name: "FAQ", path: "/faqs" }];

  const contactInfo = [
    "Address: 16-550 Brealey Drive Peterborough, Ontario K9K 2R7, Canada",
    "Contact: +1 (438) 826-6497",
    "Email: info@tealclimate.com",
  ];

  const policies = [
    { name: "Terms & Conditions", path: "/terms&conditions" },
    { name: "Privacy Policy", path: "/privacy&policy" },
    { name: "Security", path: "/securtiy" },
    { name: "Cookie", path: "/cookie" },
  ];

  return (
    <footer className="relative mt-12 bg-tc-blue dark:bg-[#0F4A73] pt-10 text-white">
      {/* SVG Background */}
      <div className="absolute left-0 top-0 w-full overflow-hidden leading-[0]">
        <svg
          className="md:w-[calc(405%+1.3px)] relative block h-[284px] lg:w-[calc(285%+1.3px)]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white dark:fill-[#1e1e1e] "
          ></path>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="px-[5vw] pb-14 pt-48">
        <div className="flex flex-wrap justify-between gap-x-5 gap-y-10">
          {/* Logo and Description */}
          <div className="w-[450px] text-lg sm:text-xl lg:text-2xl">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" />
              <img src={tealClimateIcon} alt="Teal Climate Icon" />
            </div>
            <p className="mt-2 head-3">
              Start Tracking Your Emissions Today for a Greener Tomorrow!
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap gap-x-20 gap-y-8">
            {/* Quick Links */}
            <div>
              <h1 className="relative font-bold">
                Quick Links
                <span className="absolute bottom-[-10px] left-0 h-[3px] w-8 bg-white"></span>
              </h1>
              <ul className="mt-6 flex flex-col gap-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink to={link.path}>{link.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h1 className="relative font-bold">
                Resources
                <span className="absolute bottom-[-10px] left-0 h-[3px] w-8 bg-white"></span>
              </h1>
              <ul className="mt-6 flex flex-col gap-2">
                {resources.map((link, index) => (
                  <li key={index}>
                    <NavLink to={link.path}>{link.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h1 className="relative font-bold">
                Contact Info
                <span className="absolute bottom-[-10px] left-0 h-[3px] w-8 bg-white"></span>
              </h1>
              <div className="mt-6 flex flex-col gap-2">
                {contactInfo.map((info, index) => (
                  <p key={index} className="max-w-xs">
                    {info}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-6 flex gap-2 sm:gap-5">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ca.linkedin.com/company/teal-climate?trk=public_profile_experience-item_profile-section-card_subtitle-click"
            className="flex h-12 w-12 text-2xl items-center justify-center rounded-full border"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-top-white flex flex-wrap justify-between gap-2 border-t px-6 py-3 sm:px-[9%]">
        <span>
          <span className="text-xl">©</span> 2024 Teal Climate
        </span>
        <div className="flex gap-y-[7px] max-sm:flex-col md:gap-8">
          {policies.map((policy, index) => (
            <NavLink key={index} to={policy.path}>
              {policy.name}
            </NavLink>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
