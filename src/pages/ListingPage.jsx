import React from "react";
import ListingHeader from "../components/ListingHeader";
import FilterSidebar from "../components/FilterSidebar";
import ListingSection from "../components/ListingSection";
import MapSection from "../components/MapSection";

const ListingPage = () => {
  return (
    <>
      <div className="ov-hid">
        <ListingHeader />
        <FilterSidebar />
        <ListingSection />
        <MapSection />
      </div>
    </>
  );
};

export default ListingPage;
