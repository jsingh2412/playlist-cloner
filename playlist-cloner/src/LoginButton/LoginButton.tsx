import { Button, Typography } from "@mui/material";
import "./LoginButton.css";
import { useParams } from "react-router-dom";

const LoginButton = () => {
  const REDIRECT_URI = "http://localhost:3000/callback";
  const CLIENT_ID = "f4574d999eec4240b0b0179629b98841";
  const AUTH_PROVIDER = "https://accounts.spotify.com/authorize";

  return (
    <div className="container">
      <Typography paddingBottom="5px">
        To get started, sign in using Spotify below!
      </Typography>
      <Button
        href={`${AUTH_PROVIDER}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token`}
        color="secondary"
        size="large"
        variant="contained"
      >
        Login to Spotify!
      </Button>
    </div>
  );
};

export default LoginButton;
