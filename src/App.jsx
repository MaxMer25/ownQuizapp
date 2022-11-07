import "./App.css";
import "./global.css";
import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import Header from "./components/Header/Header";
import HomeView from "./components/Navigation/screens/HomeView";
import Footer from "./components/Footer/Footer";
import BookmarkView from "./components/Navigation/screens/BookmarkView";
import FormView from "./components/Navigation/screens/FormView";
import ProfileView from "./components/Navigation/screens/ProfileView";

function App() {
  const [currentPage, setCurrentPage] = useState("");

  return (
    <div className="App wrapper">
      <Header />
      <main>
        {currentPage === "home" && <HomeView />}
        {currentPage === "bookmark" && <BookmarkView />}
        {currentPage === "form" && <FormView />}
        {currentPage === "profile" && <ProfileView />}
      </main>

      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
