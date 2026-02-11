import { Loading } from "@/components/Loading";
import { useFaqQuery } from "@/queries/faq";
import parseHTML from "@/utils/parseHTML";
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";

export const PageFAQs = () => {
  const { isLoading, data } = useFaqQuery();

  if (isLoading) return <Loading />;

  const publishedFAQs = data.filter((faq) => faq.isPublished);

  return (
    <>
      <Container
        maxWidth="xl"
        sx={(theme) => ({
          backgroundColor: theme.palette.grey[50],
          marginY: 3,
          p: 5,
        })}
      >
        <Typography variant="h3">Frequently Asked Questions</Typography>
        <Typography>
          Answers to your common questions about the Waqf-e-Nau Expo
        </Typography>
        <Box my={10}>
          {publishedFAQs.map((faq) => {
            return (
              <Accordion sx={{ my: 1 }} key={faq._id}>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  id={`faq-${faq._id}`}
                >
                  <Typography variant="body2">{faq.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {parseHTML({ html: faq.content })}
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Container>
    </>
  );
};
