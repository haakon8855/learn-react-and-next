import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PokemonPage from "./pages/PokemonPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/pokemon/:name", element: <PokemonPage /> },
]);

const theme = createTheme({
  typography: {
    fontFamily: ["Emerald", "Courier New"].join(","),
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: { backgroundColor: "#e0d8c0" },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#c0b088",
            color: "#000000",
            "&:hover": {
              backgroundColor: "#c0b088",
            },
          },
          color: "#000000",
        },
      },
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
