import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

import { useMemo } from "react";
import AppRoutes from "./routes/AppRoutes";
import BlueTheme from "./theme/BlueTheme";
import { IAppState } from "./models/GeneralTypes";
import "./App.css";

function App() {
  const mode = useSelector((state: IAppState) => state.general.mode);
  const theme = useMemo(() => createTheme(BlueTheme[mode]), [mode]);
  return (
    <div className={"app"}>
      <HelmetProvider>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppRoutes />
          </ThemeProvider>
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}

export default App;
