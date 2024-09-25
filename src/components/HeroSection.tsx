import React from "react";
import { Exclude } from "../assets/images";

const HeroSection: React.FC = () => {
  return (
    <section className="relative mx-auto max-w-screen-2xl h-[70vh] overflow-hidden">
      <img
        src={Exclude}
        alt="Hero Background"
        className="absolute top-0 object-contain w-full"
      />
      <div className="absolute left-[20%] bottom-10 grid gap-4">
        <p className="text-[#1E2337] text-[14px] font-inter">
          Fast, secure, and scalable <br />
          DeFi solutions built on <br />
          <span className="text-[#0098EA]">The Open Network.</span>
        </p>
        <div className="flex justify-center items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#0098EA] to-[#2D83EC] text-white text-[17px] font-semibold">
          Start your journey
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
