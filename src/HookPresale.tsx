import * as React from "react";
import { useEffect, useMemo, useState } from "react";
import { toDate } from "../helpers/utils";
import Container from "@mui/material/Container";
import { Snackbar } from "@mui/material";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert"

import { styled, keyframes } from "@mui/material/styles";

import Logo from "./Logo";

import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import useSplToken from "../hooks/useSplToken";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import {
  awaitTransactionSignatureConfirmation,
  CandyMachineAccount,
  getCandyMachineState,
  mintOneToken,
} from "../helpers/candy-machine";

import { AlertState } from "../helpers/utils";
import { MintButton } from "./MintButton";

const backgroundAnim = keyframes`
    0%{background-position:0% 53%}
    50%{background-position:100% 48%}
    100%{background-position:0% 53%}
`;

const logoAnim = keyframes`
  100% {
    transform: translate(0, 1.5rem)
  }
`;

const Cloud = styled((props) => {
  return <img {...props} />;
})`
  position: absolute;
  ${({ position }) => position}: 0;
  z-index: ${({ order }) => {
    switch (order) {
      case "background":
        return 1;
      case "foreground":
        return 2;
      default:
        return 2;
    }
  }};
  width: max(1440px, 100%);
`;

const WalletConnect = styled((props) => {
  return <div {...props}><WalletMultiButton /></div>;
})`
  position: absolute;
  z-index: 10;
  right: 5%;
  margin-top: 1rem;
`;

export interface PresaleProps {
  candyMachineId?: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  txTimeout: number;
  rpcHost: string;
}

export default styled((props: PresaleProps) => {
  
  const [yourSOLBalance, setYourSOLBalance] = useState<number | null>(null);
  const rpcUrl = props.rpcHost;
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT
  const wallet = useWallet();
  const [candyMachine, setCandyMachine] = useState<CandyMachineAccount>();
  const [isLoading, isSPLExists] = useSplToken();
  // const [refresh, setRefresh] = useState(false);
  // const balance = useWalletBalance();
  const anchorWallet = useMemo(() => {
    if (
      !wallet ||
      !wallet.publicKey ||
      !wallet.signAllTransactions ||
      !wallet.signTransaction
    ) {
      return;
    }

    return {
      publicKey: wallet.publicKey,
      signAllTransactions: wallet.signAllTransactions,
      signTransaction: wallet.signTransaction,
    } as anchor.Wallet;
  }, [wallet]);

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const onMint = async () => {
    try {
      setIsMinting(true);
      document.getElementById("#identity")?.click();
      if (wallet.connected && candyMachine?.program && wallet.publicKey) {
        const mintTxId = (
          await mintOneToken(candyMachine, wallet.publicKey)
        )[0];

        let status: any = { err: true };
        if (mintTxId) {
          status = await awaitTransactionSignatureConfirmation(
            mintTxId,
            props.txTimeout,
            props.connection,
            "singleGossip",
            true
          );
        }

        if (!status?.err) {
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
        }
      }
    } catch (error: any) {
      console.log("err ", error);
      // TODO: blech:
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (!error.message) {
          message = "Transaction Timeout! Please try again.";
        } else if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          window.location.reload();
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      setIsMinting(false);
    }
  };

  useEffect(() => {
    (async () => {
      if (!anchorWallet) {
        return;
      }

      const balance = await props.connection.getBalance(anchorWallet.publicKey);
      setYourSOLBalance(balance);

      if (props.candyMachineId) {
        try {
          console.log('candyMachineId', props.candyMachineId);
          console.log('connection', props.connection);
          const cndy = await getCandyMachineState(
            anchorWallet,
            props.candyMachineId,
            props.connection
          );
          setCandyMachine(cndy);
        } catch (e) {
          console.log("Problem getting candy machine state");
          console.log(e);
        }
      } else {
        console.log("No candy machine detected in configuration.");
      }
    })();
  }, [anchorWallet, props.candyMachineId, props.connection]);

  const candyMachineGoLive = toDate(candyMachine?.state.goLiveDate)?.getTime();

  return (
    <Container maxWidth={false} disableGutters {...props}>
      <Cloud src="cloud-top-background.svg" position="top" order="background" />
      <Cloud src="cloud-top-foreground.svg" position="top" order="foreground" />
      <WalletConnect />
      <Logo className="logo" />
      {candyMachineGoLive && wallet.connected && (
        <MintButton
          candyMachine={candyMachine}
          isMinting={isMinting}
          onMint={onMint}
        />
      )}
      {!candyMachine && wallet.connected && (
          <div className="info-text">
            Loading
          </div>
        )}
        {!wallet.connected && (
          <div className="info-text">
            Connect Wallet for Presale Minting.
          </div>
        )}
        <Snackbar
          open={alertState.open}
          autoHideDuration={6000}
          onClose={() => setAlertState({ ...alertState, open: false })}
        >
          <Alert
            onClose={() => setAlertState({ ...alertState, open: false })}
            severity={alertState.severity}
          >
            {alertState.message}
          </Alert>
        </Snackbar>
      <Cloud
        src="cloud-bottom-background.svg"
        position="bottom"
        order="background"
      />
      <Cloud
        src="cloud-bottom-foreground.svg"
        position="bottom"
        order="foreground"
      />
    </Container>
  );
})`
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  background: linear-gradient(224deg, #da71ff, #00d4ff);
  background-size: 400% 400%;
  animation: ${backgroundAnim} 15s ease infinite;

  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    margin-top: 20vh;
    margin-bottom: 10vh;
    width: min(90%, 40rem);

    animation: ${logoAnim} 3s ease-in-out;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }

  .logo,
  .whitelist-button {
    z-index: 3;
  }

  .whitelist-button {
    width: min(16rem, 40%);
    height: 6rem;
    font-size: 1.4rem;
    border-radius: 10px;

    @media screen and (max-width: 800px) {
      font-size: 1.1rem;
      height: 4rem;
    }
  }

  .info-text {
    font-size: 2rem;
    text-align: center;
    z-index: 10;
    color: #F04F4F;
  }
`;
