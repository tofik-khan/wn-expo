import { Button, Typography } from "@mui/material";
import AppBar from "@/components/AppBar";

const App = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <title>Waqf-e-Nau Expo</title>
      <AppBar />
    </>
  );
};

export default App;
