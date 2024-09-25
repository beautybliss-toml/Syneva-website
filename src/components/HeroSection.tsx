import React from "react";
import { Exclude, ExcludeMobile } from "../assets/images";
import { Button } from "@headlessui/react";

const HeroSection: React.FC = () => {
  return (
    <section className="flex items-center justify-center mx-auto overflow-hidden max-w-screen-2xl lg:my-28 my-14">
      <div className="grid w-full max-w-screen-xl gap-5 text-center md:relative">
        <img
          src={Exclude}
          alt="Hero Background"
          className="hidden object-contain w-full h-full md:block"
        />
        <img
          src={ExcludeMobile}
          alt="Hero Background Mobile"
          className="object-contain w-full h-full md:hidden"
        />
        <div className="grid w-full grid-cols-12 md:absolute md:bottom-0 md:z-10 text-start">
          <div className="col-span-12 md:col-span-3"></div>
          <div className="col-span-12 px-5 md:col-span-9 md:bottom-0 md:z-10 text-start">
            <p className="text-[#1E2337] text-[14px] font-inter">
              Fast, secure, and scalable <br />
              DeFi solutions built on <br />
              <span className="text-[#0098EA]">The Open Network.</span>
            </p>

            <Button className="px-[34px] mt-5 py-[17px] bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] rounded-[40px] justify-center items-center gap-2.5 inline-flex md:w-auto w-full">
              <span className="text-white text-[17px] font-semibold">
                Start your journey
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
