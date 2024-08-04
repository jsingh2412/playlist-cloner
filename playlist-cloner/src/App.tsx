import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LoginButton from "./LoginButton/LoginButton";
import logo from "./logo.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Stack } from "@mui/material";
import SpotifyAuth from "./SpotifyAuth/SpotifyAuth";

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
            <Route path="/callback" element={<SpotifyAuth />} />
          </Routes>
        </Stack>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
