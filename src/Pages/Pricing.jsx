import React from 'react'
import { NavLink } from 'react-router-dom';
import checkIcon from "../assets/check-icon.svg"
import checkIcon2 from "../assets/check-icon2.svg"
import checkIcon3 from "../assets/check-icon3.svg"
import PricingCard from "../Components/Ui/PricingCard"
import CarbonImpact from "../Components/CarbonImpactCard"
const Pricing = () => {

     const plans = [
       {
         title: "Basic",
         price: "$3500",
         priceCurrency:"USD",
         pricePeriod:"month",
         description:
           "Your essential toolkit to start managing environmental impact with ease.",
         features: [
           "Scope 1, 2 and 3 calculations",
           "Spend-based scope 3",
           "Real estate footprint calculation",
           "GHG reporting",
           "Up to 10 locations",
           "60 minutes advisory support",
         ],
         buttonLink: "https://carbon.tealclimate.com/signup",
         borderColor: "#197EC6",
         buttonText: "Get Started",
         icon: checkIcon,
       },
       {
         title: "Professional",
         description:
           "Advanced insights and expert tools, plus all the basics to boost your strategy.",
         features: [
           "Reporting frameworks",
           "Custom analytics",
           "Scenario modelling",
           "Environmental expertise",
           "Up to 100 locations and 2 entities",
           "Advisory support",
         ],
         borderColor: "#FF9D00",
         icon: checkIcon2,
       },
       {
         title: "Enterprise",
         description:
           "Custom solutions and dedicated support, everything from Pro and Basic, scaled for growth.",
         features: [
           "Custom integrations",
           "API Access",
           "Dedicated support manager",
         ],
         borderColor: "#32B950",
         icon: checkIcon3,
       },
     ];
  return (
    <>
      <section className="mx-auto mt-10 mb-24 max-w-5xl text-center ">
        <h1 className="head-1">
          Accurate carbon insights. Smarter sustainability decisions.
        </h1>
        <div className="mt-10 flex justify-center gap-2">
          <a
            href="https://carbon.tealclimate.com/signup"
            className="btn-primary bg-tc-blue text-white hover:bg-black"
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

      <section className="my-16 px-5">
        <h1 className="mb-16 text-center text-2xl font-bold text-gray-800 dark:text-[#D1D5DB] sm:text-3xl">
          Our Subscription Plans
        </h1>
        <div className="flex flex-wrap justify-center gap-12">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </section>

      <CarbonImpact />
    </>
  );
}

export default Pricing
