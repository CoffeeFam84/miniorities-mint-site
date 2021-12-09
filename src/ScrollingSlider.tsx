// @ts-nocheck
import * as React from "react";
import { createRef, useRef, forwardRef, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import { Container } from "@mui/material";

//TODO: Translate should be determined by card width or (1/numCards)%
const autoScroll = keyframes`
 {
   0% {
     transform: translate(-316px);
   }
    100% {
      transform: translate(0px);
    }
}
`;

const Track = styled(
  forwardRef((props, ref) => {
    return <div {...props} ref={ref} />;
  })
)`
  display: flex;
  width: 100%;
  animation: ${({ animspeed }) => animspeed || "4s"} ${autoScroll} linear;
  animation-iteration-count: infinite;
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

const useRefDimensions = (ref: React.RefObject<HTMLDivElement>) => {
  const [dimensions, setDimensions] = useState({ width: 1, height: 2 });
  useEffect(() => {
    if (ref.current) {
      const boundingRect = ref.current.getBoundingClientRect();
      const { width, height } = boundingRect;
      setDimensions({ width, height });
    }
  }, [ref]);

  return dimensions;
};

// const setImage = (cardRef: React.RefObject<HTMLDivElement>, src: string) => {
//   cardRef.current.children[0].src = src;
// };

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

  //  Could this be a problem? All it does is pop cards and re-render
  const onAnimationIteration = () => {
    cards.unshift(cards.pop());
    setCards([...cards]);
  };

  useEffect(() => {
    console.log(trackRef)
    trackRef.current!.onanimationiteration = onAnimationIteration;
  }, []);

  return (
    <Container maxWidth="false" disableGutters ref={divRef} {...props}>
      <Track ref={trackRef} animspeed={props.animspeed}>
        {cards}
      </Track>
    </Container>
  );
})``;
