import React, { useState } from "react";
import { Chris, DoubleQuotes } from "../assets/images";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// Dummy review data (add as many as you'd like)
const reviews = [
  {
    name: "Chris L.",
    role: "Blockchain Developer",
    avatar: Chris,
    review:
      "I’ve used several DeFi platforms, but Synera offers the smoothest and most user-friendly experience, all while leveraging TON’s scalability.",
  },
  {
    name: "Jane D.",
    role: "DeFi Enthusiast",
    avatar: Chris, // Replace with actual image
    review:
      "Synera provides exceptional performance and is incredibly scalable. I’m genuinely impressed with how well it integrates with TON.",
  },
  {
    name: "Alex K.",
    role: "Crypto Investor",
    avatar: Chris, // Replace with actual image
    review:
      "Synera’s user experience is unmatched in the DeFi space. It’s fast, secure, and the team clearly knows what they are doing.",
  },
];

const Review: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-[#0098ea] py-16">
      <div className="container max-w-screen-xl px-5 mx-auto">
        <div className="grid items-start grid-cols-1 md:grid-cols-12">
          <div className="col-span-12 md:col-span-3">
            <h2 className="text-[17px] font-semibold text-white mt-3 mb-5 md:mb-0">
              // 04
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6">
            <h3 className="text-white md:text-[40px] text-[32px] font-bold ">
              Reviews
            </h3>
            <div className="flex flex-col items-center justify-start gap-10 mt-10">
              {/* User Image */}
              <div className="flex items-center justify-start w-full gap-5 text-white">
                <img
                  className="md:w-[120px] md:h-[120px] w-[90px] h-[90px] rounded-full"
                  src={reviews[currentIndex].avatar}
                  height={120}
                  width={120}
                  alt="User Review Avatar"
                />
                <div className="text-start">
                  <h4 className="text-lg font-semibold">
                    {reviews[currentIndex].name}
                  </h4>
                  <p className="text-sm opacity-70">
                    {reviews[currentIndex].role}
                  </p>
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
                  {reviews[currentIndex].review}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-end h-full col-span-12 gap-12 pb-10 mt-5 text-white md:mt-0 md:col-span-3">
            <IoIosArrowBack
              className={`cursor-pointer h-7 w-7 ${
                currentIndex === 0 ? "opacity-50" : "opacity-100"
              }`}
              onClick={handlePrev}
            />
            <IoIosArrowForward
              className={`cursor-pointer h-7 w-7 ${
                currentIndex === reviews.length - 1
                  ? "opacity-50"
                  : "opacity-100"
              }`}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
