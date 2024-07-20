import React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header/Header";

function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <div className="container">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
