import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CarboImpactCard from "../Components/CarbonImpactCard";
import faqQuestions from "../faqsData";
import FaqQuestion from "../Components/Ui/FaqQuestion";

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <section className="mx-auto mt-10 mb-24 max-w-5xl text-center">
        <h1 className="head-1">FAQS</h1>
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

      <section className="mx-auto my-24 w-[90%] max-w-[1200px] gap-y-5 rounded-xl border-2 p-10 shadow-xl max-lg:flex-col xl:p-20">
        {faqQuestions.map((faq, index) => (
          <FaqQuestion
            key={index}
            faq={faq}
            index={index}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex} // Passing state setter
          />
        ))}
      </section>

      {/* Carbon Impact Card Section */}
      <CarboImpactCard />
    </>
  );
};

export default FaqPage;
