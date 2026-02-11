import { Presenter } from "@/types";
import parseHTML from "@/utils/parseHTML";
import { Close } from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  Box,
  Typography,
  IconButton,
  DialogContent,
  DialogActions,
  Button,
  Avatar,
  Divider,
} from "@mui/material";
import { SessionCard } from "./session-card";

export const PresenterModal = ({
  open,
  onClose,
  presenter,
}: {
  open: boolean;
  onClose: () => void;
  presenter: Presenter | null;
}) => {
  if (!presenter) return <></>;
  return (
    <>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Avatar
              sx={{ width: "100px", height: "100px" }}
              src={presenter.image}
            />
            <Box>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                {presenter.name}
              </Typography>
              <Typography variant="caption">{presenter.department}</Typography>
            </Box>
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
          {parseHTML({ html: presenter.bio })}
          <Divider>
            <Typography>Sessions</Typography>
          </Divider>
          {presenter.sessions?.map((session) => (
            <SessionCard session={session} key={session._id} />
          ))}
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 3,
          }}
        >
          <Button onClick={onClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
