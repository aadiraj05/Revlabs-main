import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// IMPORT ALL LOGOS FROM /src/assets
import TallOaksLogo from "../assets/TallOaks.png";
import EvoLogo from "../assets/Evo.png";
import CafeSiriLogo from "../assets/CafeSiri.png";
import RamRathnaLogo from "../assets/RamRathna.png";

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  // CASE STUDIES DATA WITH REAL IMAGE IMPORTS
  const caseStudies = [
    {
      id: 1,
      companyName: "Tall Oaks",
      logo: TallOaksLogo,
      insight: "Solving the Discovery Problem, Unlocking Growth.",
      result:
        "Organic visibility, event-led marketing, and creator strategy delivered 450% growth and consistent weekend sellouts.",
      backgroundColor: "bg-orange-100",
      link: "/TallOaks",
    },
    {
      id: 2,
      companyName: "Evo",
      logo: EvoLogo,
      insight: "Crafting a Vegetarian Brand With Cultural Depth.",
      result:
        "A full-funnel brand build led to organic traction, strong perception, and a sell-out launch weekend.",
      backgroundColor: "bg-green-100",
      link: "/Evo",
    },
    {
      id: 3,
      companyName: "Cafe Siri",
      logo: CafeSiriLogo,
      insight: "Fixing the Perception Problem to Unlock Orders.",
      result:
        "Sharper content, positioning, and offers shifted Café Siri into a high-recall, high-conversion brand.",
      backgroundColor: "bg-orange-100",
      link: "/CafeSiri",
    },
    {
      id: 4,
      companyName: "Ram Rathna",
      logo: RamRathnaLogo,
      insight:
        "From a Founder’s Memory to a Neighborhood Brand.",
      result:
        "We built RamRathna from scratch — identity, menu strategy, local marketing — driving 150% sales growth.",
      backgroundColor: "bg-orange-100",
      link: "/RamRathna",
    },
  ];

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);

    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, caseStudies.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.3 },
    },
  };

  return (
    <motion.section
      className="bg-gray-50 pt-20 px-4 sm:px-6 lg:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-md font-medium uppercase tracking-wider mb-4 font-poppins">
            CASE STUDIES
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-text-primary font-poppins">
            Growth Stories We've Engineered
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">

          {/* Left Button */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 z-10 w-8 h-8 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
          >
            <svg
              className="w-4 h-4 lg:w-6 lg:h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-4 z-10 w-8 h-8 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
          >
            <svg
              className="w-4 h-4 lg:w-6 lg:h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="w-full lg:w-1/3 flex-shrink-0 px-2 lg:px-4 mb-8 lg:mb-20"
                >
                  <div className="rounded-2xl overflow-hidden h-full">

                    {/* Logo */}
                    <div
                      className={`${study.backgroundColor} h-48 lg:h-72 flex items-center justify-center relative`}
                    >
                      <div className="w-full h-full bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                          src={study.logo}
                          alt={study.companyName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Text Box */}
                    <div className="p-4 lg:p-6 mt-3 lg:mt-5 rounded-lg border-2">
                      <div className="mb-3 lg:mb-4">
                        <h3 className="text-primary text-base lg:text-lg font-bold font-poppins">
                          {study.companyName}
                        </h3>
                      </div>

                      <p className="text-text-secondary text-sm lg:text-md leading-relaxed mb-3 lg:mb-4 font-poppins h-10 lg:h-12">
                        {study.insight}
                      </p>

                      <div className="mb-4 lg:mb-6">
                        <div className="bg-primary/5 rounded-lg p-3 lg:p-4">
                          <p className="text-primary font-semibold text-xs lg:text-sm font-poppins">
                            {study.result}
                          </p>
                        </div>
                      </div>

                      {/* Button */}
                      <Link to={study.link} className="w-full">
                        <button className="w-full border border-primary text-primary font-semibold py-2 lg:py-3 px-4 lg:px-6 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 font-poppins text-sm lg:text-base">
                          View Case Study
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </button>
                      </Link>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default CaseStudies;
