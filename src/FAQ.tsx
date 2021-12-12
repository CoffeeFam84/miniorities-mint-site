import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";

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
          <Typography>{props.a}</Typography>
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
  const handleChange = (panel: string) => (event: React.SyntheticEvent<Element, Event>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container {...props} id="FAQ">
      <Typography variant="h2" sx={{ mb: 10 }}>
        FAQ
      </Typography>
      <Box className="list-wrapper">
        <ul>
          <Item
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            q="What blockchain will this NFT be on?"
            a="The Solana Network Blockchain"
          />
          <Item
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            q="Who is the team running this NFT?"
            a="I the creator (Dienne) has made the art and have put all my ideas into the road map and more."
          />
          <Item
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            q="Where will I be able to find my NFT?"
            a="Once you've minted your NFT it will be found in your collection on the phantom wallet."
          />
          <Item
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            q="Why did you choose to donate to Great Ormond Street Kids Hospital?"
            a="The reason I chose to donate to this charity is because of reasons in my personal life that relate to past experiences."
          />
          <Item
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
            q="Where will you be listed on secondary markets?"
            a="Our goal is to be listed on Magic Eden first and we will try other markets if recommended."
          />
        </ul>
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
