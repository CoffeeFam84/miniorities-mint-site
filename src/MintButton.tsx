import styled from "styled-components";
import { CandyMachineAccount } from "../helpers/candy-machine";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";

export const MintButton = ({
  onMint,
  candyMachine,
  isMinting,
}: {
  onMint: () => Promise<void>;
  candyMachine: CandyMachineAccount | undefined;
  isMinting: boolean;
}) => {
  const [clicked, setClicked] = useState(false);

  return (
    <Button
      className="whitelist-button" variant="contained"
      disabled={
        candyMachine?.state.isSoldOut || isMinting
        // || !candyMachine?.state.isActive
      }
      onClick={async () => {
        setClicked(true);
        await onMint();
        setClicked(false);
      }}
    >
      {candyMachine?.state.isSoldOut ? (
        "SOLD OUT"
      ) : isMinting ? (
        <CircularProgress />
      ) : (
        "PRESALE"
      )}
    </Button>
  );
};
