import { MoonPayProvider } from "@moonpay/moonpay-react";
import "./App.css";
import { MoonPayOffRamp } from "./components/MoonPayOffRamp";
import { MoonPayOnRamp } from "./components/MoonPayOnRamp";
import { MoonPaySwap } from "./components/MoonPaySwap";
import { useMoonPayConfig } from "./hooks/useMoonPayConfig";

function App() {
  const { config, error, loading } = useMoonPayConfig();

  if (loading) {
    return <div>Loading MoonPay configuration...</div>;
  }

  if (error || !config) {
    return (
      <div className="error-message">Failed to load MoonPay configuration</div>
    );
  }

  return (
    <MoonPayProvider apiKey={config.apiKey} debug={config.isSandbox}>
      <div className="App">
        <header className="App-header">
          <h1>MoonPay Integration Test</h1>
          <div className="moonpay-buttons">
            <MoonPayOnRamp defaultCurrency="eth" defaultAmount={100} />
            <MoonPayOffRamp defaultCurrency="eth" />
          </div>
          <MoonPaySwap
            defaultSourceCurrency="eth"
            defaultTargetCurrency="usdt"
          />
        </header>
      </div>
    </MoonPayProvider>
  );
}

export default App;
