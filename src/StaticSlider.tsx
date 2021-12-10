// @ts-nocheck
import * as React from "react";
import { createRef, useRef, forwardRef, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import { Container } from "@mui/material";

const Track = styled(
  forwardRef((props, ref) => {
    return <div {...props} ref={ref} />;
  })
)`
  display: flex;
  width: 100%;
  transform: translate (-316px);
`;

const Card = styled((props) => {
  return (
    <div {...props}>
      <img src={props.src} />
    </div>
  );
})`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0px 0px 2.5px 1.25px hsla(0, 0%, 0%, 20%);
  padding: 8px;
  margin: 8px;
  background: white;

  img {
    border-radius: inherit;
    width: 100%;
    height: 100%;
  }
`;

const makeCards = (num: number, images: string[]) => {
  return Array(num)
    .fill(null)
    .map((__, index) => {
      return <Card src={images[index]} key={index} />;
    });
};

export default styled((props) => {
  const divRef = createRef<HTMLDivElement>();
  const trackRef = useRef<HTMLDivElement>(null);

  const [cards, setCards] = useState(() => makeCards(12, props.images)); //This is the bug, so how do I fix?

  return (
    <Container maxWidth="false" disableGutters ref={divRef} {...props}>
      <Track ref={trackRef} animspeed={props.animspeed}>
        {cards}
      </Track>
    </Container>
  );
})``;