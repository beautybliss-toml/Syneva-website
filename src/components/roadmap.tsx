import React from "react";

const Roadmap: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container max-w-screen-lg px-5 mx-auto">
        {/* Heading Section */}
        <div className="mb-10">
          <h2 className="text-[#0098ea] text-[17px] font-semibold">// 05</h2>
          <h3 className="text-[#1e2337] text-[40px] font-bold">Roadmap</h3>
        </div>

        {/* Roadmap Phases */}
        <div className="border-t border-neutral-300">
          <div className="py-10">
            <h4 className="text-[#2d83ec] text-[64px] font-semibold leading-tight">
              Q4 2024
            </h4>
            <p className="text-sm font-bold text-[#0098ea] mb-4">
              Foundation Phase
            </p>
            <div className="text-[#1e2337]">
              <p className="text-sm">
                <strong className="text-[#0098ea]">Project Launch:</strong>{" "}
                Official announcement and launch of the Synera brand.
              </p>
              <p className="mt-2 text-sm">
                <strong className="text-[#0098ea]">Website and MVP:</strong>{" "}
                Development and launch of Synera's main website with minimum
                viable product (MVP), including core DeFi features: staking and
                simple decentralized exchange (DEX).
              </p>
              <p className="mt-2 text-sm">
                <strong className="text-[#0098ea]">
                  Integration with TON:
                </strong>{" "}
                Full integration with the TON blockchain, including support for
                TON Wallet.
              </p>
              <p className="mt-2 text-sm">
                <strong className="text-[#0098ea]">
                  Smart Contract Audits:
                </strong>{" "}
                Smart contract audits to ensure platform security.
              </p>
              <p className="mt-2 text-sm">
                <strong className="text-[#0098ea]">Community Building:</strong>{" "}
                Launch of social media communities and start working with the
                first users (early adopters and ambassadors).
              </p>
            </div>
          </div>

          {/* Q1 2025 */}
          <div className="py-10 border-t border-neutral-300">
            <h4 className="text-[#2d83ec] text-[64px] font-semibold leading-tight">
              Q1 2025
            </h4>
            <p className="text-sm font-bold text-[#0098ea] mb-4">
              Growth Phase
            </p>
            <div className="text-[#1e2337]">
              <p className="text-sm">More roadmap details for Q1 2025...</p>
            </div>
          </div>

          {/* Q2 2025 */}
          <div className="py-10 border-t border-neutral-300">
            <h4 className="text-[#2d83ec] text-[64px] font-semibold leading-tight">
              Q2 2025
            </h4>
            <p className="text-sm font-bold text-[#0098ea] mb-4">
              Ecosystem Expansion
            </p>
            <div className="text-[#1e2337]">
              <p className="text-sm">More roadmap details for Q2 2025...</p>
            </div>
          </div>

          {/* Q3 2025 */}
          <div className="py-10 border-t border-neutral-300">
            <h4 className="text-[#2d83ec] text-[64px] font-semibold leading-tight">
              Q3 2025
            </h4>
            <p className="text-sm font-bold text-[#0098ea] mb-4">
              User & Community Growth
            </p>
            <div className="text-[#1e2337]">
              <p className="text-sm">More roadmap details for Q3 2025...</p>
            </div>
          </div>

          {/* Q4 2025 */}
          <div className="py-10 border-t border-neutral-300">
            <h4 className="text-[#2d83ec] text-[64px] font-semibold leading-tight">
              Q4 2025
            </h4>
            <p className="text-sm font-bold text-[#0098ea] mb-4">
              Full DeFi Ecosystem
            </p>
            <div className="text-[#1e2337]">
              <p className="text-sm">More roadmap details for Q4 2025...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
