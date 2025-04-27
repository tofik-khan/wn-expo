import { BrowserRouter } from "react-router";
import { AppRoutes } from "./routes/app-routes";

const App = () => {
  return (
    <>
      <title>Waqf-e-Nau Expo</title>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
