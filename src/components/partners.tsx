// src/components/Partners.tsx

import React from "react";
import {
  Alphanonce,
  FileBlocks,
  GSR,
  Hashkey,
  Kenetic,
  Ton,
} from "../assets/images";

const partnersData = [
  { img: GSR, alt: "GSR", className: "bg-[#f7f9fb] lg:row-span-2" },
  {
    img: Ton,
    alt: "Ton",
    className: "bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] text-white",
  },
  { img: Alphanonce, alt: "Alphanonce", className: "bg-[#f7f9fb]" },
  { img: FileBlocks, alt: "FileBlocks", className: "bg-[#f7f9fb]" },
  {
    img: Hashkey,
    alt: "Hashkey",
    className: "bg-[#f7f9fb] lg:row-span-2",
  },
  {
    img: Kenetic,
    alt: "Kenetic",
    className: "bg-[#f7f9fb] lg:col-span-2",
  },
];

const Partners: React.FC = () => (
  <div className="pt-5 pb-10 md:py-16">
    <div className="container max-w-screen-xl px-5 mx-auto">
      <div className="grid items-start grid-cols-1 my-5 md:grid-cols-12 md:items-center">
        <h2 className="text-[#0098ea] text-[17px] font-semibold col-span-12 md:col-span-3">
          //03
        </h2>
        <div className="col-span-12 md:col-span-9">
          <h3 className="text-[#1e2337] md:text-[40px] text-[32px] font-bold">
            Our partners
          </h3>
        </div>
        <div className="col-span-12 md:col-span-3"></div>
        <div className="grid grid-cols-2 col-span-12 gap-4 mt-5 md:col-span-9 md:mt-10 md:gap-5 lg:grid-cols-3">
          {partnersData.map((partner, idx) => (
            <div
              key={idx}
              className={`${partner.className} rounded-2xl p-8 py-12 flex justify-center items-center`}
            >
              <img
                src={partner.img}
                alt={partner.alt}
                className="text-center"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Partners;
