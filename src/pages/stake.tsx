import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { BusinessMan, Map, MapMobile } from '../assets/images';
import { Button } from "@headlessui/react";
import { HeaderSection } from "../components";
import { stakeData } from '../constants';

gsap.registerPlugin(TextPlugin);

const Stake: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const lockedFundsRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);

        if (lockedFundsRef.current) {
            gsap.fromTo(lockedFundsRef.current, { textContent: '0' }, {
                textContent: stakeData.lockedFunds,
                duration: 2,
                ease: 'power1.inOut',
                snap: { textContent: 1 },
                onUpdate: () => {
                    if (lockedFundsRef.current) {
                        lockedFundsRef.current.textContent =
                            parseInt(lockedFundsRef.current.textContent || '0').toLocaleString() + '+';
                    }
                }
            });
        }

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="max-w-screen-xl p-4 mx-auto my-4 md:my-11">
            <HeaderSection title={stakeData.title} description={stakeData.description} />
            <div className='grid gap-4 my-8 md:grid-cols-2'>
                <div>
                    {isMobile ? (
                        <img
                            src={MapMobile}
                            alt="Map"
                            className="block object-cover w-full h-32 border sm:h-60 bg-gray-50 object-fit-cover rounded-2xl"
                        />
                    ) : (
                        <img
                            src={Map}
                            alt="Map"
                            className="block object-cover w-full max-h-[400px] border bg-gray-50 object-fit-cover rounded-2xl"
                        />
                    )}
                </div>
                <div className='grid gap-4 md:grid-row-4'>
                    <div className="flex lg:flex-row flex-col gap-4 bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] rounded-2xl h-full items-center">
                        <p className="p-5 text-sm text-white lg:w-2/3 lg:p-11 lg:pr-0">{stakeData.validatorInfo}</p>
                        <div className='flex justify-end w-full lg:w-auto'>
                            <img src={BusinessMan} alt='BusinessMan' />
                        </div>
                    </div>
                    <div className="grid items-center h-full grid-cols-1 gap-2 p-5 bg-[#F7F9FB] border lg:p-11 rounded-2xl text-start">
                        <h3
                            ref={lockedFundsRef} // Ref for GSAP animation
                            className='bg-clip-text bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] text-transparent font-semibold sm:text-[60px] text-5xl w-fit'>
                            0
                        </h3>
                        <p className="text-sm text-start text-[#1E2337]">{stakeData.lockedFundsDescription}</p>
                    </div>
                </div>
                <div />
                <div>
                    <div className="grid grid-cols-4 gap-4 mb-5 xl:grid-cols-5">
                        <div className="col-span-3 lg:col-span-2">
                            <p className="text-sm text-start text-[#1E2337]">{stakeData.descriptionSection[0]}</p>
                        </div>
                        <div className="col-span-1 lg:hidden" />
                        <div className="col-span-1 lg:hidden" />
                        <div className="col-span-3 lg:col-span-2">
                            <p className="text-sm text-start text-[#1E2337]">
                                <span className="text-[#0098EA]">You have the opportunity</span>{" "}
                                {stakeData.descriptionSection[1]}
                            </p>
                        </div>
                        <div className="col-span-1 lg:hidden" />
                    </div>
                    <Button className={`bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] text-white w-full rounded-full text-base py-4`}>
                        Connect wallet
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Stake;
