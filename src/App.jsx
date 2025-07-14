import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListingPage from "./pages/ListingPage";
import ServiceCategoryDetail from "./pages/ServiceCategoryDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listing" element={<ListingPage />} />
        <Route
          path="/servicelisting/service-category/:slug"
          element={<ServiceCategoryDetail />}
        />
      </Routes>
    </Router>
  );
}

export default App;
