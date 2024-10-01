import React, { memo } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface RoadmapPhase {
  title: string;
  quarter: string;
  details: { heading: string; description: string }[];
}

const phases: RoadmapPhase[] = [
  {
    title: "Foundation Phase",
    quarter: "Q4 2024",
    details: [
      {
        heading: "Project Launch",
        description: "Official announcement and launch of the Synera brand.",
      },
      {
        heading: "Website and MVP",
        description:
          "Development and launch of Synera's main website with minimum viable product (MVP), including core DeFi features: staking and simple decentralized exchange (DEX).",
      },
      {
        heading: "Integration with TON",
        description:
          "Full integration with the TON blockchain, including support for TON Wallet.",
      },
      {
        heading: "Smart Contract Audits",
        description: "Smart contract audits to ensure platform security.",
      },
      {
        heading: "Community Building",
        description:
          "Launch of social media communities and start working with the first users (early adopters and ambassadors).",
      },
    ],
  },
  {
    title: "Growth Phase",
    quarter: "Q1 2025",
    details: [
      {
        heading: "Project Launch",
        description: "Official announcement and launch of the Synera brand.",
      },
      {
        heading: "Website and MVP",
        description:
          "Development and launch of Synera's main website with minimum viable product (MVP), including core DeFi features: staking and simple decentralized exchange (DEX).",
      },
      {
        heading: "Integration with TON",
        description:
          "Full integration with the TON blockchain, including support for TON Wallet.",
      },
      {
        heading: "Smart Contract Audits",
        description: "Smart contract audits to ensure platform security.",
      },
      {
        heading: "Community Building",
        description:
          "Launch of social media communities and start working with the first users (early adopters and ambassadors).",
      },
    ],
  },
  {
    title: "Ecosystem Expansion",
    quarter: "Q2 2025",
    details: [
      {
        heading: "Project Launch",
        description: "Official announcement and launch of the Synera brand.",
      },
      {
        heading: "Website and MVP",
        description:
          "Development and launch of Synera's main website with minimum viable product (MVP), including core DeFi features: staking and simple decentralized exchange (DEX).",
      },
      {
        heading: "Integration with TON",
        description:
          "Full integration with the TON blockchain, including support for TON Wallet.",
      },
      {
        heading: "Smart Contract Audits",
        description: "Smart contract audits to ensure platform security.",
      },
      {
        heading: "Community Building",
        description:
          "Launch of social media communities and start working with the first users (early adopters and ambassadors).",
      },
    ],
  },
  {
    title: "User & Community Growth",
    quarter: "Q3 2025",
    details: [
      {
        heading: "Project Launch",
        description: "Official announcement and launch of the Synera brand.",
      },
      {
        heading: "Website and MVP",
        description:
          "Development and launch of Synera's main website with minimum viable product (MVP), including core DeFi features: staking and simple decentralized exchange (DEX).",
      },
      {
        heading: "Integration with TON",
        description:
          "Full integration with the TON blockchain, including support for TON Wallet.",
      },
      {
        heading: "Smart Contract Audits",
        description: "Smart contract audits to ensure platform security.",
      },
      {
        heading: "Community Building",
        description:
          "Launch of social media communities and start working with the first users (early adopters and ambassadors).",
      },
    ],
  },
  {
    title: "Full DeFi Ecosystem",
    quarter: "Q4 2025",
    details: [
      {
        heading: "Project Launch",
        description: "Official announcement and launch of the Synera brand.",
      },
      {
        heading: "Website and MVP",
        description:
          "Development and launch of Synera's main website with minimum viable product (MVP), including core DeFi features: staking and simple decentralized exchange (DEX).",
      },
      {
        heading: "Integration with TON",
        description:
          "Full integration with the TON blockchain, including support for TON Wallet.",
      },
      {
        heading: "Smart Contract Audits",
        description: "Smart contract audits to ensure platform security.",
      },
      {
        heading: "Community Building",
        description:
          "Launch of social media communities and start working with the first users (early adopters and ambassadors).",
      },
    ],
  },
];

const PhaseDisclosure: React.FC<RoadmapPhase> = ({
  title,
  quarter,
  details,
}) => (
  <Disclosure>
    {({ open }) => (
      <>
        <DisclosureButton
          className="flex items-center w-full gap-2 group"
          aria-expanded={open}
        >
          <div className="grid items-center w-full grid-cols-4 gap-2 sm:gap-10 sm:grid-cols-12 sm:items-start text-start">
            <div className="hidden col-span-12 my-4 md:col-span-3 sm:block">
              <p className="text-sm font-bold text-[#0098ea]">{title}</p>
            </div>
            <div
              className={`col-span-3 ${
                open ? "md:col-span-3" : "md:col-span-7"
              }`}
            >
              <h4
                className={`bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] bg-clip-text text-transparent md:text-[64px] text-5xl font-semibold leading-tight md:-ml-[10px]`}
              >
                {quarter}
              </h4>
            </div>
            <DisclosurePanel className="hidden col-span-12 md:col-span-4 sm:block">
              <div className="block col-span-12 my-4 sm:hidden md:col-span-2">
                <p className="text-sm font-bold text-[#0098ea]">{title}</p>
              </div>
              <div className="text-[#1e2337]">
                {details.map((item, index) => (
                  <div key={index} className="mt-2 text-sm md:mt-5">
                    <strong className="text-[#0098ea]">{item.heading}:</strong>
                    <br />
                    {item.description}
                  </div>
                ))}
              </div>
            </DisclosurePanel>
            <div className="flex justify-end w-full col-span-1 sm:col-span-2 text-end">
              <ChevronDownIcon
                className={`w-10 h-10 font-light transition-transform text-[#0098EA] ${
                  open ? "rotate-180" : ""
                }`}
              />
            </div>
            <DisclosurePanel className="col-span-4 sm:hidden md:col-span-5">
              <div className="block col-span-12 pb-5 my-4 sm:hidden md:col-span-2">
                <p className="text-sm font-bold text-[#0098ea]">{title}</p>
              </div>
              <div className="text-[#1e2337]">
                {details.map((item, index) => (
                  <div key={index} className="mb-5 text-sm">
                    <strong className="text-[#0098ea]">{item.heading}:</strong>
                    <br />
                    {item.description}
                  </div>
                ))}
              </div>
            </DisclosurePanel>
          </div>
        </DisclosureButton>
      </>
    )}
  </Disclosure>
);

const Roadmap: React.FC = memo(() => {
  return (
    <div className="py-10 bg-white sm:py-16">
      <div className="container max-w-screen-xl px-5 mx-auto">
        <div className="grid items-start grid-cols-1 md:mb-10 mb-7 md:grid-cols-12">
          <div className="col-span-12 md:col-span-3">
            <h2 className="text-[17px] font-semibold text-[#0098EA] mt-3 mb-5 md:mb-0">
              // 05
            </h2>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h3 className="text-[#1e2337] md:text-[40px] text-[32px] font-bold">
              Roadmap
            </h3>
          </div>
        </div>
        {/* Heading Section */}

        {/* Roadmap Phases */}
        {phases.map((phase, index) => (
          <div key={index} className="py-10 border-t border-neutral-300">
            <PhaseDisclosure {...phase} />
          </div>
        ))}
      </div>
    </div>
  );
});

export default Roadmap;
