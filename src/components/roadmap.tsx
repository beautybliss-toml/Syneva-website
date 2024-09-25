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
          "Development and launch of Synera's main website with MVP.",
      },
      {
        heading: "Integration with TON",
        description: "Full integration with the TON blockchain.",
      },
      {
        heading: "Smart Contract Audits",
        description: "Smart contract audits to ensure platform security.",
      },
      {
        heading: "Community Building",
        description:
          "Launch of social media communities and work with early adopters.",
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
          "Development and launch of Synera's main website with MVP.",
      },
      {
        heading: "Integration with TON",
        description: "Full integration with the TON blockchain.",
      },
      {
        heading: "Smart Contract Audits",
        description: "Smart contract audits to ensure platform security.",
      },
      {
        heading: "Community Building",
        description:
          "Launch of social media communities and work with early adopters.",
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
          "Development and launch of Synera's main website with MVP.",
      },
      {
        heading: "Integration with TON",
        description: "Full integration with the TON blockchain.",
      },
      {
        heading: "Smart Contract Audits",
        description: "Smart contract audits to ensure platform security.",
      },
      {
        heading: "Community Building",
        description:
          "Launch of social media communities and work with early adopters.",
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
          "Development and launch of Synera's main website with MVP.",
      },
      {
        heading: "Integration with TON",
        description: "Full integration with the TON blockchain.",
      },
      {
        heading: "Smart Contract Audits",
        description: "Smart contract audits to ensure platform security.",
      },
      {
        heading: "Community Building",
        description:
          "Launch of social media communities and work with early adopters.",
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
          "Development and launch of Synera's main website with MVP.",
      },
      {
        heading: "Integration with TON",
        description: "Full integration with the TON blockchain.",
      },
      {
        heading: "Smart Contract Audits",
        description: "Smart contract audits to ensure platform security.",
      },
      {
        heading: "Community Building",
        description:
          "Launch of social media communities and work with early adopters.",
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
          <div className="grid items-start grid-cols-12 gap-10 text-start">
            <div className="col-span-12 my-4 md:col-span-2">
              <p className="text-sm font-bold text-[#0098ea]">{title}</p>
            </div>
            <div
              className={`col-span-12 ${
                open ? "md:col-span-4" : "md:col-span-9"
              }`}
            >
              <h4
                className={`text-[#2d83ec] text-[64px] font-semibold leading-tight`}
              >
                {quarter}
              </h4>
            </div>
            <div className="flex justify-end w-full col-span-1 text-end">
              <ChevronDownIcon
                className={`w-7 h-7 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
        </DisclosureButton>
        <DisclosurePanel className="col-span-12 md:col-span-5">
          <div className="text-[#1e2337]">
            {details.map((item, index) => (
              <div key={index} className="mt-2 text-sm">
                <strong className="text-[#0098ea]">{item.heading}:</strong>{" "}
                {item.description}
              </div>
            ))}
          </div>
        </DisclosurePanel>
      </>
    )}
  </Disclosure>
);

const Roadmap: React.FC = memo(() => {
  return (
    <div className="py-16 bg-white">
      <div className="container max-w-screen-lg px-5 mx-auto">
        {/* Heading Section */}
        <div className="mb-10">
          <h2 className="text-[#0098ea] text-[17px] font-semibold">// 05</h2>
          <h3 className="text-[#1e2337] text-[40px] font-bold">Roadmap</h3>
        </div>

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
