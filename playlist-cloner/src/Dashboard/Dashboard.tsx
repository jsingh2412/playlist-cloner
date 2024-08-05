import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { redirect } from "react-router-dom";

const Dashboard = () => {
  const [displayPrompt, setDisplayPrompt] = useState(true);

  useEffect(() => {
    const checkTokenExpiry = () => {
      const expiryTime = localStorage.getItem("spotify_token_expiry");
      if (expiryTime) {
        const expiresInMs = parseInt(expiryTime) - new Date().getTime();
        console.log(expiresInMs);
        if (expiresInMs <= 0) {
          setDisplayPrompt(true);
          setTimeout(() => redirect("/"), 5000);
        } else {
          setTimeout(checkTokenExpiry, expiresInMs);
        }
      } else {
        redirect("/");
      }
    };

    checkTokenExpiry();
  }, []);

  return (
    <div className="container">
      <Dialog color="error" maxWidth="md" open={displayPrompt}>
        <DialogTitle>Login Expired</DialogTitle>
        <DialogContent>
          <Typography>Redirecting to Login Page in 5 seconds.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => redirect("/")}>Redirect Now</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Dashboard;
