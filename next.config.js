const withTM = require("next-transpile-modules")([
  "@mui/material",
  "@mui/icons-material",
  "@mui/lab",
  "@mui/system",
  "@blocto/sdk",
  "@project-serum/sol-wallet-adapter",
  "@solana/wallet-adapter-base",
  "@solana/wallet-adapter-react",
  "@solana/wallet-adapter-wallets",
  "@solana/wallet-adapter-react-ui",
  "@solana/wallet-adapter-bitpie",
  "@solana/wallet-adapter-blocto",
  "@solana/wallet-adapter-coin98",
  "@solana/wallet-adapter-ledger",
  "@solana/wallet-adapter-mathwallet",
  "@solana/wallet-adapter-phantom",
  "@solana/wallet-adapter-safepal",
  "@solana/wallet-adapter-slope",
  "@solana/wallet-adapter-solflare",
  "@solana/wallet-adapter-sollet",
  "@solana/wallet-adapter-solong",
  "@solana/wallet-adapter-torus",
]); // pass the modules you would like to see transpiled

module.exports = withTM({
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@mui/styled-engine": "@mui/styled-engine-sc",
    };

    config.resolve.fallback = {
      fs: false,
      os: false,
      path: false,
      crypto: false,
    };

    return config;
  },
});
