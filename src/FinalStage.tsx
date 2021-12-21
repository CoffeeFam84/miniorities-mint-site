import { styled } from "@mui/material/styles";

import { Container, Typography, Button } from "@mui/material";

const SocialButton = styled((props) => {
  return <Button variant="contained" {...props}></Button>;
})`
  width: 10rem;
  height: 4rem;
  font-size: 1.4rem;
  border-radius: 20px;
`;

export default styled((props) => {
  return (
    <Container {...props}>
      <img className="heading" src="final-stage.png" />
      <Typography>
        The reveal of what the use of the Golden Ticket will be for and airdrops
        for our community.
      </Typography>
      <div className="socials">
        <SocialButton
          color="twitterButton"
          href="https://twitter.com/QualifiedDevs"
        >
          Twitter
        </SocialButton>
        <SocialButton color="discordButton" href="https://discord.gg/EMJu8Cs2ss">
          Discord
        </SocialButton>
      </div>
    </Container>
  );
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .heading {
    width: min(400px, 100%);
    margin-bottom: 4rem;
  }

  p {
    width: min(90%, 500px);
    color: #2c2c2c;
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 5rem;
  }

  .socials {
    width: min(400px, 90%);
    display: flex;
    justify-content: space-between;
    a {
    }
  }

  @media screen and (max-width: 450px) {
    .heading {
      margin-bottom: 2.2rem;
    }
    p {
      font-size: 1.4rem;
      margin-bottom: 3rem;
    }
    .socials {
      a {
        font-size: 1rem;
        margin: 0 1rem;
      }
    }
  }
`;
