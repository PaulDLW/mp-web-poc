import { useEffect, useState } from "react";

interface MoonPayConfig {
  apiKey: string;
  isSandbox: boolean;
}

export const useMoonPayConfig = () => {
  const [config, setConfig] = useState<MoonPayConfig | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch("/.netlify/functions/get-moonpay-config");
        if (!response.ok) {
          throw new Error("Failed to fetch MoonPay configuration");
        }
        const data = await response.json();
        console.log("Fetched config:", data);
        setConfig(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  return { config, error, loading };
};
