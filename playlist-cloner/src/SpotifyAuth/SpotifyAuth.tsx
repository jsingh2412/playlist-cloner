import { CircularProgress, Typography } from "@mui/material";

const SpotifyAuth = () => {
  let access_token = window.location.hash.substring(1);
  access_token = access_token.slice(
    access_token.indexOf("=") + 1,
    access_token.indexOf("&")
  );
  console.log(access_token);
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
