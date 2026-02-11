import { Loading } from "@/components/Loading";
import { FeaturedPresenter } from "@/components/presenters/featured-presenter";
import { PresenterModal } from "@/components/presenters/presenter-modal";
import { SessionPresenter } from "@/components/presenters/session-presenter";
import { usePresentersQuery } from "@/queries/presenters";
import { Container, Divider, Grid, Typography } from "@mui/material";
import { useState } from "react";

export const PagePresenters = () => {
  const { data, isLoading } = usePresentersQuery();
  const [presenter, setPresenter] = useState(null);

  if (isLoading) return <Loading />;

  const featuredPresenters = data.filter((presenter) => presenter.isFeatured);
  const sessionPresenters = data.filter((presenter) => !presenter.isFeatured);

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
      </Container>
      <PresenterModal
        open={presenter !== null}
        onClose={() => setPresenter(null)}
        presenter={presenter}
      />
    </>
  );
};
