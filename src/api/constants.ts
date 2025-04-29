export const API_BASE =
  import.meta.env.ENV === "DEV"
    ? "http://localhost:3000"
    : "https://wn-expo-backend.vercel.app";
