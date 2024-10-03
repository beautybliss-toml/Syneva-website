import React from "react";
import CashbackIcon from "../assets/images/GettingStartedIcons/cashback-icon.png";
import DocumentSearchIcon from "../assets/images/GettingStartedIcons/document-search-with-magnifying-glass.png";
import PurpleWalletIcon from "../assets/images/GettingStartedIcons/purple-wallet-with-floating-coins-purple.png";
import TargetIcon from "../assets/images/GettingStartedIcons/target-icon-with-arrows-reaching-center-darts.png";
import WalletCashbackIcon from "../assets/images/GettingStartedIcons/wallet-with-cashback-icon.png";
import { Button } from "@headlessui/react";

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  isActive?: boolean;
}

const StepCard: React.FC<StepCardProps> = ({
  stepNumber,
  title,
  description,
  imgSrc,
  imgAlt,
  isActive = false,
}) => {
  return (
    <div
      className={`group rounded-2xl grid md:grid-cols-3 overflow-hidden relative md:static ${isActive
        ? "bg-[#F7F9FB] md:bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] md:text-white border text-[#1e2337]"
        : "bg-[#F7F9FB] border text-[#1e2337] md:opacity-50 md:hover:opacity-100"
        } md:hover:bg-gradient-to-r md:hover:from-[#2d83ec] md:hover:to-[#1ac9ff] md:hover:text-white md:transition-all md:duration-500 md:ease-in-out hover:ease-linear md:transform md:hover:scale-105`}
    >
      <div className="flex flex-col justify-between md:col-span-2 p-7">
        <h2
          className={`text-[64px] font-semibold w-10 md:w-auto bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] bg-clip-text text-transparent ${isActive
            ? "md:text-white text-[#1e2337]"
            : "md:text-[#1e2337] md:group-hover:text-white"
            }`}
        >
          {stepNumber}
        </h2>
        <div>
          <h3
            className={`md:text-xl text-base font-semibold  ${isActive
              ? ""
              : "md:opacity-20 md:group-hover:text-white md:group-hover:opacity-100"
              }`}
          >
            {title}
          </h3>
          <p
            className={`text-sm font-normal ${isActive
              ? "md:opacity-70"
              : "md:opacity-20 md:group-hover:text-white md:group-hover:opacity-100"
              }`}
          >
            {description}
          </p>
        </div>
      </div>
      <div
        className={`absolute right-0 md:static md:col-span-1 flex items-center ${isActive ? "-top-2" : "top-3"
          }`}
      >
        <img
          className={`object-contain w-28 lg:w-44 md:w-full md:h-full ${isActive
            ? ""
            : "md:opacity-50 md:mix-blend-luminosity md:group-hover:opacity-100 md:group-hover:mix-blend-normal"
            }`}
          src={imgSrc}
          alt={imgAlt}
        />
      </div>
    </div>
  );
};

const GettingStarted: React.FC = () => {
  return (
    <section className="py-6 md:py-16" id="gettingStarted">
      <div className="container max-w-screen-xl p-5 mx-auto">
        <div className="grid items-center grid-cols-12 mb-16">
          <div className="text-[#0098ea] text-[17px] font-semibold col-span-12 md:col-span-3 mb-5 md:mb-0">
            // 06
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="text-[#1e2337] md:text-[40px] text-[32px] font-bold md:flex gap-3">
              How to start with
              <span className="flex items-center gap-1">
                <img
                  src="/logo.svg"
                  alt="Syneva logo"
                  height={30}
                  width={30}
                  className="w-[38px] h-[30px]"
                />
                Syneva
              </span>
            </h2>
          </div>
        </div>
        <div className="grid gap-5 my-5 md:grid-cols-2">
          <StepCard
            stepNumber={1}
            title="Create or connect a TON wallet"
            description="To start using Syneva, you will need a wallet that supports the TON blockchain"
            imgSrc={PurpleWalletIcon}
            imgAlt="TON Wallet Icon"
            isActive={false}
          />
          <StepCard
            stepNumber={2}
            title="Fund your balance with TON or other supported tokens"
            description="You will need TON tokens to get started with DeFi on Syneva"
            imgSrc={CashbackIcon}
            imgAlt="Cashback Icon"
          />
          <StepCard
            stepNumber={3}
            title="Explore Syneva's features"
            description="Lock your tokens in smart contracts to earn rewards for participating in liquid pools and supporting the network"
            imgSrc={DocumentSearchIcon}
            imgAlt="Document Search Icon"
          />
          <StepCard
            stepNumber={4}
            title="Choose a strategy that interests you"
            description="Get stable rewards for storing tokens or provide liquidity to pools and earn passive income"
            imgSrc={TargetIcon}
            imgAlt="Target Icon"
          />
          <StepCard
            stepNumber={5}
            title="Monitor your income and asset management"
            description="In your personal account, you will be able to track your investments, assets, interest rates, and rewards from participating in the Syneva ecosystem"
            imgSrc={WalletCashbackIcon}
            imgAlt="Wallet Cashback Icon"
          />
          <div className="flex items-end justify-center md:justify-end">
            <Button className="h-[55px] px-[34px] py-[17px] bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] rounded-[40px] justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-[17px] font-semibold">
                Start your journey
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
