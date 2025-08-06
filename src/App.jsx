import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListingPage from "./pages/ListingPage";
import ServiceCategoryDetail from "./pages/ServiceCategoryDetail";
import UserProfileDetail from "./pages/UserProfileDetail";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listing" element={<ListingPage />} />
        <Route
          path="/servicelisting-react/service-category/:slug"
          element={<ServiceCategoryDetail />}
        />
        <Route
          path="/servicelisting-react/user-profile/:userId"
          element={<UserProfileDetail />}
        />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
