import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import { styled, keyframes } from "@mui/material/styles";
import MultiButton from "../src/MultiButton"

import Logo from "../src/Logo";

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
  width: max(1440px, 100%)
`;

const MintButton = styled((props) => {
  return <Button variant="contained" size="large" color="mintButton" {...props} />;
})`
    width: min(16rem, 40%);
    height: 6rem;
    font-size: 1.4rem;
    border-radius: 10px;

    @media screen and (max-width: 800px) {
      font-size: 1.1rem;
      height: 4rem;
    }
`;

export default styled((props) => {
  return (
    <Container maxWidth="false" disableGutters {...props}>
      <Cloud src="cloud-top-background.svg" position="top" order="background" />
      <Cloud src="cloud-top-foreground.svg" position="top" order="foreground" />
      <Logo className="logo" />
      <MultiButton>Coming Soon</MultiButton>
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

 .logo, button {
    z-index: 3;
  }
`;
