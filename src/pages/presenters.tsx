import { Loading } from "@/components/Loading";
import { FeaturedPresenter } from "@/components/presenters/featured-presenter";
import { PresenterModal } from "@/components/presenters/presenter-modal";
import { SessionPresenter } from "@/components/presenters/session-presenter";
import { usePresentersQuery } from "@/queries/presenters";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

export const PagePresenters = () => {
  const { data, isLoading } = usePresentersQuery();
  const [presenter, setPresenter] = useState(null);
  const navigate = useNavigate();

  if (isLoading) return <Loading />;

  const featuredPresenters = data.filter(
    (presenter) => presenter.isFeatured && presenter.isPublished,
  );
  const sessionPresenters = data.filter(
    (presenter) => !presenter.isFeatured && presenter.isPublished,
  );

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
        <Typography variant="h3">Presenters</Typography>
        <Typography>
          Meet the speakers who will be leading the sessions at the Waqf-e-Nau
          EXPO
        </Typography>
        {/* Featured Presenters */}
        {featuredPresenters.length > 0 && (
          <>
            <Divider sx={{ maxWidth: "400px", margin: "auto", my: 5 }}>
              <Typography variant="h6">Featured Speakers</Typography>
            </Divider>
            <Grid container justifyContent={"center"} spacing={2}>
              {featuredPresenters.map((presenter) => (
                <Grid size={{ xs: 12, md: 6, lg: 3 }} key={presenter._id}>
                  <FeaturedPresenter
                    onClick={() => setPresenter(presenter)}
                    presenter={presenter}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        )}

        {/* Session Presetners */}
        {sessionPresenters.length > 0 && (
          <>
            <Divider sx={{ maxWidth: "400px", margin: "auto", my: 5 }}>
              <Typography variant="h6">Session Speakers</Typography>
            </Divider>
            <Grid
              container
              justifyContent={{ md: "flex-start", xs: "center" }}
              spacing={2}
            >
              {sessionPresenters.map((presenter) => (
                <Grid size={{ xs: 12, md: 6, lg: 3 }} key={presenter._id}>
                  <SessionPresenter
                    onClick={() => setPresenter(presenter)}
                    presenter={presenter}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        )}

        {/* Empty State */}
        {featuredPresenters.length === 0 && sessionPresenters.length === 0 && (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 3,
              }}
            >
              <img
                src="/images/graphics/badge.png"
                style={{ marginBlock: 2, width: "400px" }}
              />

              <Typography fontSize={"28px"} color="text.secondary">
                No Presenters available yet.
              </Typography>
              <Box>
                <Typography>You will learn about the speakers here.</Typography>
                <Typography>
                  Please check back later for the list of our presenters.
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/")}
              >
                Return Home
              </Button>
            </Box>
          </>
        )}
      </Container>
      <PresenterModal
        open={presenter !== null}
        onClose={() => setPresenter(null)}
        presenter={presenter}
      />
    </>
  );
};
