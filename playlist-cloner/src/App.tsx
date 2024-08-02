import React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PageText from "./PageText/PageText";
import logo from "./PC-removebg-preview.png";
import { Box, Stack } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={createTheme({ palette: { mode: "dark" } })}>
      <Stack flexDirection="column" className="container" spacing={2}>
        <div className="header">
          <img src={logo} className="headerImg" />
        </div>
        <PageText />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
