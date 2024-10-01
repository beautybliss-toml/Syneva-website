import React from "react";
import { Button } from "@headlessui/react";

const HeroSection: React.FC = () => {
  return (
    <section className="max-w-screen-xl mx-auto overflow-hidden lg:my-28 my-14">
      <div className="relative flex items-center justify-center h-[400px] md:h-[500px] mx-auto">
        <div className="relative w-full h-full">
          {/* SVG Backgrounds */}
          <svg
            width="514"
            height="386"
            viewBox="0 0 514 386"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0 w-[300px] h-auto md:w-auto md:h-auto animate-moveFrommiddle"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2d83ec" stopOpacity="1" />
                <stop offset="100%" stopColor="#2d83ec" stopOpacity="1" />
                <clipPath id="clip1">
                  <path
                    d="M141.973 339.316L397.151 166.153C470.95 116.074 507.849 91.0342 512.626 68.7244C516.755 49.4484 510.598 29.4101 496.358 15.7779C479.877 0 435.284 0 346.098 0H90.9198C59.0948 0 43.1824 0 31.0269 6.19354C20.3347 11.6415 11.6415 20.3346 6.19354 31.0269C0 43.1824 0 59.0949 0 90.9198V264.082C0 319.743 0 347.573 11.5911 362.817C21.6873 376.095 37.1077 384.267 53.7641 385.165C72.8866 386.197 95.9153 370.57 141.973 339.316Z"
                  />
                </clipPath>
              </linearGradient>
            </defs>
            <g>
              <path
                d="M141.973 339.316L397.151 166.153C470.95 116.074 507.849 91.0342 512.626 68.7244C516.755 49.4484 510.598 29.4101 496.358 15.7779C479.877 0 435.284 0 346.098 0H90.9198C59.0948 0 43.1824 0 31.0269 6.19354C20.3347 11.6415 11.6415 20.3346 6.19354 31.0269C0 43.1824 0 59.0949 0 90.9198V264.082C0 319.743 0 347.573 11.5911 362.817C21.6873 376.095 37.1077 384.267 53.7641 385.165C72.8866 386.197 95.9153 370.57 141.973 339.316Z"
                fill="url(#gradient)"
              />
            </g>
          </svg>

          {/* SVG Backgrounds */}
          <svg
            width="514"
            height="386"
            viewBox="0 0 514 386"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 right-0 w-[300px] h-auto md:w-auto md:h-auto animate-moveFromCenter"
          >
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2d83ec" stopOpacity="1" />
                <stop offset="100%" stopColor="#1ac9ff" stopOpacity="1" />
              </linearGradient>
            </defs>
            <g>
              <path
                d="M372.027 46.3417L116.849 219.504C43.0505 269.583 6.15128 294.623 1.3735 316.933C-2.75453 336.209 3.4025 356.247 17.642 369.879C34.1228 385.657 78.7157 385.657 167.902 385.657H423.08C454.905 385.657 470.818 385.657 482.973 379.464C493.665 374.016 502.358 365.323 507.806 354.63C514 342.475 514 326.562 514 294.737V121.575C514 65.9142 514 38.084 502.409 22.8399C492.313 9.5618 476.892 1.39032 460.236 0.491852C441.113 -0.539642 418.085 15.0875 372.027 46.3417Z"
                fill="url(#gradient1)"
              />
            </g>
          </svg>

          {/* Gradient Text */}
          <div className="absolute w-full p-4 md:p-11">
            <p className="bg-clip-text bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] text-transparent leading-none text-start text-sm md:text-[32px] font-bold">
              Empowering the future of
            </p>
            <p className="bg-clip-text bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] text-transparent leading-none text-center md:text-start text-[50px] lg:text-[160px] md:text-[100px] font-bold">
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
          <div className="absolute w-full p-4 md:p-11" style={{ clipPath: "url(#clip1)" }}>
            <p className="text-white leading-none text-start text-sm md:text-[32px] font-bold">
              Empowering the future of
            </p>
            <p className="text-white leading-none text-center md:text-start text-[50px] lg:text-[160px] md:text-[100px] font-bold">
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

            <Button className="px-[34px] mt-5 py-[17px] bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] rounded-[40px] justify-center items-center gap-2.5 inline-flex md:w-auto w-full">
              <span className="text-white text-[17px] font-semibold">
                Start your journey
              </span>
            </Button>
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

          <Button className="px-[34px] mt-5 py-[17px] bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] rounded-[40px] justify-center items-center gap-2.5 inline-flex md:w-auto w-full">
            <span className="text-white text-[17px] font-semibold">
              Start your journey
            </span>
          </Button>
        </div>
      </div>
    </section >
  );
};

export default HeroSection;
