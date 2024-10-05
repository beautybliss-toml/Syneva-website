import React, { memo, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { phases } from "../constants";
import gsap from "gsap";

const Roadmap: React.FC = memo(() => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
    const items = document.querySelectorAll(".accordion__items");

    items.forEach((item, idx) => {
      const tl = gsap.timeline();
      if (idx === index && expandedIndex !== index) {
        tl.to(item, { maxHeight: "1000px", opacity: 1, visibility: "visible", duration: 1 });
      } else {
        tl.to(item, { maxHeight: "0px", opacity: 1, visibility: "visible", duration: 1 });
      }
    });
  };

  return (
    <div className="py-10 bg-white sm:py-16">
      <div className="container max-w-screen-xl px-5 mx-auto">
        <div className="grid items-start grid-cols-1 md:mb-10 mb-7 md:grid-cols-12">
          <div className="col-span-12 md:col-span-3">
            <h2 className="text-[17px] font-semibold text-[#0098EA] mt-3 mb-5 md:mb-0">
              // 05
            </h2>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h3 className="text-[#1e2337] md:text-[40px] text-[32px] font-bold">
              Roadmap
            </h3>
          </div>
        </div>

        {phases.map((phase, index) => (
          <div key={index} className="pt-10 pb-5 border-t md:py-10 border-neutral-300">
            <button
              onClick={() => toggleAccordion(index)}
              className="grid items-center justify-start w-full grid-cols-12 gap-2 md:gap-4 md:items-start text-start"
            >
              <div className="hidden col-span-12 my-4 sm:col-span-3 md:block">
                <p className="text-sm font-bold text-[#0098ea]">{phase.title}</p>
              </div>
              <div className="col-span-10 md:col-span-3">
                <h4 className="bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] bg-clip-text text-transparent xl:text-[64px] md:text-6xl text-5xl font-semibold leading-tight md:-ml-[10px] w-fit">
                  {phase.quarter}
                </h4>
              </div>
              <div className="flex items-center justify-end order-1 col-span-2 md:mt-5 md:order-2">
                <IoIosArrowUp className={`h-7 w-7 text-[#2d83ec] transition-transform duration-[0.8s] ease-in-out ${expandedIndex === index ? 'rotate-180' : ''}`} />
              </div>
              <div className={`accordion__items opacity-0 md:col-span-4 col-span-12 order-2 md:order-1 md:mt-0 text-[#1e2337]`}>
                <p className="text-sm md:hidden font-bold mb-5 text-[#0098ea]">{phase.title}</p>
                <div className="space-y-2 text-sm">
                  {phase.details.map((item, index) => (
                    <div key={index} className="mt-2">
                      <strong className="text-[#0098ea]">{item.heading}:</strong>
                      <br />
                      {item.description}
                    </div>
                  ))}
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Roadmap;
