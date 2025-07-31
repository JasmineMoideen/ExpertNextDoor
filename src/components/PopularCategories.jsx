import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PopularCategories = () => {
  const [serviceCategories, setServiceCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/servicelisting-react/wp-json/wp/v2/service-category")
      .then((res) => setServiceCategories(res.data))
      .catch((err) => console.error("Error fetching categories", err));
  }, []);

  return (
    <section className="categories spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Most Popular Categories</h2>
              <p>
                Travelocity empowers travelers who are giving back on their
                trips in ways big and small
              </p>
            </div>
            <div className="categories__item__list">
              {serviceCategories.map((category, index) => (
                <div className="categories__item" key={index}>
                  <img
                    src={
                   
                      category.acf_plus?.['service_category_image'] 
                    }
                    alt={category.name}
                  />
                  <h5>{category.name}</h5>
                  <span>{category.count} Listings</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
