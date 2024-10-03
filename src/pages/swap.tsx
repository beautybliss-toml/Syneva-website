import { useEffect, useState, useRef } from 'react';
import { Button } from "@headlessui/react";
import gsap from 'gsap';
import { CurrencyDropdownButton, CurrencyDisplay } from '../components';
import { SwapIcon } from "../assets/images";
import { currencies as data } from '../constants';

const Swap: React.FC = () => {
    const [currencies, setCurrencies] = useState<{ name: string; icon: string }[]>([]);
    const [payCurrency, setPayCurrency] = useState('SNV');
    const [receiveCurrency, setReceiveCurrency] = useState('TON');
    const [payAmount, setPayAmount] = useState(1);
    const [receiveAmount, setReceiveAmount] = useState(5.55);
    const swapIconRef = useRef<HTMLImageElement>(null);

    // Fetch currencies from backend
    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                // const response = await fetch('/api/currencies'); // Replace with your API endpoint
                // const data = await response.json();
                setCurrencies(data); // replace with the fetched data
            } catch (error) {
                console.error("Failed to fetch currencies", error);
            }
        };

        fetchCurrencies();
    }, [currencies]);

    const handleSwap = () => {
        gsap.to(swapIconRef.current, {
            rotation: 180,
            duration: 0.3,
            ease: "power1.out",
            onComplete: () => {
                gsap.set(swapIconRef.current, { rotation: 0 });

                // Swap the currencies
                setPayCurrency(prev => {
                    const newCurrency = prev === 'SNV' ? 'TON' : 'SNV';
                    if (newCurrency === 'TON') {
                        setReceiveAmount(12.29);
                        setPayAmount(1);
                        return newCurrency;
                    } else {
                        setReceiveAmount(5.55);
                        setPayAmount(1);
                        return newCurrency;
                    }
                });
                setReceiveCurrency(prev => (prev === 'TON' ? 'SNV' : 'TON'));
            }
        });
    };

    return (
        <div className="max-w-screen-sm p-4 mx-auto my-4 md:my-11">
            <h2 className="text-[40px] my-5 font-bold">Swap</h2>
            <div className="max-w-screen-sm py-5 mx-auto">
                <hr />
                <div className="flex items-center justify-between my-5">
                    <CurrencyDisplay label="You pay" amount={payAmount} />
                    <CurrencyDropdownButton selectedCurrency={payCurrency} onSelect={setPayCurrency} currencies={currencies} />
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-full h-px bg-neutral-300" />
                    <div className="cursor-pointer w-9 h-9" onClick={handleSwap}>
                        <div className="w-9 h-9 bg-[#1e2337] rounded-lg">
                            <div className="w-[20.13px] h-full m-auto items-center flex">
                                <img ref={swapIconRef} src={SwapIcon} alt="SwapIcon" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-px bg-neutral-300" />
                </div>
                <div className="flex items-center justify-between my-5">
                    <CurrencyDisplay label="You receive" amount={receiveAmount} />
                    <CurrencyDropdownButton selectedCurrency={receiveCurrency} onSelect={setReceiveCurrency} currencies={currencies} />
                </div>
                <hr />
                <p className="mx-auto text-sm text-[#1E2337] text-center my-5">1 SNV ≈ 0.081367 TON</p>
                <Button className="bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] text-white w-full rounded-full text-base py-4">
                    Connect wallet
                </Button>
            </div>
        </div>
    );
};

export default Swap;
