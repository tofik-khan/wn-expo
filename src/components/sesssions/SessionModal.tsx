import { Presenter as TPresenter, Session } from "@/types";
import parseHTML from "@/utils/parseHTML";
import { Close, DoorBackOutlined } from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  Typography,
  Box,
  Divider,
  Grid,
  DialogActions,
  Button,
} from "@mui/material";
import { Presenter } from "./Presenter";
import { isSessionLive } from "@/utils/time";
import { useState, useEffect } from "react";

export const SessionModal = ({
  open,
  onClose,
  session,
}: {
  open: boolean;
  onClose: () => void;
  session: Session<TPresenter> | null;
}) => {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLive(isSessionLive(session));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!session) return <></>;
  return (
    <>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="caption">{`${session.startTime} - ${session.endTime} (EST)`}</Typography>
            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <DoorBackOutlined />
              {session.location}
            </Typography>
          </Box>
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={(theme) => ({
              color: theme.palette.grey[500],
              width: "50px",
              height: "50px",
            })}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent
          dividers
          sx={{
            pl: "16px",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="h6">{session.title}</Typography>
          <img
            src={session.thumbnail}
            style={{
              width: "100%",
              minHeight: "170px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          {parseHTML({ html: session.description })}
          <Divider>
            <Typography color="text.secondary">{`Speaker${session.presenters.length > 1 ? "s" : ""}`}</Typography>
          </Divider>
          <Grid container spacing={2}>
            {session.presenters.map((presenter) => (
              <Grid size={{ xs: 12, sm: 6 }} key={session._id}>
                <Presenter data={presenter} />
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            p: 3,
          }}
        >
          <Typography variant="overline">
            {!isLive && (
              <strong>
                <Typography
                  component={"span"}
                  variant="subtitle2"
                  fontSize={"28px"}
                >
                  *
                </Typography>{" "}
                This session is not live, please check back later
              </strong>
            )}
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: { xs: "100%", md: "fit-content" },
              justifyContent: { xs: "space-around", md: "center" },
            }}
          >
            <Button onClick={onClose}>Close</Button>
            <Button
              disabled={!isLive}
              variant="contained"
              href={session.link}
              target="_blank"
            >
              Join Session
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
};
