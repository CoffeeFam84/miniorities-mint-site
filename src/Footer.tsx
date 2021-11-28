import { styled } from "@mui/material/styles";

import { Container, Typography } from "@mui/material";

export default styled((props) => {
  return (
    <Container maxWidth="false" {...props}>
      <div className="powered-by">
        <Typography variant="h6">Powered by Solana</Typography>
        <img src="solana-logo.svg" />
      </div>
      <Typography variant="h6">The Little Minorities ⓒ 2021</Typography>
    </Container>
  );
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  margin-bottom: 2rem;

  background: linear-gradient(white, white) padding-box,
    linear-gradient(41deg, rgba(0, 212, 255, 1), rgba(218, 113, 255, 1))
      border-box;
  border-top: 4px solid transparent;

  .powered-by {
    display: flex;
    align-items: center;
    text-transform: uppercase;

    h6 {
      margin-right: 0.8rem;
    }
  }

  img {
    width: 2rem;
  }

  @media screen and (max-width: 600px) {
    h6 {
      font-size: 1rem;
    }
    img {
      width: 1.4rem;
    }
  }

  @media screen and (max-width: 500px) {
    h6 {
      font-size: 0.8rem;
    }
    img {
      width: 1rem;
    }
  }
`;
