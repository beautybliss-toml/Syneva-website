interface CurrencyDisplayProps {
    label: string;
    amount: number;
    onChangeAmount: (amount: number) => void,
}

const CurrencyDisplay: React.FC<CurrencyDisplayProps> = ({ label, amount, onChangeAmount }) => {
    return (
        <div className="w-[60%]">
            <p className="text-sm font-normal text-[#1E2337]">{label}</p>
            {/* <h3 className="text-[40px] font-bold">{amount}</h3> */}
            <input className="text-[40px] font-bold block w-[100%] outline-none" type="number" value={amount} onChange={(e)=>onChangeAmount(parseFloat(e.target.value))} min={0} />
            <p className="text-sm font-normal text-[#1E2337]">${(amount * 5.55).toFixed(2)}</p>
        </div>
    );
};

export default CurrencyDisplay;
