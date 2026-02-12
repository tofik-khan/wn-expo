import { Container, Grid, Typography } from "@mui/material";

export const SectionVenue = () => {
  return (
    <>
      <Container>
        <Typography variant="h2" py={3}>
          Venue
        </Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography fontSize={"20px"}>
              <strong>For Boys</strong>
            </Typography>
            <Typography fontSize={"24px"} color="text.secondary">
              Mubarak Mosque, North Virginia
            </Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.9066782804744!2d-77.43637609999999!3d38.8803769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6442566f6cbc5%3A0xe518735261163790!2sMubarak%20Mosque!5e0!3m2!1sen!2sus!4v1739233020908!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: "0" }}
              loading="lazy"
            ></iframe>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography fontSize={"20px"}>
              <strong>For Girls</strong>
            </Typography>
            <Typography fontSize={"24px"} color="text.secondary">
              Masroor Mosque, South Virginia
            </Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.820028446385!2d-77.37670092407382!3d38.67600397177225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b65781dfc2e567%3A0x31e5d688e5b51fa0!2sMasroor%20Mosque!5e0!3m2!1sen!2sus!4v1701580722661!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: "0" }}
              loading="lazy"
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
