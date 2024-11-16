import { useEffect, useState, useRef } from 'react';
import { Button } from "@headlessui/react";
import gsap from 'gsap';
import { CurrencyDropdownButton, CurrencyDisplay } from '../components';
import { SwapIcon } from "../assets/images";
import { currencies as data } from '../constants';
import { useTonAddress, useTonConnectUI } from '@tonconnect/ui-react';
import axios from 'axios';
import { TonClient, toNano } from '@ton/ton';
import { DEX, pTON } from '@ston-fi/sdk';

const Swap: React.FC = () => {
    const [tonConnectUI] = useTonConnectUI();
    const [currencies, setCurrencies] = useState<{ name: string; icon: string; address: string, decimals: number }[]>([]);
    // const [pairs, setPairs] = useState<string[][]>([]);

    const [offerToken, setOfferToken] = useState('TON');
    const [offerAddress, setOfferAddress] = useState('EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c');
    const [offerAmount, setOfferAmount] = useState(0);
    const [offerDecimals, setOfferDecimals] = useState(9);

    const [askToken, setAskToken] = useState('USDT');
    const [askAddress, setAskAddress] = useState('EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs');
    const [askAmount, setAskAmount] = useState(0);
    const [askDecimals, setAskDecimals] = useState(6);
    const [minAskAmount, setMinAskAmount] = useState(5.8);

    const userAddress = useTonAddress();
    const swapIconRef = useRef<HTMLImageElement>(null);

    const client = new TonClient({
        endpoint: "https://toncenter.com/api/v2/jsonRPC",
    });

    const router = client.open(new DEX.v1.Router());

    // Fetch currencies from backend
    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                // console.log(`API = ${import.meta.env.VITE_API_URL}`);
                // const response = await fetch(import.meta.env.VITE_API_URL + '/v1/markets'); // Replace with your API endpoint
                // setPairs(await response.json());
                // const data = await response.json();
                setCurrencies(data); // replace with the fetched data
            } catch (error) {
                console.error("Failed to fetch currencies", error);
            }
        };

        fetchCurrencies();
    }, [currencies]);

    const onChangeOfferAmount = (value: number) => {
        setOfferAmount(value);
        if (value > 0 && askAddress.length > 0) {
            const payload = {
                jsonrpc: "2.0",
                id: 24,
                method: "dex.simulate_swap",
                params: {
                    offer_address: offerAddress,
                    offer_units: (value * Math.pow(10, offerDecimals)).toString(),
                    ask_address: askAddress,
                    slippage_tolerance: "0.02"
                }
            };
            console.log(import.meta.env.VITE_RPC_URL)
            axios.post(import.meta.env.VITE_RPC_URL, payload)
                .then(response => {
                    console.log(response.data);
                    console.log(parseFloat(response.data?.result?.ask_units));
                    setAskAmount(parseFloat(response.data?.result?.ask_units) / Math.pow(10, askDecimals));
                    setMinAskAmount(parseFloat(response.data?.result?.min_ask_units) / Math.pow(10, askDecimals));
                })
                .catch(error => {
                    console.error(error);
                });
        }
        if (offerAmount == 0) setAskAmount(0);
    };

    useEffect(() => {
        setOfferAmount(0.00);
    }, [offerAddress]);

    const onChangeAskAmount = (value: number) => {
        setAskAmount(value);
        console.log((value * Math.pow(10, 6)).toString());
        if (value > 0 && offerAddress.length > 0) {
            const payload = {
                jsonrpc: "2.0",
                id: 24,
                method: "dex.reverse_simulate_swap",
                params: {
                    ask_address: askAddress,
                    ask_units: (value * Math.pow(10, askDecimals)).toString(),
                    offer_address: offerAddress,
                    slippage_tolerance: "0.02"
                }
            };
            axios.post(import.meta.env.VITE_RPC_URL, payload)
                .then(response => {
                    console.log(response.data);
                    console.log(parseFloat(response.data?.result?.offer_units));
                    setOfferAmount(parseFloat(response.data?.result?.offer_units) / Math.pow(10, offerDecimals));
                    minAskAmount; //tmp
                    userAddress; //tmp
                    setMinAskAmount(parseFloat(response.data?.result?.min_ask_units) / Math.pow(10, askDecimals));
                })
                .catch(error => {
                    console.error(error);
                });
        }
        if (askAmount == 0) setOfferAmount(0);
    };

    useEffect(() => {
        setAskAmount(0.00);
    }, [askAddress]);

    useEffect(() => {
        console.log(`offerToken ${offerToken}`);
        const currency = currencies.find(item => item.name === offerToken);
        console.log(`currency ${currency?.address}`);
        if (currency) {
            setOfferAmount(0);
            setOfferAddress(currency.address);
            setOfferDecimals(currency.decimals);
        }
    }, [offerToken]);

    useEffect(() => {
        console.log(`askToken ${askToken}`);
        const currency = currencies.find(item => item.name === askToken);
        console.log(`currency ${currency?.address}`);
        if (currency) {
            setAskAmount(0);
            setAskAddress(currency.address);
            setAskDecimals(currency.decimals);
        }
    }, [askToken]);


    const handleSwap = () => {
        gsap.to(swapIconRef.current, {
            rotation: 180,
            duration: 0.3,
            ease: "power1.out",
            onComplete: () => {
                gsap.set(swapIconRef.current, { rotation: 0 });

                // Swap the currencies

                // const tmpToken = offerToken;
                // const tmpAddress = offerAddress;
                // const tmpAmount = offerAmount;
                // const tmpDecimals = offerDecimals;

                // setAskToken(tmpToken);
                // setAskAddress(tmpAddress);
                // setAskAmount(tmpAmount);
                // setAskDecimals(tmpDecimals);
                // onChangeAskAmount(tmpAmount);

                // setOfferToken(prev => {
                //     setAskAmount(12.29);
                //     const newCurrency = prev === 'TON' ? 'TON' : 'SNV';
                //     if (newCurrency === 'TON') {
                //         setOfferAmount(1);
                //         setAskAmount(5.55);
                //         return newCurrency;
                //     } else {
                //         setOfferAmount(1);
                //         return newCurrency;
                //     }
                // });
                // setAskToken(prev => (prev === 'TON' ? 'SNV' : 'TON'));
            }
        });
    };

    const getTxParams = async () => {
        if (askToken === 'TON') {
            console.log(`Ask token is Ton`);
            // swap TON to Jetton
            const txParams = await router.getSwapTonToJettonTxParams({
                userWalletAddress: userAddress, // ! replace with your address
                proxyTon: new pTON.v1(),
                offerAmount: toNano(askAmount),
                askJettonAddress: "EQA2kCVNwVsil2EM2mB0SkXytxCqQjS4mttjDpnXmwG9T6bO", // STON
                minAskAmount: Math.floor(minAskAmount),
                queryId: 24,
            });

            return txParams
        }
        else if (offerToken === 'TON') {
            // swap Jetton to TON
            const txParams = await router.getSwapJettonToTonTxParams({
                userWalletAddress: userAddress,
                offerJettonAddress: "EQBX6K9aXVl3nXINCyPPL86C4ONVmQ8vK360u6dykFKXpHCa",
                offerAmount: toNano(offerAmount),
                proxyTon: new pTON.v1(),
                minAskAmount: Math.floor(minAskAmount),
                queryId: 24,
            });

            return txParams
        } else {
            // swap Jetton to Jetton
            const txParams = await router.getSwapJettonToJettonTxParams({
                userWalletAddress: userAddress,
                offerJettonAddress: "EQA2kCVNwVsil2EM2mB0SkXytxCqQjS4mttjDpnXmwG9T6bO",
                offerAmount: toNano(offerAmount),
                askJettonAddress: "EQBX6K9aXVl3nXINCyPPL86C4ONVmQ8vK360u6dykFKXpHCa",
                minAskAmount: Math.floor(minAskAmount),
                queryId: 24,
            });

            return txParams
        }
    }

    const onSwap = async () => {
        console.log(`This is onSwap function consonle ${userAddress}---`);
        const txParams = await getTxParams()

        await tonConnectUI.sendTransaction({
            validUntil: Date.now() + 1000000,
            messages: [
                {
                    address: txParams.to.toString(),
                    amount: txParams.value.toString(),
                    payload: txParams.body?.toBoc().toString("base64")
                }
            ]
        })
    };

    return (
        <div className="max-w-screen-sm p-4 mx-auto my-4 md:my-11">
            <h2 className="text-[40px] my-5 font-bold">Swap</h2>
            <div className="max-w-screen-sm py-5 mx-auto">
                <hr />
                <div className="flex items-center justify-between my-5">
                    <CurrencyDisplay label="You pay" amount={offerAmount} onChangeAmount={onChangeOfferAmount} />
                    <CurrencyDropdownButton selectedCurrency={offerToken} onSelect={setOfferToken} currencies={currencies} />
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
                    <CurrencyDisplay label="You receive" amount={askAmount} onChangeAmount={onChangeAskAmount} />
                    <CurrencyDropdownButton selectedCurrency={askToken} onSelect={setAskToken} currencies={currencies} />
                </div>
                <hr />
                <p className="mx-auto text-sm text-[#1E2337] text-center my-5">1 SNV ≈ 0.081367 TON</p>
                <Button className="bg-gradient-to-r from-[#2d83ec] to-[#1ac9ff] text-white w-full rounded-full text-base py-4" onClick={onSwap}>
                    Swap
                </Button>

            </div>
        </div>
    );
};

export default Swap;
