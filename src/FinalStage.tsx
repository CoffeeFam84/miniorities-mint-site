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
      <img className="heading" src="final-stage.png"/>
      <Typography>
        Holders will be entered in airdrop giveaways and more!
      </Typography>
      <div className="socials">
        <SocialButton color="twitterButton" href="https://twitter.com/QualifiedDevs">
          Twitter
        </SocialButton>
        <SocialButton color="discordButton" href="https://discord.gg/k2bTq4eD">Discord</SocialButton>
      </div>
    </Container>
  );
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .heading {
    color: #ff6464;
    font-weight: bold;
    margin-bottom: 4rem;
  }

  p {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 5rem;
    width: 80%;
  }

  .socials {
      width: 100%;
      display: flex;
      padding: 0 30%;
      a {
        margin: auto;
      }
  }

  margin-bottom: 15rem;
`;
