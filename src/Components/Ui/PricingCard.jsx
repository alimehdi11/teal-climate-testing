import clsx from "clsx";
import React from "react";
import { NavLink } from "react-router-dom";

const PricingCard = ({
  title,
  price,
  priceCurrency,
  pricePeriod,
  description,
  features,
  buttonText,
  buttonLink,
  buttonClass = "",
  borderColor,
  icon,
}) => {
  const hexToRgba = (hex, opacity = 0.2) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  const borderColorWithOpacity = hexToRgba(borderColor);

  return (
    <div
      className="flex max-w-[330px] min-h-[500px] flex-col justify-between rounded-lg dark:bg-zinc-700 bg-white  p-2 text-center text-sm shadow-lg sm:px-6 border-t-[14px] text-gray-800 dark:text-[#D1D5DB]"
      style={{ borderColor }}
    >
      {/* Top Section */}
      <div>
        <h2 className="mx-auto mb-2 w-fit text-2xl font-semibold sm:text-3xl relative">
          {title}
          <div
            className="w-[50%] h-[5px] absolute -right-3"
            style={{ backgroundColor: borderColor }}
          ></div>
        </h2>

        <div className="flex items-center justify-center gap-2 font-bold mt-3">
          {price ? (
            <p className="text-3xl sm:text-4xl">{price}</p>
          ) : (
            <p className="text-2xl">Contact us</p>
          )}
          {priceCurrency && pricePeriod && (
            <div className="text-sm font-normal">
              <h1>{priceCurrency}/</h1>
              <h1>{pricePeriod}</h1>
            </div>
          )}
        </div>

        <p className="my-4 text-xs">{description}</p>
      </div>

      {/* Feature List Section */}
      <div className="flex flex-col flex-grow">
        <hr className="my-4 border-gray-300" />
        <ul className="space-y-3 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <div
                className="flex h-[26px] w-[26px] items-center justify-center rounded-full"
                style={{ backgroundColor: borderColorWithOpacity }}
              >
                <img src={icon} alt="check icon" />
              </div>
              {feature}
            </li>
          ))}
        </ul>
        <hr className="mt-auto border-gray-300" />
      </div>

      {/* Button Section */}
      <div>
        {buttonLink ? (
          <a
            href={buttonLink}
            className="w-full block mt-4 rounded-lg border  bg-transparent py-2 font-semibold text-gray-800 duration-300 hover:bg-[#197EC6] dark:hover:bg-tc-dark-blue border-tc-blue hover:text-white dark:text-white"
          >
            {buttonText}
          </a>
        ) : (
          <NavLink
              to="/contact"
              style={{borderColor:borderColor}}
            className="w-full block mt-4 rounded-lg border dark:text-white bg-transparent py-2 font-semibold text-gray-800 duration-300 hover:text-white"
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = borderColor;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
            }}
          >
            Contact us
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default PricingCard;
