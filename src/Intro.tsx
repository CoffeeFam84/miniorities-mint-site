import { Container, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// Will probably go with display grid I think is how this shit works.

export default styled((props) => {
  return (
    <Container id="about" {...props}>
      <Box className="text">
        <Typography variant="h2" sx={{ mb: "2rem" }}>
          Introduction
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Welcome to The Little Minorities.
          <br />
          The Little Minorities community stands up to make the world a better
          place by spreading a positive message and supporting each other.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          To The Little Minorities community it does not matter who you are,
          where you come from or what you do. We accept everyone and support
          each other in what we’re all doing. The Little Minorities is not just
          a community. We are a family.
        </Typography>
        <Typography>
          The Little Minorities is a collection of 2222 NFTs made out of 65
          traits created by me, Dienne. I’m a 23 year old artist who loves
          gaming, anime and drawing. Growing up as a kid wasn’t always easy, but
          I’ve always been passionate about art as a way to express myself. This
          led me to make this NFT collection to build a great community who can
          support each other in whatever it is they do.
        </Typography>
      </Box>
      <img src="portrait.png"></img>
    </Container>
  );
})`
  display: flex;
  justify-content: center;

  text-align: center;

  & > * {
    margin: 2rem;
  }

  img {
    width: clamp(20rem, 80%, 30rem);
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
