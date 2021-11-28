import fs from "fs";

import * as React from "react";
import { Container } from "@mui/material";

import { styled } from "@mui/material/styles";

import Header from "../src/Header";
import Hook from "../src/Hook";
import ScrollingSlider from "../src/ScrollingSlider";
import Intro from "../src/Intro";
import Roadmap from "../src/Roadmap";
import FinalStage from "../src/FinalStage";
import Footer from "../src/Footer";

export default styled((props) => {
  return (
    <Container maxWidth="false" {...props}>
      <Header />
      <Hook sx={{ mb: "max(15vw, 10rem)" }} />
      <div id="art">
        <div className="slider-container">
          <ScrollingSlider images={props.mockups[0]} animspeed="2.9s" />
          <ScrollingSlider images={props.mockups[1]} animspeed="2.7s" />
          <ScrollingSlider images={props.mockups[2]} animspeed="3.2s" />
        </div>
      </div>
      <Intro sx={{ mb: "max(20vw, 16rem)" }} />
      <Roadmap sx={{ mb: 20 }} />
      <FinalStage sx={{ mb: 20 }} />
      <Footer />
    </Container>
  );
})`
  padding: 0;
  #art {
    width: 100%;
    position: relative;
    margin: auto;
    height: fit-content;
    overflow: hidden;

    .slider-container {
      width: fit-content;
      margin: 0 0 15rem;
      transform: translate(-10%) rotate(-8deg);
    }
    margin-bottom: 25rem;
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
