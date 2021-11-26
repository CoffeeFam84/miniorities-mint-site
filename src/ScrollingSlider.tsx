import * as React from "react";
import { createRef, useRef, forwardRef, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import { Container } from "@mui/material";

// How am I gonna do this?
// I think I probably need to play more with MUI first.

/*
  Ok let's think...
  I need to select for only the most recently used shit.
*/

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



const Track = styled((props) => {
  return <div></div>;
})`
display: flex;
width: 100%;
animation: ${({ animSpeed }) => animSpeed || "4s"} ${autoScroll} linear;
animation-iteration-count: infinite;
transform: translate (-316px);
`;

//Card should be a div.
//

const Card = styled(
  forwardRef((props, ref) => {
    return (
      <div ref={ref} {...props}>
        <img src={props.src} />
      </div>
    );
  })
)`
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

const setImage = (cardRef: React.RefObject<HTMLDivElement>, src: string) => {
  cardRef.current.children[0].src = src;
};

const makeCards = (
  num: number,
  cardsRef: React.RefObject<HTMLDivElement>[],
  images: string[]
) => {
  console.log("Making Cards!");
  return Array(num)
    .fill(null)
    .map((__, index) => {
      return <Card src={images[index]} ref={cardsRef[index]} />;
    });
};

export default styled((props) => {
  const divRef = createRef<HTMLDivElement>();
  const trackRef = useRef<HTMLDivElement>(null);

  console.log(props.images);
  const images = [...props.images];
  const cardsRef: React.RefObject<HTMLDivElement>[] = Array(12)
    .fill(null)
    .map(() => useRef<HTMLDivElement>(null));
  const cards = makeCards(12, cardsRef, images);

  useEffect(() => {
    //Runs on ComponentDidMount
    console.log("mounting");
    cardsRef.forEach((cardRef, index) => {
      setImage(cardRef, images[index]);
    });
    trackRef.current?.addEventListener(
      "animationiteration",
      onAnimationIteration
    );
  }, []);

  // To do order and crap it just makes more sense to use an array anyways.
  const onAnimationIteration = () => {
    const image = images.pop();
    images.unshift(image);
    cardsRef.forEach(
      (cardRef, index) => (cardRef.current.children[0].src = images[index])
    );
    //What is the point of being able to natively set the image?
    //I need to be moving the images instead, then
  };

  return (
    <Container maxWidth="false" ref={divRef} {...props}>
      <Track ref={trackRef} animSpeed={props.animSpeed}>
        {cards}
      </Track>
    </Container>
  );
})`
  padding: 0 !important;
`;
