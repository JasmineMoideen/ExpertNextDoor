import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import { Link } from "react-router-dom";

import heroBg from "../assets/img/hero/hero-bg.jpg";
import cat1 from "../assets/img/hero/cat-1.png";
import cat2 from "../assets/img/hero/cat-2.png";
import cat3 from "../assets/img/hero/cat-3.png";
import cat4 from "../assets/img/hero/cat-4.png";
import cat5 from "../assets/img/hero/cat-5.png";
import cat6 from "../assets/img/hero/cat-6.png";

const categoryOptions = [
  { value: "", label: "Choose Categories" },
  { value: "restaurant", label: "Restaurant" },
  { value: "shopping", label: "Shopping" },
  { value: "beauty", label: "Beauty" },
  { value: "hotels", label: "Hotels" },
  { value: "services", label: "Services" },
];

const locationOptions = [
  { value: "", label: "Choose Location" },
  { value: "new-york", label: "New York" },
  { value: "los-angeles", label: "Los Angeles" },
  { value: "chicago", label: "Chicago" },
  { value: "houston", label: "Houston" },
  { value: "miami", label: "Miami" },
];

const HeroSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [serviceCategories, setServiceCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/servicelisting/wp-json/wp/v2/service-category")
      .then((res) => setServiceCategories(res.data))
      .catch((err) => console.error("Error fetching categories", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search Submitted:", {
      category: selectedCategory?.value,
      location: selectedLocation?.value,
    });
    // You can handle your search logic here
  };

  return (
    <section
      className="hero set-bg"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="hero__text">
              <div className="section-title">
                <h2>Discover The Best Services Near You</h2>
                <p>1.118.940.376 The best service package is waiting for you</p>
              </div>
              <div className="hero__search__form">
                <form onSubmit={handleSubmit}>
                  <input type="text" placeholder="Search..." />
                  <div className="select__option">
                    <Select
                      options={categoryOptions}
                      value={selectedCategory}
                      onChange={setSelectedCategory}
                      placeholder="Choose Categories"
                      classNamePrefix="react-select"
                      styles={{
                        control: (base) => ({
                          ...base,
                          minHeight: "54px",
                          height: "54px",
                        }),
                        indicatorsContainer: (base) => ({
                          ...base,
                          height: "45px",
                        }),
                        valueContainer: (base) => ({
                          ...base,
                          height: "45px",
                          padding: "0 8px",
                        }),
                        input: (base) => ({
                          ...base,
                          margin: "0px",
                          padding: "0px",
                        }),
                      }}
                    />
                  </div>
                  <div className="select__option">
                    <Select
                      options={locationOptions}
                      value={selectedLocation}
                      onChange={setSelectedLocation}
                      placeholder="Choose Location"
                      classNamePrefix="react-select"
                      styles={{
                        control: (base) => ({
                          ...base,
                          minHeight: "54px",
                          height: "54px",
                        }),
                        indicatorsContainer: (base) => ({
                          ...base,
                          height: "45px",
                        }),
                        valueContainer: (base) => ({
                          ...base,
                          height: "45px",
                          padding: "0 8px",
                        }),
                        input: (base) => ({
                          ...base,
                          margin: "0px",
                          padding: "0px",
                        }),
                      }}
                    />
                  </div>
                  <button type="submit">Explore Now</button>
                </form>
              </div>

              <ul className="hero__categories__tags">
                {serviceCategories.map((cat) => {
                 

                  return (
                    <li key={cat.id}>
                      <Link to={`/servicelisting/service-category/${cat.slug}`}>
                        <img
                          src={cat.acf?.service_category_image}
                          alt={cat.name}
                        />
                        {cat.name}
                       </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
