import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";

import Logo from "../src/Logo";

const Cloud = styled((props) => {
  return <img {...props} />;
})`
  position: absolute;
  ${({ position }) => position}: 0;
  z-index: ${({ order }) => {
    switch (order) {
      case "background":
        return 1;
        break;
      case "foreground":
        return 2;
        break;
      default:
        return 2;
    }
  }};
  width: max(1440px, 100%)
`;

const MintButton = styled((props) => {
  return <Button variant="contained" size="large" {...props} />;
})`
    width: min(16rem, 40%);
    height: min(6rem, 40%);
    font-size: clamp(1em, 20%, 1.2em);
`;

export default styled((props) => {
  return (
    <Container maxWidth="false" {...props}>
      <Cloud src="cloud-top-background.svg" position="top" order="background" />
      <Cloud src="cloud-top-foreground.svg" position="top" order="foreground" />
      <Logo className="logo" />
      <MintButton>Connect Wallet</MintButton>
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
  background: linear-gradient(
    41deg,
    rgba(0, 212, 255, 1) 0%,
    rgba(218, 113, 255, 1) 100%
  );
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    position: relative;
    top: 18%;
    margin-bottom: 8rem;
  }

 .logo, button {
    z-index: 3;
  }

  margin-bottom: 15rem;
`;
