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
  Snackbar,
  Alert,
} from "@mui/material";
import { Check, Close } from "@mui/icons-material";
import { useAdminMutation, useUpdateAdminMutation } from "@/queries/admin";
import { useAuth0 } from "@auth0/auth0-react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { showSuccess } from "@/reducers";

export const CreateAdminDialog = ({
  open,
  onClose,
  admin,
  setAdmin,
}: {
  open: boolean;
  onClose: any;
  admin: Admin;
  setAdmin: any;
}) => {
  const editMode = !!admin;
  const { control, handleSubmit, reset } = useForm<Admin>();
  const createAdmin = useAdminMutation();
  const updateAdmin = useUpdateAdminMutation();
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const { successSnackbar } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  const handleCreate = async (data: Admin) => {
    if (isAuthenticated) {
      const authToken = await getAccessTokenSilently();
      createAdmin.mutate({ authToken, data });
    }
  };

  const handleEdit = async (data: Admin) => {
    if (isAuthenticated) {
      const authToken = await getAccessTokenSilently();
      updateAdmin.mutate({ authToken, data: { ...data, _id: admin._id } });
    }
  };

  const onSubmit = (data: Admin) => {
    reset();
    editMode ? handleEdit(data) : handleCreate(data);
    onClose();
    setAdmin(null);
  };
  return (
    <>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth={"sm"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>{`${editMode ? "Edit" : "Create"}`} Admin</DialogTitle>
          <IconButton
            aria-label="close"
            onClick={() => {
              reset();
              setAdmin(null);
              onClose();
            }}
            sx={(theme) => ({
              position: "absolute",
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
            })}
          >
            <Close />
          </IconButton>
          <DialogContent
            dividers
            sx={{
              pl: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
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
              key={"name-input"}
              defaultValue={editMode ? admin.name : ""}
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
                key={"email-input"}
                defaultValue={editMode ? admin.email.split("@")[0] : ""}
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
              key={"title-input"}
              defaultValue={editMode ? admin.title : ""}
            />
            <Controller
              render={({ field }) => (
                <FormControlLabel
                  {...field}
                  control={<Switch disabled checked={field.value === true} />}
                  label="Superuser"
                />
              )}
              name="isSuperuser"
              control={control}
              key={"isSuperuser-input"}
              defaultValue={editMode ? admin.isSuperuser : false}
            />
            <Controller
              render={({ field }) => (
                <FormControlLabel
                  {...field}
                  control={<Switch checked={field.value === true} />}
                  label="Authorized"
                />
              )}
              name="isAuthorized"
              control={control}
              key={"isAuthorized-input"}
              defaultValue={editMode ? admin.isAuthorized : true}
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit">Save changes</Button>
          </DialogActions>
        </form>
      </Dialog>
      <Snackbar
        open={successSnackbar.open}
        autoHideDuration={6000}
        onClose={() => dispatch(showSuccess({ open: false }))}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert icon={<Check fontSize="inherit" />} severity="success">
          {successSnackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};
