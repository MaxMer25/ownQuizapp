import Navigation from "../Navigation/Navigation";
import AppBar from "@mui/material/AppBar";

function Header() {
  return (
    <AppBar id="header">
      <h1>Ultra Quiz App</h1>

      <Navigation />
    </AppBar>
  );
}

export default Header;
