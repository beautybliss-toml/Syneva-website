import React from 'react';

const Loading: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-[55vh] md:bg-gray-100 bg-white">
            <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] animate-spin">
                    <div className="w-20 h-20 m-2 bg-gray-100 rounded-full"></div>
                </div>
                <p className="mt-5 text-xl font-semibold bg-clip-text bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] text-transparent">Loading...</p>
            </div>
        </div>
    );
};

export default Loading;