import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import Image from "next/image";

const Card = styled((props) => {
  return (
    <Box {...props} ref={props.inputRef} key={props.index}>
      <Box className="image-wrapper">
        <Image
          src={props.src}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </Box>
    </Box>
  );
})`
  position: absolute;
  left: 0;
  width: 300px;
  height: 300px;

  padding: 8px;
  margin: 8px;
  border-radius: 10px;

  background: white;
  box-shadow: 0px 0px 2.5px 1.25px hsla(0, 0%, 0%, 20%);

  .image-wrapper {

    position: relative;
    width: 100%;
    height: 100%;

    &,
    span,
    img {
        
      border-radius: inherit;
    }
  }
`;

const getCardSpace = (ele: HTMLElement) => {
  const style = getComputedStyle(ele);
  const marginLeft = parseInt(style.marginLeft);
  const marginRight = parseInt(style.marginRight);
  return ele.clientWidth + marginLeft + marginRight;
};

const getCardPos = (node: HTMLElement) => {
  const style = getComputedStyle(node);
  return parseInt(style.left);
};

const setCardPos = (node: HTMLElement, pos: number) => {
  node.style.left = `${pos}px`;
};

const placeCards = (nodes: HTMLElement[]) => {
  let startPos = 0;
  nodes.forEach((node) => {
    const cardSpace = getCardSpace(node);
    setCardPos(node, startPos);
    startPos += cardSpace;
  });
};

const getAvailableSpace = (node: HTMLElement) => {
  const style = getComputedStyle(node);
  const paddingLeft = parseInt(style.paddingLeft);
  const paddingRight = parseInt(style.paddingRight);
  return node.clientWidth - paddingLeft - paddingRight;
};

const animateCards = (
  track: HTMLElement,
  nodes: HTMLElement[],
  pxPerSec: number
) => {
  const cardsData = new Map();
  nodes.forEach((node) => cardsData.set(node, getCardPos(node)));

  const finish = nodes.reduce(
    (totalWidth, node) => totalWidth + getCardSpace(node),
    -316
  );

  const pxPerMs = pxPerSec / 1000;

  let last: number;

  const frame = (time: number) => {
    last = last || time;
    const delta = time - last;

    nodes.forEach((node) => {
      let pos = cardsData.get(node);
      pos += delta * pxPerMs;

      if (pos > finish) {
        pos -= finish + getCardSpace(node);
      }

      setCardPos(node, pos);
      cardsData.set(node, pos);
      setCardPos(node, pos);
    });

    last = time;
    window.requestAnimationFrame(frame);
  };

  window.requestAnimationFrame(frame);
};

const makeCards = (images: string[], inputRef: Function) => {
  return Array(images.length)
    .fill(null)
    .map((__, index) => {
      return (
        <Card
          index={index}
          src={`/${images[index]}`}
          inputRef={(node: HTMLElement) => inputRef(node, index)}
        />
      );
    });
};

const ScrollingSlider = styled((props) => {
  const cardNodesRef = useRef<HTMLElement[]>(Array());
  const [trackNode, setTrackNode] = useState<HTMLElement | null>(null);
  const cardsLoaded = useRef(0);
  const [allCardsLoaded, setAllCardsLoaded] = useState(false);

  const onRefChange = useCallback((node: HTMLElement, index: number) => {
    if (!node) return;
    cardNodesRef.current[index] = node;
    if (++cardsLoaded.current < props.images.length) return;
    console.log("CARDS HAVE BEEN LOADED");
    placeCards(cardNodesRef.current);
    setAllCardsLoaded(true);
  }, []);

  const cards = useMemo(() => makeCards(props.images, onRefChange), []);

  //  Loading complete, begin animation
  useEffect(() => {
    if (!allCardsLoaded || !trackNode) return;
    console.log("ALL LOADED, BEGIN ANIMATION");
    animateCards(trackNode, cardNodesRef.current, props.pxPerSec);
  }, [allCardsLoaded, trackNode]);
  //  How do I get cardNodesRef? I pass to useCards? No...

  return (
    <Box {...props} ref={setTrackNode}>
      {cards}
    </Box>
  );
})`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 316px;
`;

export default ScrollingSlider;
