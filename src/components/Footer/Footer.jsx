import "./Footer.css";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Footer({ currentPage, setCurrentPage }) {
  return (
    <footer className="footerContainer">
      <div
        onClick={() => setCurrentPage("home")}
        className={
          currentPage === "home" ? "highlighted imgContainer" : "imgContainer"
        }
      >
        <HomeIcon sx={{ fontSize: 80, color: "salmon" }} />
      </div>

      <div
        onClick={() => setCurrentPage("bookmark")}
        className={
          currentPage === "bookmark"
            ? "highlighted imgContainer"
            : "imgContainer"
        }
      >
        <BookmarkIcon sx={{ fontSize: 80, color: "salmon" }} />
      </div>
      <div
        onClick={() => setCurrentPage("form")}
        className={
          currentPage === "form" ? "highlighted imgContainer" : "imgContainer"
        }
      >
        <AddCircleIcon sx={{ fontSize: 80, color: "salmon" }} />
      </div>
      <div
        onClick={() => setCurrentPage("profile")}
        className={
          currentPage === "profile"
            ? "highlighted imgContainer"
            : "imgContainer"
        }
      >
        <AccountCircleIcon sx={{ fontSize: 80, color: "salmon" }} />
      </div>
    </footer>
  );
}

export default Footer;
