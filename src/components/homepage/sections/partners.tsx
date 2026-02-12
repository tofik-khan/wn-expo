import { Box, Container, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";

const Image = ({ src }) => {
  return (
    <>
      <Box
        sx={{
          width: "150px",
          height: "150px",
          marginRight: "50px",
          background: `url(${src})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </>
  );
};

export const SectionPartners = () => {
  return (
    <>
      <Container sx={{ py: 4 }}>
        <Typography variant="h2" my={5}>
          Partners / Sponsors
        </Typography>
        <Marquee>
          <Image src="/images/partners/amc.png" />
          <Image src="/images/partners/amla.png" />
          <Image src="/images/partners/amma.jpeg" />
          <Image src="/images/partners/ansar.png" />
          <Image src="/images/partners/atfal.png" />
          <Image src="/images/partners/lajna.png" />
          <Image src="/images/partners/awsa.jpeg" />
          <Image src="/images/partners/humanity-first.jpeg" />
          <Image src="/images/partners/iaaae.png" />
          <Image src="/images/partners/amc-usa.png" />
          <Image src="/images/partners/wn.png" />
        </Marquee>
      </Container>
    </>
  );
};
