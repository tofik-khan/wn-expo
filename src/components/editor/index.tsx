import { SimpleEditor } from "@/components/tiptap/components/tiptap-templates/simple/simple-editor";
import { Box, useTheme } from "@mui/material";
// import "@/components/tiptap/styles/_keyframe-animations.scss";
import "@/components/tiptap/styles/_variables.scss";

export const Editor = ({ content, onUpdate }) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          overflow: "scroll",
          height: "500px",
          border: `1px solid ${theme.palette.grey[300]}`,
          borderRadius: "4px",
        }}
      >
        <SimpleEditor content={content} onUpdate={onUpdate} />
      </Box>
    </>
  );
};
