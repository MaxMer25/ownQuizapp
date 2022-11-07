import Typography from "@mui/material/Typography";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Typography variant="contained" color="error">
            Top
          </Typography>
        </li>
        <li>
          <Typography variant="contained" color="error">
            Text
          </Typography>
        </li>
        <li>
          <Typography color="error">Bottom</Typography>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
