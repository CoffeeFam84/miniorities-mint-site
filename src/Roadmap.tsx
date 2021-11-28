import * as React from "react";
import { Container, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";

const Section = styled((props) => {
  return (
    <div className="roadmap-section" {...props}>
      <div className="stage-container">
        <img src={props.stage} className="stage" />
      </div>

      <div className="scroll-bar-container">
        <div className="scroll-icon-container">
          <div className="scroll-icon">
            <div className="scroll-icon-color" />
          </div>
        </div>
      </div>

      <div className="content">
        <img src={props.stage} className="stage" />
        <Typography>{props.desc}</Typography>
        <img src={props.img} className="mockup" />
      </div>
    </div>
  );
})`
  height: 40rem;

  display: grid;
  grid-template-columns: 1fr auto 1fr;

  .stage-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2rem 0;
    .stage {
      position: sticky;
      top: 50%;
    }
  }

  .scroll-bar-container {
    position: relative;
    padding: 2rem 0;
    height: 100%;
    width: fit-content;

    .scroll-icon-container {
      position: sticky;
      top: 50%;
      height: 77px;
      padding-top: 15px;
      .scroll-icon {
        width: 2rem;
        height: 2rem;
        background: #ffffff;
        border-radius: 50%;
        box-shadow: 0 1px 3px 1px hsla(0, 0%, 0%, 25%);

        display: flex;
        justify-content: center;
        align-items: center;

        .scroll-icon-color {
          width: 68%;
          height: 68%;
          background: ${({ iconcolor }) => iconcolor};
          border-radius: 50%;
        }
      }
    }
  }

  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 400px;
    padding-left: 5rem;

    .mockup {
      width: 100%;
      border: 10px solid white;
      border-radius: 8px;
      box-shadow: 0 1px 3px 1px hsla(0, 0%, 0%, 25%);
    }
    p {
      font-size: 1.2em;
      font-weight: 500;
      width: 100%;
      margin-bottom: 1.5rem;
    }
    .stage {
      display: none;
      width: 6rem;
    }
  }

  @media screen and (max-width: 800px) {

    grid-template-columns: auto 1fr;
    place-items: center;

    .stage-container {
      display: none;
    }
    .content {
      .stage {
        display: initial;
      }
    }
  }
`;

/*
  Hmm...
  Each section has explicit grid! Maybe it's just two grids then one  is for the other thingy
  Text and Icon have same height
  
  $3k for Site
  $800 for Contract Debug

  Site
  Live Support
  Debug
  Hosting

  $800 Deposit for Site
  $400 for Contract Debug Paid Up-Front

  $2200 to pay

  400
*/

/*
  Contract "Debug"
  Website, Hosting, Support for 3k
  $800 upfront
*/

export default styled((props) => {
  return (
    <Container {...props}>
      <div id="roadmap">
        <Typography variant="h2">Roadmap</Typography>
        <div className="underline">
          <div style={{ background: "#F04F4F" }} />
          <div style={{ background: "#30A6FF" }} />
          <div style={{ background: "#93C848" }} />
          <div style={{ background: "#FFCF1C" }} />
          <div style={{ background: "#F04F4F" }} />
          <div style={{ background: "#30A6FF" }} />
        </div>
      </div>

      <div className="sections">
        <div className="scroll-bar-background" />
        <Section
          stage="stage-stickers/1.png"
          desc="We sell out all 888 of random generated minorities costing 0.5 Sol"
          img="mockups/1.png"
          iconcolor="#F04F4F"
        ></Section>
        <Section
          stage="stage-stickers/2.png"
          desc="Engage build a community of friends and build a family of new people!"
          img="mockups/2.png"
          iconcolor="#30A6FF"
        ></Section>
        <Section
          stage="stage-stickers/3.png"
          desc="Get our NFTs onto the secondary market and Raise the Floor!"
          img="mockups/3.png"
          iconcolor="#93C848"
        ></Section>
        <Section
          stage="stage-stickers/4.png"
          desc="Donate to percentage of earnings Great Ormond Street Kids Hospital"
          img="mockups/4.png"
          iconcolor="#FFCF1C"
        ></Section>
        <Section
          stage="stage-stickers/5.png"
          desc="Everyone that holds a Little Minorities will be air dropped a chocolate bar"
          img="mockups/5.png"
          iconcolor="#F04F4F"
        ></Section>
        <Section
          stage="stage-stickers/6.png"
          desc="You will be able to mint unwrap the the chocolate bar and 100 out of 888 will contain 
a golden ticket..... The Reset is a Secret "
          img="mockups/6.png"
          iconcolor="#30A6FF"
        ></Section>
      </div>
    </Container>
  );
})`
  position: relative;

  #roadmap {
    text-align: center;
    display: grid;
    margin: 0 auto 8rem;
    width: fit-content;

    h2 {
      margin: 0 1rem;
      font-weight: bold;
    }

    .underline {
      position: relative;
      top: -12px;
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      div {
        height: 6px;
      }
    }
  }

  .sections {
    position: relative;
    .scroll-bar-background {
      position: absolute;
      top: 0rem;
      height: 100%;
      width: 10px;
      left: 50%;
      transform: translate(-50%);
      background: rgb(0, 212, 255);
      background: linear-gradient(
        rgba(0, 212, 255, 0) 0%,
        rgba(23, 201, 255, 1) 12%,
        rgba(170, 135, 255, 1) 88%,
        rgba(193, 124, 255, 0) 100%
      );
    }
    @media screen and (max-width: 800px) {
      .scroll-bar-background {
        left: calc(0% + 1rem);
      }
      .content {
        padding-left: 0;
        width: clamp(150px, 80%, 320px);
      }
    }
  }
`;
