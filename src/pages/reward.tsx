import { Button } from '@headlessui/react';
import { appBG, walletBG } from '../assets/images';

interface StepProps {
    number: number;
    title: string;
    description: string;
    imageSrc: string;
    altText: string;
}

const Step: React.FC<StepProps> = ({ number, title, description, imageSrc, altText }) => {
    return (
        <div className='md:p-12 p-5 bg-[#F7F9FB] rounded-2xl relative'>
            <h2 className='bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] text-transparent bg-clip-text text-6xl font-bold mb-10 w-fit'>
                {number}
            </h2>
            <h4 className='my-3 text-base font-semibold md:text-xl'>{title}</h4>
            <p className='text-sm opacity-70 text-[#1E2337]'>{description}</p>
            <img
                src={imageSrc}
                alt={altText}
                className='absolute top-0 right-0 md:h-[180px] md:w-[180px] h-[150px] w-[150px]'
                height={160}
                width={160}
            />
        </div>
    );
};

const Reward: React.FC = () => {
    return (
        <div className="max-w-screen-sm p-4 mx-auto my-4 md:my-11">
            <h2 className="text-[40px] my-5 font-bold">Reward</h2>
            <p className="text-sm opacity-70 text-[#1E2337] max-w-[360px]">
                In order to withdraw your coins to your wallet, please follow these simple steps:
            </p>

            <div className='grid gap-5 my-10'>
                <Step
                    number={1}
                    title="Connect your wallet"
                    description="Make sure you have a compatible wallet ready to receive the coins. If you don't have one yet, you can easily create one using one of the many cryptocurrency wallet providers available."
                    imageSrc={walletBG}
                    altText="Background illustration of a wallet"
                />

                <Button
                    className="py-[17px] bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] rounded-[40px] w-full text-white font-semibold"
                    aria-label="Connect wallet"
                >
                    Connect wallet
                </Button>

                <Step
                    number={2}
                    title="Log in to the application"
                    description="You must be logged in to your account to withdraw your rewards. Enter your login information and follow the steps to authenticate your identity."
                    imageSrc={appBG}
                    altText="Background illustration of the application"
                />

                <Button
                    className="py-[17px] bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] rounded-[40px] w-full text-white font-semibold"
                    aria-label="Download app"
                >
                    Download app
                </Button>
            </div>
        </div>
    );
};

export default Reward;