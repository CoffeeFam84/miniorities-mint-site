import { styled } from "@mui/material/styles";

import { Container, Typography } from "@mui/material";

export default styled((props) => {
  return (
    <Container id="about" {...props}>
      <div className="text">
        <Typography variant="h2" sx={{mb: "2rem"}}>Introduction</Typography>
        <Typography sx={{mb: "1rem"}}>
          Hello everyone! my name is Dienne im 23 years old born and raised in
          London, when I was young I loved gaming and anime, that's what gave me
          the inspiration to draw.
        </Typography>
        <Typography>
          Also, It wasn't easy when I was growing up as a kid but I've always
          been passionate about art, leading me to make this amazing NFT!
        </Typography>
      </div>
      <img src="portrait.png"></img>
    </Container>
  );
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  .text {
    width: clamp(30rem, 50%, 70rem);
  }

  h2 {
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

  p {
    font-size: 1.4em;
  }

  margin-bottom: 25rem;
`;
