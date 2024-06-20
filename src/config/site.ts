export const siteConfig = {
  title: "pLUSD.com",
  defaultDescription: "pLUSD.com Liquity on pulsechain.",
  description: `pLUSD is a stablecoin on the PulseChain network, designed to reach $1 parity. It is a fork of LUSD optimized for PulseChain&apos;s
faster transactions and lower gas fees. Offering improved
liquidity and financial operations, pLUSD aligns with Richard
Heart&apos;s vision for technological innovation and practical
utility. It aims to enhance scalability and user experience,
supporting a more efficient blockchain ecosystem.`,
  url:
    process.env.NODE_ENV === "production"
      ? "https://plusd.com"
      : "http://localhost:3000",
  keywords: [
    "pulsechain",
    "crypto",
    "cryto currency",
    "LUSD",
    "pLUSD",
    "Tellor",
    "pTellor",
  ],
};

export type SiteConfig = typeof siteConfig;
