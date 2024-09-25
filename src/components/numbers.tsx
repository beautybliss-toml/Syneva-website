import React from "react";

interface NumbersProps {
  totalLockedFunds: string;
  totalUsers: string;
  totalOperations: string;
}

const Numbers: React.FC<NumbersProps> = ({
  totalLockedFunds,
  totalUsers,
  totalOperations,
}) => {
  return (
    <div className="py-6 md:py-16">
      <div className="container grid max-w-screen-xl grid-cols-12 p-5 mx-auto md:items-center">
        <div className="text-[#0098ea] text-[17px] font-semibold col-span-12 md:col-span-3">
          // 02
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="text-[#1e2337] md:text-[40px] text-[32px] font-bold inline-flex gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1">
              <img
                src="/logo.svg"
                alt="Syneva logo"
                height={30}
                width={30}
                className="w-[30px] md:w-[38px] h-[30px]"
              />
              Syneva
            </span>{" "}
            in numbers
          </h2>
        </div>
        <div className="col-span-12 md:col-span-3"></div>
        <div className="col-span-12 pt-10 md:col-span-7">
          <div className="grid items-center grid-cols-1 mt-10 md:mt-4 lg:grid-cols-2">
            <p className="opacity-70 text-[#1e2337] text-sm font-normal">
              Total number of locked funds
            </p>
            <span className="bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] bg-clip-text text-transparent text-5xl md:text-[64px] font-semibold">
              {totalLockedFunds}
            </span>
          </div>
          <div className="grid items-center grid-cols-1 mt-10 md:mt-20 lg:grid-cols-2">
            <p className="opacity-70 text-[#1e2337] text-sm font-normal">
              Number of users and active wallets
            </p>
            <span className="bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] bg-clip-text text-transparent text-5xl md:text-[64px] font-semibold">
              {totalUsers}
            </span>
          </div>
          <div className="grid items-center grid-cols-1 mt-10 md:mt-20 lg:grid-cols-2">
            <p className="opacity-70 text-[#1e2337] text-sm font-normal">
              Number of operations over the last day
            </p>
            <span className="bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] bg-clip-text text-transparent text-5xl md:text-[64px] font-semibold">
              {totalOperations}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
