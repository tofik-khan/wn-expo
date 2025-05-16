import { useForm, Controller } from "react-hook-form";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Button,
  TextField,
  Switch,
  FormControlLabel,
  Snackbar,
  Alert,
} from "@mui/material";
import { Check, Close } from "@mui/icons-material";
import { useAuth0 } from "@auth0/auth0-react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { showSuccess } from "@/reducers";
import { Faq } from "@/types/faq";
import { Editor } from "@/components/editor";
import { useState } from "react";
import { useFaqMutation } from "@/queries/faq";

export const CreateFAQDialog = ({
  open,
  onClose,
  faq,
  setFaq,
}: {
  open: boolean;
  onClose: any;
  faq: Faq;
  setFaq: any;
}) => {
  const editMode = !!faq;
  const { control, handleSubmit, reset } = useForm();
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const { successSnackbar } = useAppSelector((state) => state.app);
  const { currentUser } = useAppSelector((state) => state.admin)
  const createFAQ = useFaqMutation();
  const dispatch = useAppDispatch();
  const [bodyHTML, setBodyHTML] = useState(editMode ? faq.bodyHTML : "");
  const [bodyText, setBodyText] = useState(editMode ? faq.bodyText : "");

  const handleCreate = async (data: Faq) => {
    if (isAuthenticated) {
      const authToken = await getAccessTokenSilently();
      createFAQ.mutate({authToken, data});
    }
  };

  const handleEdit = async (data: Faq) => {
    if (isAuthenticated) {
      const authToken = await getAccessTokenSilently();
      console.log("edit", data, authToken);
    }
  };

  const onSubmit = (data: Faq) => {
    reset();
    editMode
      ? handleEdit({ ...data, bodyHTML, bodyText, editedBy: currentUser._id })
      : handleCreate({ ...data, bodyHTML, bodyText, createdBy: currentUser._id });
    onClose();
    setFaq(null);
    setBodyHTML("");
    setBodyText("");
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} fullScreen>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>{`${editMode ? "Edit" : "Create"} FAQ`}</DialogTitle>
          <IconButton
            aria-label="close"
            onClick={() => {
              reset();
              setFaq(null);
              setBodyHTML("");
              setBodyText("");
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
                  label="Title"
                />
              )}
              name="title"
              control={control}
              key={"title-input"}
              defaultValue={editMode ? faq.title : ""}
            />
            <Editor
              content={bodyHTML}
              onUpdate={({editor}) => {
                setBodyHTML(editor.getHTML());
                setBodyText(editor.getText());
              }}
            />
            <Controller
              render={({ field }) => (
                <FormControlLabel
                  {...field}
                  control={<Switch checked={field.value === true} />}
                  label="Published"
                />
              )}
              name="isPublished"
              control={control}
              key={"isPublished-input"}
              defaultValue={editMode ? faq.isPublished : true}
            />
          </DialogContent>
          <DialogActions sx={{width: "90%"}}>
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
