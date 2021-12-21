import React, { useState, useEffect, useMemo, useCallback } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import Image from "next/image";

const Card = styled((props) => {
  return (
    <Box {...props}>
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
  position: relative;
  width: 300px;
  height: 300px;

  padding: 8px;
  margin: 8px;
  border-radius: 10px;

  background: white;
  box-shadow: 0px 0px 2.5px 1.25px hsla(0, 0%, 0%, 20%);


  .image-wrapper {
    position: relative;
    border-radius: inherit;
    width: 100%;
    height: 100%;
  }

`;

//@ts-ignore
const makeCards = (images: string[], inputRef) => {
  return Array(images.length)
    .fill(null)
    .map((__, index) => (
      <Card key={index} src={`/${images[index]}`} ref={inputRef} />
    ));
};

const ScrollingSlider = styled((props) => {
  const inputRef = useCallback((node) => {
    console.log(node);
  }, []);

  const cards = useMemo(() => makeCards(props.images, inputRef), []);

  return <Box {...props}>{cards}</Box>;
})`
  display: flex;
  overflow: hidden;
  background: #535353;
`;

export default ScrollingSlider;
