import { Circle } from "@mui/icons-material";
import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

export const JoinInstructionModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>How to Join a Waqf-e-Nau Expo Session?</DialogTitle>
      <DialogContent>
        <Typography variant="h4">Step 1:</Typography>
        <Typography>
          Scroll to find the session that is live. Indicated by the{" "}
          <Chip
            label={<Typography>LIVE</Typography>}
            variant="outlined"
            color="error"
            size="small"
            icon={<Circle />}
          />{" "}
          icon
        </Typography>
        <Typography sx={{ mt: 1 }} variant="h4">
          Step 2:
        </Typography>
        <Typography>
          Click on the session you are interested in attending
        </Typography>

        <Typography sx={{ mt: 1 }} variant="h4">
          Step 3:
        </Typography>
        <Typography>
          Find the "Join Session" button and click on it to open the Zoom
          conference
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
