import React from "react";
import { Airdrop, Staking, Swap } from "../assets/images";

const advantages: React.FC = () => {
  return (
    <div className="bg-[#f7f9fb] md:py-16">
      <div className="container grid p-5 mx-auto md:grid-cols-12 max-w-screen-2xl">
        <h2 className="text-[#0098ea] text-[17px] font-semibold md:col-span-3">
          // 01
        </h2>
        <div className="md:col-span-9">
          <h2 className="text-[#1e2337] md:text-[40px] text-[32px] font-bold">
            Take advantage
          </h2>
          <h2 className="text-[#1e2337] text-[40px] font-bold">
            of all the benefits with{" "}
            <span className="inline-flex items-center gap-1">
              <img
                src="/logo.svg"
                alt="logo"
                height={30}
                width={30}
                className="w-[38px] h-[30px]"
              />
              syneva
            </span>
          </h2>
          <div className="grid items-center grid-cols-1 pt-10 md:pr-20 md:grid-cols-2 gap-7">
            <div className="">
              <img src={Staking} alt="Staking" className="w-full h-auto" />
            </div>
            <div className="row-span-2">
              <img src={Swap} alt="Swap" className="w-full h-auto" />
            </div>
            <div className="">
              <img src={Airdrop} alt="Airdrop" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default advantages;
