// src/components/Privacy.tsx
import React from 'react';
import { HeaderSection } from '../components';
import { staticPrivacyPolicy } from '../constants'; // Adjust the import path as needed

const Privacy: React.FC = () => {
    return (
        <div className='max-w-screen-xl p-4 mx-auto my-4 md:my-11'>
            <HeaderSection title="Privacy Policy" />
            <div className='my-6 md:my-10'>
                {staticPrivacyPolicy.data.map((paragraph, index) => (
                    <p key={index} className='text-sm leading-relaxed'>
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Privacy;
