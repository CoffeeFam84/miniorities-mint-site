import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

import { useWallet } from "@solana/wallet-adapter-react";
import useCandyMachine from "../hooks/useCandyMachine";

import Countdown from "./Countdown";
import WalletModalButton from "./WalletModalButton";
import MintButton from "./MintButton";

/*
 * Connect Wallet
 * Connect Wallet Hover + Anim
 * Mint Enabled
 * Mint Enabled Hover + Anim
 * Mint Disabled
 * Mint Loading
 * Countdown
 */

//

const MultiButton = styled((props) => {
  const { connected } = useWallet();
  const { isSoldOut, mintStartDate, isMinting } = useCandyMachine();

  return (
    <Box sx={{width: "100%"}} {...props}>
      {!connected ? (
        <WalletModalButton>Select Wallet</WalletModalButton>
      ) : !isSoldOut ? (
        <MintButton>Mint</MintButton>
      ) : (
        <Typography variant="h4">Sold Out</Typography>
      )}
    </Box>
  );
})`
  text-align: center;
  display: flex;
  justify-content: center;
    h4 {
        font-size: 3em;
    }
`;

export default MultiButton;