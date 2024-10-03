import React from 'react';

interface HeaderSectionProps {
    title: string;
    description?: string; // Make description optional if it might be absent
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ title, description }) => {
    return (
        <div className="grid items-center my-5 md:grid-cols-12">
            <div className="md:col-span-3"></div>
            <div className="md:col-span-9">
                <h2 className="text-[40px] font-bold">{title}</h2>
                {description && (
                    <p className="opacity-70 text-[#1e2337] mt-7 text-sm font-normal">
                        {description.split('\n').map((line, index) => (
                            <span key={index}>
                                {line}
                                <br />
                            </span>
                        ))}
                    </p>
                )}
            </div>
        </div>
    );
};

export default HeaderSection;