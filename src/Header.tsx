import * as React from "react";
import { Container, Box, ButtonBase } from "@mui/material";
import { styled } from "@mui/material/styles";

import Link from "./Link";
import Image from "next/image";

import twitter from "../public/social-icons/twitter.svg";
import discord from "../public/social-icons/discord.svg";

const SocialItem = styled((props) => {
  return (
    <Link href={props.href}>
      <Box component="li" {...props} className={`${props.className} social-icon`}>
        <Image src={props.src} layout="responsive" objectFit="contain" />
      </Box>
    </Link>
  );
})`
  width: 45px;

  img {
    transition: filter 0.2s;

    :hover {
      filter: brightness(110%);
    }
  }
`;

const SocialsMenu = styled((props) => {
  return (
    <Box component="nav" {...props}>
      <ul>{props.children}</ul>
    </Box>
  );
})`
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    height: 100%;
    display: flex;
    align-items: center;
    a {
      margin: 0 0.3em;
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

const MenuButton = styled((props) => {
  return (
    <Link href={props.href}>
      <ButtonBase variant="outlined" color="secondary" component="span" {...props} />
    </Link>
  );
})`
  background: linear-gradient(white, white) padding-box,
    linear-gradient(41deg, rgba(0, 212, 255, 1), rgba(218, 113, 255, 1))
      border-box;
  border-radius: 8px;
  border: 4px solid transparent;
  padding: 4px;
  width: min(20vw, 7rem);
  height: fit-content;
  font-weight: bold;
  color: #353535;
`;

const Menu = styled((props) => {
  return <Box component="nav" {...props} />;
})`
  display: flex;
  a {
    margin: 0 1rem;
  }
  a:first-child {
    margin-left: 0;
  }
  a:last-child {
    margin-right: 0;
  }
`;

export default styled((props) => {
  return (
    <Container component="header" maxWidth={false} {...props}>
      <SocialsMenu>
        <SocialItem
          href="https://twitter.com/MinoritiesNFT"
          src={twitter}
          fill="blue"
        />
        <SocialItem href="https://t.co/ESPEsKGtx6" src={discord} fill="blue" />
      </SocialsMenu>
      <Menu>
        <MenuButton href="#art">Art</MenuButton>
        <MenuButton href="#about">About</MenuButton>
        <MenuButton href="#roadmap">Roadmap</MenuButton>
        <MenuButton href="#FAQ">FAQ</MenuButton>
      </Menu>
    </Container>
  );
})`
  position: absolute;

  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;

  @media screen and (max-width: 800px) {
    padding-top: 2rem;
    flex-direction: column-reverse;

    .social-icon {
      width: 35px;
    }

    a {
      margin: 0.2rem;
      font-size: 0.9rem;
    }
  }
`;
