import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import Link from "./Link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Item = styled((props) => {
  return (
    <li>
      <Accordion {...props}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4">{props.q}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{props.children}</Typography>
        </AccordionDetails>
      </Accordion>
    </li>
  );
})`
  background: #fdfdfd;

  box-shadow: none;

  h4 {
  }
  p {
  }
`;

const FAQ = styled((props) => {
  const [expanded, setExpanded] = useState<boolean | string>(false);
  const handleChange =
    (panel: string) =>
    (event: React.SyntheticEvent<Element, Event>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Container {...props} id="FAQ">
      <Typography variant="h2" sx={{ mb: 10 }}>
        FAQ
      </Typography>
      <Box component="ul" className="list-wrapper">
        <Item
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          q="How do I get whitelisted for The Little Minorities?"
        >
          If you want to get whitelisted,{" "}
          <Link href="https://discord.gg/EMJu8Cs2ss">
            join The Little Minorities Discord.
          </Link>.
        </Item>

        <Item
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          q="When can I mint?"
        >
          Minting will go live XXXX
        </Item>
        <Item
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          q="What is the mint price?"
        >
          The mint price is 0.15 Solana.
        </Item>
        <Item
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          q="Who is the team behind the project?"
        >
          I, the creator (Dienne) , have made the art and have put all my ideas
          into the road map and more.
        </Item>
        <Item
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
          q="Why Solana?"
        >
          I want this collection to be affordable for everyone, Ethereum gas
          fees are simply too high for everyone to be able to become a part of
          this community. This is also the reason for a relatively low mint
          price.
        </Item>
        <Item
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
          q="Will The Little Minorities be listed on secondary markets?"
        >
          Yes, after The Little Minorities sell out, the collection will be on
          secondary markets such as Magic Eden.
        </Item>
        <Item
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
          q="Why are you donating to the Great Ormond Street Kids Hospital?"
        >
          The reason I chose to donate to this charity is because of personal
          past experiences that are related to this hospital. People in
          hospitals are in need of the most support as it’s the least fun place
          a person can be in.
        </Item>
      </Box>
    </Container>
  );
})`
  ul {
    list-style-type: none;
    padding: 0;
  }

  .list-wrapper {
    box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
  }

  h2 {
    text-align: center;
    background: linear-gradient(
      41deg,
      rgba(0, 212, 255, 1),
      rgba(218, 113, 255, 1)
    );
    text-transform: uppercase;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-weight: 400;
  }

  h4 {
    font-size: 1.8rem;
    font-weight: 400;
  }

  p {
    font-size: 1.5rem;
    font-weight: 300;
  }

  @media screen and (max-width: 750px) {
    h2 {
    }
    h4 {
      font-size: 1.6rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
`;

export default FAQ;
