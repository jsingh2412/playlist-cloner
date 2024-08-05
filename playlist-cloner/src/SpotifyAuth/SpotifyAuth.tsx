import { CircularProgress, Typography } from "@mui/material";
import { redirect } from "react-router-dom";

const SpotifyAuth = () => {
  const hash = window.location.hash.substring(1);
  const params = new URLSearchParams(hash);
  const access_token = params.get("access_token") as string;
  const expiresIn = params.get("expires_in") as any;
  const expiryTime = new Date().getTime() + expiresIn * 1000;
  console.log(access_token, expiryTime);

  const token = window.localStorage.getItem("token");
  if (token) redirect("/dashboard");
  window.localStorage.setItem("token", access_token);
  window.localStorage.setItem("expirationTime", expiryTime.toString());

  return (
    <div className="container">
      <Typography fontSize="25px" paddingBottom="5px">
        REDIRECTING
      </Typography>
      <CircularProgress color="secondary" size="40px" />
    </div>
  );
};

export default SpotifyAuth;
