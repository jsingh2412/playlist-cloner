import { Box } from "@mui/material";
import logo from "../PC-removebg-preview.png";
import "./header.css";

const Header = () => {
  return (
    <Box className="header">
      <img src={logo} className="headerImg" />
    </Box>
  );
};

export default Header;
