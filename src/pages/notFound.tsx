import React from 'react';
import { Link } from 'react-router-dom'; // If you are using React Router

const NotFoundPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <h1 className="text-6xl font-bold bg-clip-text bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] text-transparent">404</h1>
            <p className="mt-4 text-2xl font-semibold text-gray-700">Page Not Found</p>
            <p className="mt-2 text-gray-600">
                Sorry, we couldn't find the page you were looking for.
            </p>
            <Link
                to="/"
                className="px-6 py-3 mt-6 text-white transition-all bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] rounded-2xl"
            >
                Go Home
            </Link>
        </div>
    );
};

export default NotFoundPage;