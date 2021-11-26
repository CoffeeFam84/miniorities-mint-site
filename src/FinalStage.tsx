import { styled } from "@mui/material/styles";

import { Container, Typography, Button } from "@mui/material";

const SocialButton = styled((props) => {
  return <Button variant="contained" {...props}></Button>;
})`
    width: 10rem;
    height: 4rem;
    font-size: 1.2rem;
`;

export default styled((props) => {
  return (
    <Container {...props}>
      <img className="heading" src="final-stage.png"/>
      <Typography>
        Holders will be entered in airdrop giveaways and more!
      </Typography>
      <div className="socials">
        <SocialButton href="https://twitter.com/QualifiedDevs">
          Twitter
        </SocialButton>
        <SocialButton href="https://discord.gg/k2bTq4eD">Discord</SocialButton>
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
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 5rem;
  }

  .socials {
      display: flex;
      justify-content: space-between;
  }

  margin-bottom: 15rem;
`;
