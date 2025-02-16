import { MoonPaySellWidget } from "@moonpay/moonpay-react";
import React, { useState } from "react";
import "./MoonPayOffRamp.css";

interface MoonPayOffRampProps {
  defaultCurrency?: string;
}

export const MoonPayOffRamp: React.FC<MoonPayOffRampProps> = ({
  defaultCurrency = "eth",
}) => {
  const [showWidget, setShowWidget] = useState(false);

  return (
    <div className="moonpay-offramp">
      <button
        className="sell-crypto-button"
        onClick={() => setShowWidget(true)}
      >
        Sell Crypto with MoonPay
      </button>

      {showWidget && (
        <MoonPaySellWidget
          variant="overlay"
          onCloseOverlay={() => setShowWidget(false)}
        />
      )}
    </div>
  );
};
