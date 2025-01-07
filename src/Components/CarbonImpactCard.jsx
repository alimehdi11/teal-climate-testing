import React from "react";
import emissionImg from "../assets/emissions.svg";
import { NavLink } from "react-router-dom";

const CarboImpactCard = () => {
  return (
    <section className="mx-auto mb-24 flex w-[90%] max-w-6xl flex-col gap-y-5 items-center rounded-3xl  bg-[#E0F2FF] px-3 py-8 shadow-lg min-[500px]:px-12 md:flex-row dark:bg-[#112B3C]">
      {/* Text Section */}
      <div className="text-left md:w-1/2 md:pr-8">
        <h2 className="mb-4 head-3 leading-8">
          Track Your
          <br />
          Carbon Impact
        </h2>
        <p className="mb-6 font-medium  text-gray-600 dark:text-gray-300 max-md:text-sm">
          Make smarter, data-driven decisions to reduce your carbon footprint
          and drive sustainability forward.
        </p>
        <NavLink to="/request-demo" className="btn-tertiary">
          Schedule a demo
        </NavLink>
      </div>

      {/* Image Section */}
      <div className="mt-6 md:mt-0 md:w-1/2">
        <img
          src={emissionImg}
          alt="Emission Impact"
          className="w-full rounded-xl object-cover max-[480px]:h-[200px]"
        />
      </div>
    </section>
  );
};

export default CarboImpactCard;
