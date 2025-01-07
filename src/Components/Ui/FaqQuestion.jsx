import React from "react";

const FaqQuestion = ({ faq, index, openIndex, setOpenIndex }) => {
  const toggleAccordion = () => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="border-b border-slate-200">
      <button
        onClick={toggleAccordion}
        className="flex w-full cursor-pointer items-center justify-between gap-1 py-5 text-left"
      >
        <span className="text-sm font-bold">{faq.question}</span>
        <span
          id={`icon-${index}`}
          className={`text-slate-800 transition-transform duration-300 ${
            openIndex === index ? "rotate-180" : ""
          }`}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[26px] w-[26px]"
          >
            <circle
              cx="13"
              cy="13"
              r="12.5"
              className="fill-white stroke-[#BAB5B5]"
            />
            <path
              d="M6 10L13 17L20 10"
              stroke="#BAB5B5"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div
        id={`content-${index}`}
        className={`faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${
          openIndex === index ? "max-h-[1000px]" : ""
        }`}
      >
        <div className="pb-5 max-md:text-sm font-semibold text-zinc-500">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

export default FaqQuestion;
