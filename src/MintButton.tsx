import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { useWallet } from "@solana/wallet-adapter-react";
import useCandyMachine from "../hooks/useCandyMachine";

/*
 * Connect Wallet
 * Connect Wallet Hover + Anim
 * Mint Enabled
 * Mint Enabled Hover + Anim
 * Mint Disabled
 * Mint Loading
 * Countdown
 */

const MultiButton = styled((props) => {
  const { connected } = useWallet();
  const { isSoldOut, mintStartDate, isMinting, startMint } = useCandyMachine();

  return (
    <LoadingButton
      variant="contained"
      size="large"
      color="mintButton"
      onClick={startMint}
      disabled={!connected || isMinting || isSoldOut}
      loading={isMinting}
      {...props}
    >
      {!isSoldOut ? props.children : "Sold Out"}
    </LoadingButton>
  );
})`
font-size: 1.8rem;

font-weight: bold;

${({ disabled }) => {
  if (!disabled) return;
  return `

  `;
}}

width: min(16rem, 40%);
height: 6rem;
font-size: 1.4rem;
border-radius: 10px;

@media screen and (max-width: 800px) {
  font-size: 1.1rem;
  height: 4rem;
}
`;

export default MultiButton;
