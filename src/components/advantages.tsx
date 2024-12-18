import React from "react";
import { Airdrop, Staking, Swap } from "../assets/images";

const advantages: React.FC = () => {
  return (
    <div className="bg-[#f7f9fb] md:py-16">
      <div className="container grid max-w-screen-xl grid-cols-12 p-5 py-10 mx-auto md:py-0">
        <h2 className="text-[#0098ea] text-[17px] font-semibold md:col-span-3 col-span-12 items-center flex justify-start mb-5 md:mb-0">
          // 01
        </h2>
        <div className="col-span-12 md:col-span-9">
          <h2 className="text-[#1e2337] md:text-[40px] text-[32px] font-bold leading-tight">
            Take advantage
            <br />
            of all the benefits with{" "}
            <span className="inline-flex items-center gap-1">
              <img
                src="/logo.svg"
                alt="logo"
                height={30}
                width={30}
                className="md:w-[38px] md:h-[30px] h-auto w-6"
              />
              syneva
            </span>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-3"></div>
        <div className="grid items-center grid-cols-1 col-span-12 pt-10 md:col-span-9 lg:col-span-7 md:grid-cols-2 gap-7">
          <div className="overflow-hidden shadow-2xl rounded-[1.5rem] border relative">
            <h2 className="absolute w-full text-2xl font-bold text-center top-8">
              Staking
            </h2>
            <img src={Staking} alt="Staking" className="w-full h-auto" />
          </div>
          <div className="row-span-2 overflow-hidden shadow-2xl rounded-[1.5rem] border relative ">
            <h2 className="absolute w-full text-2xl font-bold text-center text-white top-8">
              Swap
            </h2>
            <img src={Swap} alt="Swap" className="w-full h-auto" />
          </div>
          <div className="overflow-hidden shadow-2xl rounded-[1.5rem] border relative">
            <h2 className="absolute w-full text-2xl font-bold text-center text-white top-8">
              Airdrop
            </h2>
            <img src={Airdrop} alt="Airdrop" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default advantages;
