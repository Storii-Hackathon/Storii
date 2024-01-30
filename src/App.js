import { useEffect, useState } from "react";

import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/public/HomePage";
import Dashboard from "./pages/protected/Dashboard";
import GenerateBook from "./pages/protected/GenerateBook";
import Pricing from "./pages/public/Pricing";
import Products from "./pages/public/Products";
import AboutUs from "./pages/public/AboutUs";
import StoryNav from "./pages/protected/StoryNav";
import GenerateBook1 from "./pages/protected/GenerateBook1";
import "./global.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/public/Navbar";
function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  const [isLoggedIn, setLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );

  const handleLogin = (status, username) => {
    setLoggedIn(status);
    setUsername(username); // Set the username
    localStorage.setItem("isLoggedIn", status.toString());
    localStorage.setItem("username", username); // Store the username in localStorage
  };

  const handleSignOut = () => {
    setLoggedIn(false);
    setUsername(""); // Clear the username
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username"); // Remove the username from localStorage
  };



  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/generate-book-2":
        title = "";
        metaDescription = "";
        break;
      case "/pricing":
        title = "";
        metaDescription = "";
        break;
      case "/products":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/story-nav":
        title = "";
        metaDescription = "";
        break;
      case "/generate-book-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);
  const noNavbarRoutes = ['/dashboard', '/generate-book', '/generate-book-2', '/story-nav', '/login', '/register'];

  return (
<>
{!noNavbarRoutes.includes(location.pathname) && (
    <Navbar isLoggedIn={isLoggedIn} onSignOut={handleSignOut} />
  )}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/generate-book-2" element={<GenerateBook />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/story-nav" element={<StoryNav />} />
      <Route path="/generate-book-1" element={<GenerateBook1 />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
    </Routes>
    </>
  );
}
export default App;
