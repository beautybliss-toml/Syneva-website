import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface DownloadCardProps {
    platform: string;
    icon: JSX.Element;
    description?: string;
    onClick: () => void;
    badgeText?: string;
    badgeColor?: string;
}

const DownloadCard: React.FC<DownloadCardProps> = ({
    platform,
    icon,
    description,
    onClick,
    badgeText,
    badgeColor
}) => {
    const cardRef = useRef(null);

    useEffect(() => {
        // GSAP animation for card fade-in
        gsap.fromTo(
            cardRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power4.out', delay: 0.3, stagger: 0.3 }
        );
    }, []);

    const handleMouseEnter = () => {
        gsap.to(cardRef.current, { scale: 1.05, duration: 0.5 });
    };

    const handleMouseLeave = () => {
        gsap.to(cardRef.current, { scale: 1, duration: 0.5 });
    };


    return (
        <div
            ref={cardRef}
            className="bg-[#F7F9FB] group hover:bg-gradient-to-r hover:from-[#2d83ec] hover:to-[#1ac9ff] relative flex items-center justify-center md:h-32 h-28 gap-2 rounded-2xl cursor-pointer"
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {icon}
            <h2 className={`text-lg font-bold group-hover:text-white ${platform === 'Windows' ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff]' : ''}`}>
                {platform}
            </h2>
            {description && (
                <p className="absolute text-[10px] bottom-3 text-transparent bg-clip-text bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] opacity-70 group-hover:text-white">
                    {description}
                </p>
            )}
            {badgeText && (
                <div className={`absolute top-2 right-2 ${badgeColor} rounded-full px-5 py-2`}>
                    <span className="text-[10px] text-[#1E2337] opacity-70">{badgeText}</span>
                </div>
            )}
        </div>
    );
};

export default DownloadCard;