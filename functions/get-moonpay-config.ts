import { Handler } from "@netlify/functions";

export const handler: Handler = async () => {
  try {
    const apiKey = process.env.MOONPAY_API_KEY;
    const isSandbox = true; // Force sandbox mode for development

    if (!apiKey) {
      throw new Error("MoonPay API key not configured");
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        apiKey,
        isSandbox,
      }),
      headers: {
        "Content-Type": "application/json",
        // Cache the response for 1 hour
        "Cache-Control": "public, max-age=3600",
      },
    };
  } catch (error) {
    console.error("Error getting MoonPay config:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to get MoonPay configuration" }),
    };
  }
};
