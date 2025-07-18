import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import NewsLetterSection from "../components/NewsLetterSection";
import Footer from "../components/Footer";
import listingHeroImg from "../assets/img/listing/details/listing-hero.jpg";

const UserProfileDetail = () => {
  const { userId } = useParams();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (userId) {
      const fetchUserData = async () => {
        const token =
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L3NlcnZpY2VsaXN0aW5nLXJlYWN0IiwiaWF0IjoxNzUyNzUxODg1LCJuYmYiOjE3NTI3NTE4ODUsImV4cCI6MTc1MzM1NjY4NSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.ZoGEruNMa9pO94sGvoJVtPj_fwGGjPW4KSLNcf-5G3k";
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        try {
          const res = await axios.get(
            `http://localhost/servicelisting-react/wp-json/wp/v2/user-profile?acf.user_id=${userId}`,
            { headers }
          );

          console.log("Full response:", res);

          // Filter the matching user ID
          const matchedProfile = res.data.find(
            (item) => item.acf?.user_id == userId
          );

          if (matchedProfile) {
            console.log("Matched ACF fields:", matchedProfile.acf);
            setUserData(matchedProfile);
          } else {
            console.warn("No profile found for user ID:", userId);
          }
        } catch (error) {
          console.error("Error fetching user or ACF data:", error);
        }
      };

      fetchUserData();
    }
  }, [userId]);

  if (!userData) return <div>Loading...</div>;

  const {
    acf: {
      user_icon,
      user_name,
      user_id,
      user_location,
      user_description,
      background_image,
      user_portfolio_images,
      specific_services,
      user_phone,
      user_email,
      schedule,
    } = {},
  } = userData;

  return (
    <>
      {/* Hero Section */}
      <section
        className="listing-hero set-bg"
        style={{
          backgroundImage: `url(${listingHeroImg})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="listing__hero__option">
                <div className="listing__hero__icon">
                  <img src={userData.acf?.user_icon} alt="" />
                </div>
                <div className="listing__hero__text">
                  <h2>{userData.acf?.user_name}</h2>
                  <p>
                    <span className="icon_pin_alt"></span> {user_location}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="listing__hero__btns">
                <a
                  href={`/user-appointment-booking?user_id=${user_id}`}
                  className="primary-btn"
                >
                  <i className="fa fa-calendar"></i> Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="listing-details spad">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8">
              <div className="listing__details__text">
                {/* Overview */}
                <div className="listing__details__about">
                  <h4>Overview</h4>
                  <p>{user_description}</p>
                </div>

                {/* Gallery */}
                <div className="listing__details__gallery">
                  <h4>Gallery</h4>
                  <div className="listing__details__gallery__pic">
                    <div className="listing__details__gallery__item">
                      <img
                        className="listing__details__gallery__item__large"
                        src={background_image}
                        alt=""
                      />
                      <span>
                        <i className="fa fa-camera"></i>{" "}
                        {user_portfolio_images?.length || 0} Images
                      </span>
                    </div>

                    <div className="listing__details__gallery__slider owl-carousel">
                      {user_portfolio_images?.map((item, index) => (
                        <div key={index}>
                          <img src={item.portfolio_image} alt="" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div className="listing__details__amenities">
                  <h4>Services</h4>
                  <div className="row">
                    {specific_services?.map((service, index) => (
                      <div className="col-lg-3 col-md-3 col-6" key={index}>
                        <div className="listing__details__amenities__item">
                          <img
                            src="/wp-content/themes/your-theme/img/listing/details/amenities/ame-8.png"
                            alt=""
                          />
                          <h6>{service.service_name}</h6>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Comments */}
                <div className="listing__details__comment">
                  <h4>Comment</h4>
                  <p>
                    Comments will be integrated via WP API or third-party plugin
                    here.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="listing__sidebar">
                {/* Contact Info */}
                <div className="listing__sidebar__contact">
                  <div className="listing__sidebar__contact__text">
                    <h4>Contact Information</h4>
                    <ul>
                      <li>
                        <span className="icon_pin_alt"></span> {user_location}
                      </li>
                      <li>
                        <span className="icon_phone"></span> {user_phone}
                      </li>
                      <li>
                        <span className="icon_mail_alt"></span> {user_email}
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="listing__sidebar__working__hours">
                  <h4>Working Hours</h4>
                  {schedule && (
                    <p>
                      {schedule.day_of_week}
                      <br />
                      <span>
                        {schedule.time_from} - {schedule.time_to}
                      </span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsLetterSection />
      <Footer />
    </>
  );
};

export default UserProfileDetail;
