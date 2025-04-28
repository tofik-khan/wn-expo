import { BrowserRouter } from "react-router";
import { AppRoutes } from "./routes/appRoutes";

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
