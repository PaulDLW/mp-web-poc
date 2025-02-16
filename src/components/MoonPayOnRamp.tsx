import { MoonPayBuyWidget } from "@moonpay/moonpay-react";
import React, { useState } from "react";
import "./MoonPayOnRamp.css";

interface MoonPayOnRampProps {
  defaultCurrency?: string;
  defaultAmount?: number;
}

export const MoonPayOnRamp: React.FC<MoonPayOnRampProps> = ({
  defaultCurrency = "eth",
  defaultAmount,
}) => {
  const [showWidget, setShowWidget] = useState(false);

  return (
    <div className="moonpay-onramp">
      <button className="buy-crypto-button" onClick={() => setShowWidget(true)}>
        Buy Crypto with MoonPay
      </button>

      {showWidget && (
        <MoonPayBuyWidget
          variant="overlay"
          baseCurrencyCode="usd"
          baseCurrencyAmount={defaultAmount?.toString()}
          currencyCode={defaultCurrency}
          onCloseOverlay={() => setShowWidget(false)}
        />
      )}
    </div>
  );
};
