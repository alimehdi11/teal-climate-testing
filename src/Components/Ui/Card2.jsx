import React from "react";
const Card2 = ({ image, title, description }) => {
  return (
    <div className="card flex-grow basis-[250px]">
      <img src={image} alt={title} />
      <h1 className="my-5  max-sm:text-sm text-xl font-bold">{title}</h1>
      <p className="max-md:text-sm sm:leading-6 text-gray-800 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default Card2;
