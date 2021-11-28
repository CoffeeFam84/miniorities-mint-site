import * as React from "react";

import Link from "next/link";

import { Container, Box, ButtonBase } from "@mui/material";

import { styled } from "@mui/material/styles";

const MenuButton = styled((props) => {
  return (
    <Link href={props.href}>
      <ButtonBase variant="outlined" color="secondary" {...props} />
    </Link>
  );
})`
  background: linear-gradient(white, white) padding-box,
    linear-gradient(41deg, rgba(0, 212, 255, 1), rgba(218, 113, 255, 1))
      border-box;
  border-radius: 8px;
  border: 4px solid transparent;
  padding: 4px;
  width: min(25vw, 8rem);
  height: fit-content;
  font-weight: bold;
  color: #353535;
`;

const Menu = styled((props) => {
  return <Box component="nav" {...props} />;
})`
  display: flex;
  * {
    margin: 0 1rem;
  }
  *:first-child {
    margin-left: 0;
  }
  *:last-child {
    margin-right: 0;
  }
`;

export default styled((props) => {
  return (
    <Container component="header" maxWidth={false} {...props}>
      <Menu>
        <MenuButton href="#art">Art</MenuButton>
        <MenuButton href="#about">About</MenuButton>
        <MenuButton href="#roadmap">Roadmap</MenuButton>
      </Menu>
    </Container>
  );
})`
  position: absolute;

  height: 5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 3;

  @media screen and (max-width: 800px) {
    justify-content: center;
  }
`;