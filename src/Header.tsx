import * as React from "react";

import Link from "next/link";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";

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
  width: 8em;
  height: fit-content;
  font-weight: bold;
`;

const Menu = styled((props) => {
  return <Box component="nav" {...props} />;
})`
  display: flex;
  & * {
    margin: 0 1rem;
  }
    margin-right: 5%;
`;

export default styled((props) => {
  return (
    <header {...props}>
      <Menu>
        <MenuButton href="#art">Art</MenuButton>
        <MenuButton href="#about">About</MenuButton>
        <MenuButton href="#roadmap">Roadmap</MenuButton>
      </Menu>
    </header>
  );
})`
position: absolute;
width: 100%;
  height: 10vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 3;
`;
