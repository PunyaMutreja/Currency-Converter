import React from "react";
import {useId} from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {

    const id=useId()    

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1-4">
        <label htmlFor={id} className="text-black/40 mb-2 inline-block">{label}</label>
        <input
        
          type="number"
          id={id}
          value={amount}
          className="outline-none bg-transparent w-full py-1.5"
          placeholder="Enter Amount"
          disabled={amountDisabled}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
      <label className="text-black/40 mb-2 inline-block place-content-left">Currency Type</label>
        <select
          value={selectedCurrency}
          onCurrencyChange={(e) =>
            {onCurrencyChange && onCurrencyChange(e.target.value)}}
          disabled={currencyDisabled}
          className="w-5/6"
        >   
            {currencyOptions.map((currency)=> (
                <option key={currency} value={currency}>{currency}</option>
            ))}

        </select>
      </div>
    </div>
  );
}

export default InputBox;
