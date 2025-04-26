import AppBar from "@/components/AppBar";
import { BrowserRouter } from "react-router";
import { PublicRouter } from "./routes/app-routes";

const App = () => {
  return (
    <>
      <title>Waqf-e-Nau Expo</title>
      <BrowserRouter>
        <AppBar />
        <PublicRouter />
      </BrowserRouter>
    </>
  );
};

export default App;
