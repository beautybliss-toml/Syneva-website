interface CurrencyDisplayProps {
    label: string;
    amount: number;
}

const CurrencyDisplay: React.FC<CurrencyDisplayProps> = ({ label, amount }) => {
    return (
        <div>
            <p className="text-sm font-normal text-[#1E2337]">{label}</p>
            <h3 className="text-[40px] font-bold">{amount}</h3>
            <p className="text-sm font-normal text-[#1E2337]">${(amount * 5.55).toFixed(2)}</p>
        </div>
    );
};

export default CurrencyDisplay;
