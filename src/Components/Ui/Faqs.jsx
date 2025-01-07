import React, { useState } from "react";
import faqQuestions from "../../faqsData";
import FaqQuestion from "./FaqQuestion";
import { NavLink } from "react-router-dom";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mx-auto flex w-[90%] max-w-[1200px] gap-y-5 rounded-xl border p-10 shadow-xl max-lg:flex-col xl:p-20">
      <div className="child1 flex-1">
        <h1 className="head-3 font-bold leading-9">
          Frequently Asked <br />
          Questions
        </h1>
        <p className="mb-16 mt-3 text-sm font-semibold sm:text-xl">
          Got questions? We’re here to help!
        </p>
        <NavLink to="/faqs" className="btn-tertiary">
          See all questions
        </NavLink>
      </div>

      <div className="flex-1" id="faq-section1">
        {faqQuestions.slice(0, 5).map((faq, index) => (
          <FaqQuestion
            key={index}
            faq={faq}
            index={index}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex} // Passing state setter
          />
        ))}
      </div>
    </section>
  );
};

export default Faqs;
