import React from "react";
import hereImg from "../assets/images/hero-img.webp";
import dashboardImg from "../assets/dashboard.svg";
import reductionImg from "../assets/reduction.svg";
import reductionImg2 from "../assets/reduction2.svg";
import reductionImg3 from "../assets/reduction3.svg";
import reductionImg4 from "../assets/reduction4.svg";
import reductionImg5 from "../assets/reduction5.svg";
import reductionImg6 from "../assets/reduction6.svg";
import growthImg1 from "../assets/growth1.svg";
import businessImg from "../assets/bussiness.svg";
import transparencyImg from "../assets/transparency.svg";
import reportImg from "../assets/report.svg";
import Card1 from "../Components/Ui/Card1";
import Card2 from "../Components/Ui/Card2";
import CarboImpactCard from "../Components/CarbonImpactCard";
import { NavLink } from "react-router-dom";
const Home = () => {
  const card1Data = [
    {
      title: "Carbon footprint calculations",
      description:
        "Track and calculate scope 1, 2, 3, and beyond for comprehensive emissions management.",
      image: reductionImg,
    },
    {
      title: "Global regulatory standards",
      description:
        "Align your reporting with CDP, TCFD, SBTI, CSRD, SECR, and other global standards.",
      image: reductionImg2,
    },
    {
      title: "Set targets to achieve net zero",
      description:
        "Set science-based targets and create actionable roadmap for emissions reduction.",
      image: reductionImg3,
    },
    {
      title: "Track progress and performance",
      description:
        "Leverage real-time tracking tools to measure progress and refine your strategies.",
      image: reductionImg4,
    },
    {
      title: "Drive leadership in sustainability",
      description:
        "Position your organization as a global leader in climate action and transparency.",
      image: reductionImg5,
    },
    {
      title: "Engage and inspire stakeholders",
      description:
        "Communicate your climate efforts with clarity to build trust and drive collaboration.",
      image: reductionImg6,
    },
    ];
    
 const card2Data = [
   {
     title: "Scalable Solutions",
     description:
       "Our platform offers industry-specific tools to implement renewable energy, engage supply chains, and educate teams, enabling businesses of all sizes to scale their sustainability initiatives effectively.",
     image: growthImg1,
   },
   {
     title: "Financed Emission Management",
     description:
       "Teal Climate specializes in managing financed emissions, helping organizations accurately measure the climate impact of investments, loans, and other financial activities to align with global standards.",
     image: businessImg,
   },
   {
     title: "Complete Transparency",
     description:
       "We prioritize accountability by delivering solutions that provide full transparency and traceability for all climate action initiatives, empowering organizations to confidently share progress with stakeholders.",
     image: transparencyImg,
   },
 ];


  return (
    <>
      <section
        className="relative flex h-[450px] items-center bg-cover bg-no-repeat max-md:h-[400px] mb-24"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${hereImg})`,
          backgroundPosition: "0 70%",
        }}
      >
        <div className="container">
          <h1 className="head-1 text-white">
            Empower your business with <br />
            comprehensive climate solutions
          </h1>
          <NavLink to="/contact" className="btn-secondary">
            Contact us
          </NavLink>
        </div>
      </section>

      <section className="container mb-24">
        <h1 className="head-2 font-bold">
          Driving Sustainability Through Strategic planning
        </h1>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {card1Data.map((item) => (
            <Card1 {...item} key={item.title} />
          ))}
        </div>
      </section>

      <section className="bg-tc-light-green dark:bg-[#0F3D3E] py-24 mb-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="head-3">
              Close the Gap Between Ambition and Action with Teal Climate Beyond
              Compliance
            </h1>
            <p className="my-5 max-w-lg mx-auto text-gray-500 dark:text-gray-300 max-sm:text-sm">
              Sustainability isn’t just about meeting regulations—it’s about
              driving real impact. While many businesses commit to ambitious
              net-zero targets, achieving them requires more than promises. Teal
              Climate empowers you to turn ambition into action
            </p>
            <a
              href="https://carbon.tealclimate.com/signup"
              className="btn-primary border-tc-blue border-2 "
            >
              Get Started
            </a>
          </div>
          <img
            src={dashboardImg}
            className="mt-16 w-full"
            alt="dashboard-image"
          />
        </div>
      </section>

      <section className="bg-tc-light-blue dark:bg-[#112B3C] py-24 mb-24 ">
        <div className="container flex flex-wrap gap-x-14 gap-y-7 py-8">
          {card2Data.map((item) => (
            <Card2 {...item} key={item.title} />
          ))}
        </div>
      </section>

      <section className="container mb-24 flex flex-wrap items-center justify-center gap-16">
        <img
          src={reportImg}
          alt="report-image"
          className="w-[200px] max-w-[316px] flex-grow xl:w-[316px]"
        />
        <div className="w-[250px] max-w-[416px] flex-grow lg:w-[416px]">
          <h1 className="mb-5 head-3">
            Adapt to Evolving Regulations and Market Conditions
          </h1>
          <p className="leading-relaxed max-sm:text-sm">
            Stay ahead of regulatory changes and market dynamics with a flexible
            platform that evolves with global standards, enabling your business
            to remain compliant and competitive in an ever-changing
            sustainability landscape.
          </p>
        </div>
      </section>

      <CarboImpactCard />
    </>
  );
};

export default Home;
