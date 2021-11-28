import { Container, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// Will probably go with display grid I think is how this shit works.

export default styled((props) => {
  return (
    <Container id="about" {...props}>
      <Box className="text">
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
      </Box>
      <img src="portrait.png" ></img>
    </Container>
  );
})`

  display: flex;
  justify-content: center;


  text-align: center;

  &>* {
    margin: 2rem;
  }

  img {
    width: clamp(20rem, 80%, 30rem)
  }

  .text {

    width: min(100%, 40rem);

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

  }

  @media screen and (max-width: 1000px) {

    flex-direction: column;
    align-items: center;

    .text {
      h2 {

      }
      p {

      }
    }
  }

  @media screen and (max-width: 500px) {

    .text {
      h2 {
        font-size: 2.8rem;
        margin-bottom: 1rem;
      }
      p {
        font-size: 1.2rem;
      }
    }
  }


`;