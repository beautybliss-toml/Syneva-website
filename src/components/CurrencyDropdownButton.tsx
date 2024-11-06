import { Menu } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa6";

interface Currency {
    name: string;
    icon: string;
    address: string;
    decimals: number;
}

interface CurrencyDropdownButtonProps {
    selectedCurrency: string;
    onSelect: (currency: string) => void;
    currencies: Currency[];
}

const CurrencyDropdownButton: React.FC<CurrencyDropdownButtonProps> = ({ selectedCurrency, onSelect, currencies }) => {
    return (
        <Menu>
            {({ open }) => (
                <div className={`relative inline-block text-left text-sm ${open ? 'text-white' : ''}`}>
                    <Menu.Button className={`flex items-center gap-2 border border-[#0098EA] px-4 rounded-full py-2 ${open ? 'bg-[#31395B] !rounded-t-2xl rounded-b-none text-white' : ''}`}>
                        <img src={currencies.find(c => c.name === selectedCurrency)?.icon} alt={selectedCurrency} className="w-8 h-8 rounded-full" />
                        <span className="text-xl font-bold">{selectedCurrency}</span>
                        <FaAngleDown className={`transition-transform ${open ? 'transform rotate-180' : ''}`} />
                    </Menu.Button>
                    <Menu.Items className="absolute top-12 border border-x-[#0098EA] border-t-0 rounded-b-2xl right-0 w-full px-4 bg-[#31395B]">
                        {currencies.filter(currency => currency.name !== selectedCurrency).map((currency, index) => (
                            <Menu.Item key={index}>
                                {({ active }) => (
                                    <button
                                        onClick={() => onSelect(currency.name)}
                                        className={`${active ? 'bg-[#31395B]' : ''} flex items-center gap-2 w-full py-2 text-left text-white`}
                                    >
                                        <img src={currency.icon} alt={currency.name} className="w-8 h-8 rounded-full" />
                                        <span className="text-xl font-bold">{currency.name}</span>
                                    </button>
                                )}
                            </Menu.Item>
                        ))}
                    </Menu.Items>
                </div>
            )}
        </Menu>
    );
};

export default CurrencyDropdownButton;
