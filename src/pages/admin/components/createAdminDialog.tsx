import { useForm, Controller } from "react-hook-form";
import { Admin } from "@/types/admin";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Button,
  TextField,
  Box,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useAdminMutation } from "@/queries/admin";
import { useAuth0 } from "@auth0/auth0-react";

export const CreateAdminDialog = ({ open, onClose }) => {
  const { control, handleSubmit, reset } = useForm<Admin>({
    defaultValues: {
      isAuthorized: true,
      isSuperuser: false,
    }
  });
  const createAdmin = useAdminMutation();
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  const handleCreate = async (data: Admin) => {
      if (isAuthenticated) {
        const authToken = await getAccessTokenSilently();
        createAdmin.mutate({ authToken, data });
      }
    };

  const onSubmit = (data: Admin) => {
    reset();
    handleCreate(data);
    onClose();
  };
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth={"sm"}>
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <DialogTitle>Create Admin</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <Close />
        </IconButton>
        <DialogContent dividers sx={{
          mt: "24px",
          pl: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}>
            <Controller
              render={({ field }) => (
                <TextField
                  required
                  {...field}
                  className="materialUIInput"
                  label="Name"
                  sx={{ width: "80%" }}
                />
              )}
              name="name"
              control={control}
            />
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Controller
                render={({ field }) => (
                  <TextField
                    required
                    {...field}
                    className="materialUIInput"
                    label="Email"
                    sx={{ width: "60%" }}
                  />
                )}
                name="email"
                control={control}
              />
              <Typography>@ahmadiyya.us</Typography>
            </Box>
          <Controller
            render={({ field }) => (
              <TextField
                required
                {...field}
                className="materialUIInput"
                label="Title"
                sx={{ width: "80%" }}
              />
            )}
            name="title"
            control={control}
          />
          <Controller
            render={({field}) => (
              <FormControlLabel {...field} control={<Switch disabled defaultChecked={field.value === true} />} label="Superuser" />
            )}  
            name="isSuperuser"
            control={control}
          />
          <Controller
            render={({field}) => (
              <FormControlLabel {...field} control={<Switch defaultChecked={field.value === true} />} label="Authorized" />
            )}  
            name="isAuthorized"
            control={control}
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit">Save changes</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
