import fs from "fs";

import * as React from "react";
import * as anchor from "@project-serum/anchor";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { Box, Container } from "@mui/material";

import { styled } from "@mui/material/styles";

import Header from "../src/Header";
import HookPresale from "../src/HookPresale";


const candyMachineId = process.env.NEXT_PUBLIC_CANDY_MACHINE_ID
  ? new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID)
  : undefined;

const network = process.env.NEXT_PUBLIC_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.NEXT_PUBLIC_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

export default styled((props) => {
  return (
    <Container maxWidth="false" {...props}>
      {/* <Header /> */}
      <HookPresale
        candyMachineId={candyMachineId}
        connection={connection}
        rpcHost={rpcHost}
        startDate={10}
        txTimeout={30000}
      />
    </Container>
  );
})`
  padding: 0;
  #art {
    width: 100%;
    position: relative;
    height: fit-content;
    overflow: hidden;
    margin-bottom: 25rem;

    .slider-container {
      display: flex;
      overflow: hidden;
      flex-direction: column;
      align-items: center;
      width: 200vw;
      transform: translate(-25%) rotate(-8deg);
      margin: 10vw;
    }
  }
`;

export async function getStaticProps() {
  const mockups: string[][] = Array(3)
    .fill(null)
    .map((__, index) => {
      return fs.readdirSync(`./public/slider-mockups/${index + 1}`);
    });
  mockups.forEach((sliderImages, index) => {
    sliderImages.forEach((path, pathIndex) => {
      sliderImages[pathIndex] = `slider-mockups/${index + 1}/${path}`;
    });
  });
  return {
    props: {
      mockups,
    },
  };
}
