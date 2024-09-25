import React from "react";
import { Chris, DoubleQuotes } from "../assets/images";
import { IoIosArrowForward } from "react-icons/io";

const Review: React.FC = () => {
  return (
    <div className="bg-[#0098ea] py-16">
      <div className="container max-w-screen-xl px-5 mx-auto">
        <div className="grid items-start grid-cols-1 md:grid-cols-12">
          <div className="col-span-12 md:col-span-3">
            <h2 className="text-[17px] font-semibold text-white mt-3">// 04</h2>
          </div>
          <div className="col-span-12 md:col-span-6">
            <h3 className="text-white md:text-[40px] text-[32px] font-bold ">
              Reviews
            </h3>
            <div className="flex flex-col items-center justify-start gap-10 mt-10">
              {/* User Image */}
              <div className="flex items-center justify-start w-full gap-5 text-white">
                <img
                  className="w-[120px] h-[120px] rounded-full"
                  src={Chris}
                  height={120}
                  width={120}
                  alt="User Review Avatar"
                />
                <div className="text-start">
                  <h4 className="text-lg font-semibold">Chris L.</h4>
                  <p className="text-sm opacity-70">Blockchain Developer</p>
                </div>
              </div>

              {/* Review Text */}
              <div className="text-white md:relative">
                <div className="flex justify-start w-full md:absolute md:-left-24">
                  <img
                    src={DoubleQuotes}
                    alt="DoubleQuotes"
                    className="w-8 h-8 md:h-16 md:w-16"
                  />
                </div>
                <p className="mt-4 font-light md:mt-0 md:text-2xl">
                  I’ve used several DeFi platforms, but Synera offers the
                  smoothest and most user-friendly experience, all while
                  leveraging TON’s scalability.
                </p>
              </div>
            </div>
          </div>
          <div>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
