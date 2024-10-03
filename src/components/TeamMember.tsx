import React from 'react';

interface TeamMemberProps {
    name: string;
    role: string;
    image: {
        src: string;
        alt: string;
        class: string;
    };
    className: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, className }) => {
    return (
        <div className={`flex flex-col items-center justify-start transition-transform transform hover:scale-105 ${className}`}>
            <div className='flex justify-start w-full'>
                <img
                    src={image.src}
                    alt={image.alt}
                    className={`rounded-3xl ${image.class}`}
                />
            </div>
            <div className="w-full pt-4">
                <h4 className="text-xs font-semibold md:text-sm">{name}</h4>
                <p className="lg:text-sm text-xs text-[#0098EA]">{role}</p>
            </div>
        </div>
    );
}

export default TeamMember;