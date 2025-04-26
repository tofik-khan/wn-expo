import AppBar from "@/components/AppBar";
import { BrowserRouter } from "react-router";
import { PublicRouter } from "./routes/public";

const App = () => {
  return (
    <>
      <title>Waqf-e-Nau Expo</title>
      <AppBar />
      <BrowserRouter>
        <PublicRouter />
      </BrowserRouter>
    </>
  );
};

export default App;
