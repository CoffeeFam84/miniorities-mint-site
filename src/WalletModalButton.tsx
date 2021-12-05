import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

import { useWallet } from "@solana/wallet-adapter-react";
import useCandyMachine from "../hooks/useCandyMachine";

const WalletModalButton = styled((props) => {
  const { setVisible } = useWalletModal();

  const { connected } = useWallet();
  const { isSoldOut, mintStartDate, isMinting, startMint } = useCandyMachine();

  return (
    <Button
      variant="contained"
      size="large"
      color="mintButton"
      onClick={() => setVisible(true)}
      disabled={connected}
      {...props}
    >
      {props.children}
    </Button>
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

export default WalletModalButton;
