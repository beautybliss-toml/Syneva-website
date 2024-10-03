import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="max-w-screen-xl mx-auto overflow-hidden lg:my-28 my-14">
      <div className="relative flex items-center justify-center h-[400px] md:h-[500px] mx-auto">
        <div className="relative w-full h-full">

          {/* Gradient Text */}
          <div className="absolute w-full h-full px-[20px] pt-[135px] md:px-[40px] md:pt-[83px]">
            <p className="bg-clip-text bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] text-transparent leading-none text-start text-sm md:text-[32px] font-bold xs:px-[30px] md:px-[7px]">
              Empowering the future of
            </p>
            <p className="bg-clip-text bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] text-transparent leading-none text-center md:text-start text-[50px] xl:text-[160px] lg:text-[145px] md:text-[100px] font-bold">
              Decentralized
            </p>
            <p className="bg-clip-text bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] text-transparent leading-none text-center md:text-end text-[84px] lg:text-[160px] md:text-[120px] font-bold">
              Finance
            </p>
            <p className="bg-clip-text bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] text-transparent leading-none text-end text-[24px] md:text-[32px] font-bold">
              on TON
            </p>
          </div>

          {/* White Text Overlay */}
          <div className="absolute w-full h-full px-[20px] pt-[135px] md:px-[40px] md:pt-[83px] bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] mask-container-1 animate-moveFrommiddle">
            <p className="text-white leading-none text-start text-sm md:text-[32px] font-bold xs:px-[30px] md:px-[7px]">
              Empowering the future of
            </p>
            <p className="text-white leading-none text-center md:text-start text-[50px] xl:text-[160px] lg:text-[145px] md:text-[100px] font-bold">
              Decentralized
            </p>
            <p className="text-white leading-none text-center md:text-end text-[84px] lg:text-[160px] md:text-[120px] font-bold">
              Finance
            </p>
            <p className="text-white leading-none text-end text-[24px] md:text-[32px] font-bold">
              on TON
            </p>
          </div>

          <div className="absolute w-full h-full px-[20px] pt-[135px] md:px-[40px] md:pt-[83px] bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] mask-container-2 animate-moveFromCenter">
            <p className="text-white leading-none text-start text-sm md:text-[32px] font-bold xs:px-[30px] md:px-[7px]">
              Empowering the future of
            </p>
            <p className="text-white leading-none text-center md:text-start text-[50px] xl:text-[160px] lg:text-[145px] md:text-[100px] font-bold">
              Decentralized
            </p>
            <p className="text-white leading-none text-center md:text-end text-[84px] lg:text-[160px] md:text-[120px] font-bold">
              Finance
            </p>
            <p className="text-white leading-none text-end text-[24px] md:text-[32px] font-bold">
              on TON
            </p>
          </div>
        </div>

        {/* Colored Text and Button Section */}
        <div className="hidden w-full grid-cols-12 md:grid md:absolute md:bottom-0 md:z-10 text-start">
          <div className="col-span-12 md:col-span-3"></div>
          <div className="col-span-12 px-5 md:col-span-9 md:bottom-0 md:z-10 text-start">
            <p className="text-[#1E2337] text-[14px] font-inter">
              Fast, secure, and scalable <br />
              DeFi solutions built on <br />
              <span className="text-[#0098EA]">The Open Network.</span>
            </p>

            <a href="#gettingStarted" className="px-[34px] mt-5 py-[17px] bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] rounded-[40px] justify-center items-center gap-2.5 inline-flex md:w-auto w-full">
              <span className="text-white text-[17px] font-semibold">
                Start your journey
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-12 mt-10 md:hidden md:absolute md:bottom-0 md:z-10 text-start">
        <div className="col-span-12 md:col-span-3"></div>
        <div className="col-span-12 px-5 md:col-span-9 md:bottom-0 md:z-10 text-start">
          <p className="text-[#1E2337] text-[14px] font-inter">
            Fast, secure, and scalable <br />
            DeFi solutions built on <br />
            <span className="text-[#0098EA]">The Open Network.</span>
          </p>

          <a href="#gettingStarted" className="px-[34px] mt-5 py-[17px] bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] rounded-[40px] justify-center items-center gap-2.5 inline-flex md:w-auto w-full">
            <span className="text-white text-[17px] font-semibold">
              Start your journey
            </span>
          </a>
        </div>
      </div>
    </section >
  );
};

export default HeroSection;
