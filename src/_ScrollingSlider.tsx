import * as React from "react";
import {
  createRef,
  useRef,
  forwardRef,
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
import styled from "styled-components";

import { Box } from "@mui/material";

const Card = styled((props) => {
  const passedProps = { ...props };
  passedProps.inputref = null;
  return (
    // @ts-ignore (ref)
    <div
      ref={(node) => {
        props.inputref(node, props.key);
      }}
      {...passedProps}
    >
      {/* @ts-ignore (props.src) */}
      <img src={props.src} />
    </div>
  );
})`
  position: absolute;
  left: 0;
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

//@ts-ignore
const makeCards = (num: number, images: string[], inputRef) => {
  const cards = Array(num)
    .fill(null)
    .map((__, index) => {
      const card = (
        // @ts-ignore (src)
        <Card src={images[index]} inputref={inputRef} key={index} />
      );
      return card;
    });
  return cards;
};

const getSpaceX = (ele: HTMLDivElement) => {
  const style = getComputedStyle(ele);
  const marginLeft = parseInt(style.marginLeft);
  const marginRight = parseInt(style.marginRight);
  return ele.clientWidth + marginLeft + marginRight;
};

const animateCards = (cardRefs: any[], pxPerMs: number) => {
  let lastTick = performance.now();

  const cardsData = new Map();
  let startPos = 0;

  //set original position for each card
  cardRefs.forEach((cardRef) => {
    const card = cardRef.current;
    const cardSpace = getSpaceX(card!);
    startPos += cardSpace;

    cardsData.set(cardRef, { pos: startPos - cardSpace });
  });

  function tick(nowish: number) {
    const delta = nowish - lastTick;
    lastTick = nowish;

    cardRefs.forEach((cardRef) => {
      const card = cardRef.current;
      const data = cardsData.get(cardRef);
      const lastPos = data.pos;
      const cardSpace = getSpaceX(card!);

      // console.log(lastPos, delta, pxPerMs)

      // update position
      //console.log(pxPerMs)
      const cardPos = (lastPos + delta * pxPerMs) % (500 + cardSpace);
      data.pos = cardPos;

      // render new position

      card!.style.left = `${cardPos}px`;
    });
    window.requestAnimationFrame(tick);
  }
  window.requestAnimationFrame(tick);
};

export default styled((props) => {
  // const divRef = createRef<HTMLDivElement>();
  // const trackRef = useRef<HTMLDivElement>(null);

  console.log("RENDERING");

  const [isLoaded, setIsLoaded] = useState(false);
  const cardsLoaded = useRef(0);

  const onRefChange = useCallback((node, key) => {
    if (!node || cardsLoaded == props.numcards) return; // This will be a problem if ref changes more than once before all are loaded
    cardRefs[cardsLoaded.current].current = node; //! Potential issue here?
    console.log(node);
    cardsLoaded.current++;
    if (cardsLoaded.current < props.numcards) return;
    console.log("set is loaded!");
    setIsLoaded(true);
  }, []);

  const [cardRefs, setCardRefs] = useState(() => {
    return Array(props.numcards).fill({});
  });

  const [cards, setCards] = useState(() => {
    return makeCards(props.numcards, props.images, onRefChange);
  });

  useEffect(() => {
    if (!isLoaded) return;
    console.log("time to animate");
    animateCards(cardRefs, props.pxPerSec * 1000);
  }, [isLoaded]);

  return <Box {...props}>{cards}</Box>;
})`
  position: relative;
  background: red;
  height: 300px;
  width: 80vw;
  overflow: hidden;
`;