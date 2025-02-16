import { MoonPaySwapWidget } from "@moonpay/moonpay-react";
import React from "react";
import "./MoonPaySwap.css";

interface MoonPaySwapProps {
  defaultSourceCurrency?: string;
  defaultTargetCurrency?: string;
}

export const MoonPaySwap: React.FC<MoonPaySwapProps> = ({
  defaultSourceCurrency = "eth",
  defaultTargetCurrency = "usdt",
}) => {
  return (
    <div className="moonpay-widget-container">
      <MoonPaySwapWidget
        variant="embedded"
        baseCurrencyCode={defaultSourceCurrency}
        quoteCurrencyCode={defaultTargetCurrency}
      />
    </div>
  );
};
