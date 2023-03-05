import React from "react";
// routes
import Router from "./routes";

import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

// -------------------------------------------------------------------------------------------

const App = () => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router />
        </ThemeProvider>
      </StyledEngineProvider>{" "}
    </>
  );
};

export default App;
