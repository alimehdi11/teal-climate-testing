import React from "react";

const Card1 = ({title,description,image}) => {
  return (
    <div className="card rounded-xl border border-b-[10px] border-zinc-300 border-b-tc-blue dark:border-b-tc-dark-blue  p-8">
      <img src={image} alt="Carbon Footprint Calculations" />
      <h1 className="my-4 font-bold max-w-40">{title}</h1>
      <p className="max-md:text-sm">{description}</p>
    </div>
  );
};

export default Card1;
