import React, { useEffect } from "react";

// Component imports
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import PopularCategories from "../components/PopularCategories";
import MostSearchedServices from "../components/MostSearchedServices";
import HowItWorks from "../components/HowItWorks";
import FeaturedLocations from "../components/FeaturedLocations";
import TestimonialSection from "../components/TestimonialSection";
import NewsPostSection from "../components/NewsPostSection";
import NewsLetterSection from "../components/NewsLetterSection";
import Footer from "../components/Footer";


const HomePage = () => {
 

  return (
    <>
      <Header />
      <HeroSection />
      <PopularCategories />
      <MostSearchedServices />
      <HowItWorks />
      <FeaturedLocations />
      <TestimonialSection />
      <NewsPostSection />
      <NewsLetterSection />
      <Footer />
    </>
  );
};

export default HomePage;
