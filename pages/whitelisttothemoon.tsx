import fs from "fs";

import * as React from "react";
import { Box, Container } from "@mui/material";

import { styled } from "@mui/material/styles";

import Header from "../src/Header";
import Hook from "../src/Hook_presale";
import ScrollingSlider from "../src/ScrollingSlider";
import Intro from "../src/Intro";
import Roadmap from "../src/Roadmap";
import FinalStage from "../src/FinalStage";
import FAQ from "../src/FAQ";
import Footer from "../src/Footer";

export default styled((props) => {
  return (
    <Container maxWidth="false" {...props}>
      {/* <Header /> */}
      <Hook />
      {/* <Box id="art">
        <Box className="slider-container">
          <ScrollingSlider images={props.mockups[0]} pxPerSec={100} />
          <ScrollingSlider images={props.mockups[1]} pxPerSec={120} />
          <ScrollingSlider images={props.mockups[2]} pxPerSec={80} />
        </Box>
      </Box>
      <Intro sx={{ mb: "max(20vw, 16rem)" }} />
      <Roadmap sx={{ mb: 20 }} />
      <FinalStage sx={{ mb: 35 }} />
      <FAQ sx={{ mb: 15 }} />
      <Footer /> */}
    </Container>
  );
})`
  padding: 0;
  #art {
    width: 100%;
    position: relative;
    height: fit-content;
    overflow: hidden;
    margin-bottom: 25rem;

    .slider-container {
      display: flex;
      overflow: hidden;
      flex-direction: column;
      align-items: center;
      width: 200vw;
      transform: translate(-25%) rotate(-8deg);
      margin: 10vw;
    }
  }
`;

export async function getStaticProps() {
  const mockups: string[][] = Array(3)
    .fill(null)
    .map((__, index) => {
      return fs.readdirSync(`./public/slider-mockups/${index + 1}`);
    });
  mockups.forEach((sliderImages, index) => {
    sliderImages.forEach((path, pathIndex) => {
      sliderImages[pathIndex] = `slider-mockups/${index + 1}/${path}`;
    });
  });
  return {
    props: {
      mockups,
    },
  };
}
