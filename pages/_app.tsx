import * as React from "react";
import {CssBaseline, GlobalStyles} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import Head from "next/head";
import theme from "../src/theme";

import dynamic from "next/dynamic";

import { WalletBalanceProvider } from "../hooks/useWalletBalance";
require("@solana/wallet-adapter-react-ui/styles.css");

const WalletConnectionProvider = dynamic(
  () => import("../components/WalletConnection/WalletConnectionProvider"),
  {
    ssr: false,
  }
);

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <React.Fragment>
      <Head>
        <title>The Little Minorities</title>
        <link href="/favicon.png" rel="icon" />
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
      </Head>
      
      <WalletConnectionProvider>
        <WalletBalanceProvider>
          <ThemeProvider theme={theme}>

            <CssBaseline />
            <GlobalStyles styles={{html: {scrollBehavior: "smooth"}}}/>
            
            <Component {...pageProps} />

          </ThemeProvider>
        </WalletBalanceProvider>
      </WalletConnectionProvider>
    </React.Fragment>
  );
}