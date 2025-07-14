import React from 'react';
import fl1 from '../assets/img/feature-location/fl-1.jpg';
import fl2 from '../assets/img/feature-location/fl-2.jpg';
import fl3 from '../assets/img/feature-location/fl-3.jpg';
import fl4 from '../assets/img/feature-location/fl-4.jpg';

const FeaturedLocations = () => {
  return (
    <section className="feature-location spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Top Featured Locations</h2>
              <p>Explore restaurants, bars, and cafés by locality</p>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Large Item on the Left */}
          <div className="col-lg-6">
            <a href="#" className="feature__location__item large-item" style={{ backgroundImage: `url(${fl1})` }}>
              <div className="feature__location__item__text">
                <h5>Washington, D.C</h5>
                <ul>
                  <li>2045 Listings</li>
                  <li>3648 Users</li>
                </ul>
              </div>
            </a>
          </div>

          {/* Right Column with Smaller Items */}
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <a href="#" className="feature__location__item" style={{ backgroundImage: `url(${fl2})` }}>
                  <div className="feature__location__item__text">
                    <h5>Chicago</h5>
                  </div>
                </a>
              </div>
              <div className="col-lg-6 col-md-6">
                <a href="#" className="feature__location__item" style={{ backgroundImage: `url(${fl3})` }}>
                  <div className="feature__location__item__text">
                    <h5>San Antonio</h5>
                  </div>
                </a>
              </div>
            </div>
            <a href="#" className="feature__location__item" style={{ backgroundImage: `url(${fl4})` }}>
              <div className="feature__location__item__text">
                <h5>Los Angeles</h5>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedLocations;
