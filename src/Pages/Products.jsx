import React from "react";
import analyticsIcon from "../assets/analyitcs-icon.svg";
import supportIcon from "../assets/support-icon.svg";
import stakeholderIcon from "../assets/stakeholder-icon.svg";
import strategyIcon from "../assets/strategy-icon.svg";
import engagementIcon from "../assets/engagement-icon.svg";
import buildingIcon from "../assets/building-icon.svg";
import estimationIcon from "../assets/estimation-icon.svg";
import investorIcon from "../assets/investor-icon.svg";
import portfolioEngagementIcon from "../assets/portfolio-engagement-icon.svg";
import CarboImpactCard from "../Components/CarbonImpactCard";
import { NavLink } from "react-router-dom";

const Products = () => {
  
  const operationalEmissions = [
    { icon: analyticsIcon, title: "Carbon Accounting and Analytics" },
    { icon: supportIcon, title: "Support Regulatory Reporting" },
    { icon: stakeholderIcon, title: "Stakeholder Emission Reporting" },
    { icon: strategyIcon, title: "Decarbonization Strategy" },
    { icon: engagementIcon, title: "Scope 3 Supplier Engagement" },
    {
      icon: buildingIcon,
      title: "Real Estate Carbon Accounting for Owners, Operators, and Lenders",
    },
  ];

  const financedEmissions = [
    { icon: analyticsIcon, title: "Carbon Accounting and Analytics" },
    { icon: estimationIcon, title: "Data Estimation Support" },
    { icon: investorIcon, title: "Support Investor Reporting" },
    { icon: strategyIcon, title: "Decarbonization Strategy" },
    { icon: portfolioEngagementIcon, title: "Portfolio Company Engagement" },
    {
      icon: buildingIcon,
      title: "Real Estate Carbon Accounting for Owners, Operators, and Lenders",
    },
  ];

  // Function to render emission cards dynamically
  const renderEmissions = (emissions) =>
    emissions.map((emission, index) => (
      <div key={index} className="flex items-center gap-4">
        <div className="flex h-8 w-9 items-center justify-center rounded-md bg-tc-blue dark:bg-tc-dark-blue shrink-0">
          <img src={emission.icon} alt={emission.title} className="" />
        </div>
        <h1 className="max-sm:text-sm">{emission.title}</h1>
      </div>
    ));

  return (
    <>
      <section className="mx-auto mt-10 mb-24 max-w-[500px] text-center md:max-w-[800px]">
        <h1 className="head-1">Carbon Measurement & Reporting Platform</h1>
        <div className="mt-10 flex justify-center gap-2">
          <a
            href="https://carbon.tealclimate.com/signup"
            className="btn-primary bg-tc-blue dark:bg-tc-dark-blue text-white hover:bg-black"
            style={{ minWidth: "170px" }}
          >
            Get Started
          </a>
          <NavLink
            to="/request-demo"
            className="btn-primary border-2 border-tc-blue"
            style={{ minWidth: "170px" }}
          >
            Request a Demo
          </NavLink>
        </div>
      </section>

      <section className="mx-auto mb-24 w-[90%] max-w-[1150px] overflow-hidden rounded-lg shadow-lg">
        <div className="flex flex-wrap gap-y-10 py-3 text-sm font-semibold">
          {/* Operational Emissions Section */}
          <div className="flex-1 basis-[320px] gap-4">
            <h1 className="flex-1 bg-tc-blue dark:bg-tc-dark-blue py-3 ps-2 text-xl text-white sm:ps-10">
              Operational Emissions
            </h1>
            <div className="mt-3 flex flex-col gap-4 px-2 text-xs sm:ps-10 sm:text-sm">
              {renderEmissions(operationalEmissions)}
            </div>
          </div>

          {/* Financed Emissions Section */}
          <div className="flex-1 basis-[320px]">
            <h1 className="flex-1 border-l bg-tc-blue dark:bg-tc-dark-blue py-3 ps-2 text-xl text-white sm:ps-10">
              Financed Emissions
            </h1>
            <div className="mt-3 flex flex-col gap-4 px-2 text-xs sm:ps-10 sm:text-sm">
              {renderEmissions(financedEmissions)}
            </div>
          </div>
        </div>
      </section>

      <CarboImpactCard />
    </>
  );
};

export default Products;
