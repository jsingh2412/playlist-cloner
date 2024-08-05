import "./App.css";
import logo from "./logo.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Stack } from "@mui/material";
import LoginButton from "./LoginButton/LoginButton";
import SpotifyAuth from "./SpotifyAuth/SpotifyAuth";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <ThemeProvider theme={createTheme({ palette: { mode: "dark" } })}>
      <BrowserRouter>
        <Stack flexDirection="column" className="container">
          <div className="header">
            <img src={logo} className="headerImg" />
          </div>
          <Routes>
            <Route path="/" element={<LoginButton />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/callback" element={<SpotifyAuth />} />
          </Routes>
        </Stack>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
