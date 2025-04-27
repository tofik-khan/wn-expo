import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import App from './App.tsx'
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/mainTheme.ts";
import { AuthProvider } from "./AuthProvider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
