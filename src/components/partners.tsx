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
  { img: GSR, alt: "GSR", className: "bg-[#f7f9fb] shadow-md lg:row-span-2" },
  {
    img: Ton,
    alt: "Ton",
    className: "bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] text-white",
  },
  { img: Alphanonce, alt: "Alphanonce", className: "bg-[#f7f9fb] shadow-md" },
  { img: FileBlocks, alt: "FileBlocks", className: "bg-[#f7f9fb] shadow-md" },
  {
    img: Hashkey,
    alt: "Hashkey",
    className: "bg-[#f7f9fb] shadow-md lg:row-span-2",
  },
  {
    img: Kenetic,
    alt: "Kenetic",
    className: "bg-[#f7f9fb] shadow-md lg:col-span-2",
  },
];

const Partners: React.FC = () => (
  <div className="bg-[#f7f9fb] md:py-16 py-6">
    <div className="container px-5 mx-auto max-w-screen-2xl">
      <div className="grid items-start grid-cols-1 my-5 md:grid-cols-12">
        <h2 className="text-[#0098ea] text-[17px] font-semibold col-span-12 md:col-span-3">
          //03
        </h2>
        <div className="col-span-12 md:col-span-9">
          <h3 className="text-[#1e2337] text-[40px] font-bold">Our partners</h3>
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-3">
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
  </div>
);

export default Partners;
