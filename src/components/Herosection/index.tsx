import React from "react";
import HeroSectionImg from "../../assets/Exclude.png";

const HeroSection: React.FC = () => {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="relative w-full h-[50vh] mx-auto">
        <img
          className="object-contain mx-auto absolute top-0 left-0 right-0 w-full max-w-screen-xl h-fit"
          src={HeroSectionImg}
        />
        <div className="absolute left-[20%] bottom-0 grid gap-4">
          <div className="" style={{ width: "172px" }}>
            <span className="text-[#1E2337] text-[14px] font-inter font-normal leading-[19.60px] break-words">
              Fast, secure, and scalable DeFi solutions built on{" "}
            </span>
            <span className="text-[#0098EA] text-[14px] font-inter font-normal leading-[19.60px] break-words">
              The Open Network.
            </span>
          </div>
          <div
            className="flex justify-center items-center gap-[10px] rounded-[40px]"
            style={{
              left: "281px",
              top: "456px",
              padding: "17px 34px",
              background:
                "linear-gradient(0deg, #0098EA 0%, #0098EA 100%), linear-gradient(90deg, #2D83EC 0%, rgba(26, 201, 255, 0.80) 100%)",
            }}
          >
            <div className="text-white text-[17px] font-inter font-semibold break-words">
              Start your journey
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
