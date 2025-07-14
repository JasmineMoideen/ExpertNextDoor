import React, { useState } from "react";

const FilterSidebar = () => {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [radius, setRadius] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("$80");

  const [tags, setTags] = useState({
    coupon: false,
    sa: false,
    camping: false,
    hotSpots: false,
    internet: false,
    tr: false,
    hd: false,
  });

  const handleTagChange = (e) => {
    const { id, checked } = e.target;
    setTags((prev) => ({ ...prev, [id]: checked }));
  };

  const handleReset = () => {
    setSearchText("");
    setCategory("");
    setLocation("");
    setRadius("");
    setMinPrice("");
    setMaxPrice("$80");
    setTags({
      coupon: false,
      sa: false,
      camping: false,
      hotSpots: false,
      internet: false,
      tr: false,
      hd: false,
    });
  };

  return (
    <div className="filter">
      <div className="filter__title">
        <h5><i className="fa fa-filter"></i> Filter</h5>
      </div>

      <div className="filter__search">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className="filter__select">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          {/* Add more categories as needed */}
        </select>
      </div>

      <div className="filter__location">
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <i className="fa fa-map-marker"></i>
      </div>

      <div className="filter__radius">
        <p>Radius:</p>
        <div className="range-slider">
          <input
            type="text"
            id="radius"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
          />
        </div>
      </div>

      <div className="filter__price">
        <p>Price:</p>
        <div className="range-slider">
          <div className="price-input">
            <input
              type="text"
              id="minamount"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
              type="text"
              id="maxamount"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="filter__tags">
        <h6>Tag</h6>
        {[
          { id: "coupon", label: "Coupons" },
          { id: "sa", label: "Smoking Allowed" },
          { id: "camping", label: "Camping" },
          { id: "hotSpots", label: "Hot Spots" },
          { id: "internet", label: "Internet" },
          { id: "tr", label: "Top Rated" },
          { id: "hd", label: "Hot Deal" },
        ].map((tag) => (
          <label key={tag.id} htmlFor={tag.id}>
            {tag.label}
            <input
              type="checkbox"
              id={tag.id}
              checked={tags[tag.id]}
              onChange={handleTagChange}
            />
            <span className="checkmark"></span>
          </label>
        ))}
      </div>

      <div className="filter__btns">
        <button type="button">Filter Results</button>
        <button
          type="button"
          className="filter__reset"
          onClick={handleReset}
        >
          Reset All
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
