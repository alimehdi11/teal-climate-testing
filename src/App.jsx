import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./index.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Products from "./Pages/Products";
import Pricing from "./Pages/Pricing";
import Contact from "./Pages/Contact";
import FaqPage from "./Pages/FaqPage";
import TermsConditions from "./Pages/TermsConditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Security from "./Pages/Security";
import Cookie from "./Pages/Cookie";
import Blogs from "./Pages/Blogs";
import SingleBlog from "./Pages/SingleBlog";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request-demo" element={<Contact />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/terms&conditions" element={<TermsConditions />} />
        <Route path="/privacy&policy" element={<PrivacyPolicy />} />
        <Route path="/securtiy" element={<Security />} />
        <Route path="/cookie" element={<Cookie />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/blog/:id" element={<SingleBlog />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
