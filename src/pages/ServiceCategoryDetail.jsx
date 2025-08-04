import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import NewsLetterSection from "../components/NewsLetterSection";
import Footer from "../components/Footer";
import listingHeroImg from "../assets/img/listing/details/listing-hero.jpg";
import thumb1 from "../assets/img/listing/details/thumb-1.jpg";
import thumb2 from "../assets/img/listing/details/thumb-2.jpg";
import thumb3 from "../assets/img/listing/details/thumb-3.jpg";
import thumb4 from "../assets/img/listing/details/thumb-4.jpg";
import listing_detail from "../assets/img/listing/details/listing-details-1.jpg";
import ld_icon from "../assets/img/listing/details/ld-icon.png";
import service_icon from "../assets/img/listing/details/amenities/ame-8.png";
const thumbs = [thumb1, thumb2, thumb3, thumb4];
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ServiceCategoryDetail = () => {
  const { slug } = useParams();
  const [term, setTerm] = useState(null);
  const [acf, setAcf] = useState({});
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const termRes = await axios.get(
          `https://expertnext.demoserver.work/wp-json/wp/v2/service-category?slug=${slug}`
        );

        const currentTerm = termRes.data[0];
        
        if (!currentTerm) {
          throw new Error("No term found for this slug.");
        }
        setTerm(currentTerm);


        setAcf(currentTerm.acf);

        const providersRes = await axios.get(
          `https://expertnext.demoserver.work/wp-json/wp/v2/user-profile?service-category=${currentTerm.id}`
        );

        setProviders(providersRes.data);
        

        setLoading(false);
      } catch (err) {
        console.error("Error loading service category detail:", err);
        setLoading(false);
      }
    };

    fetchAll();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (!term) return <div>Category not found</div>;

  return (
    <>
     <Header />
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
                  <img src={ld_icon} alt="" />
                </div>
                <div className="listing__hero__text">
                  <h2>{term.name}</h2>
                  <p>
                    <span className="icon_pin_alt"></span> {term.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="listing__hero__btns">
                <a
                  href={`https://expertnext.demoserver.work/service-appointment-booking/?location_id=1&service_id=${acf?.service_id}&user_id=3`}
                  className="primary-btn"
                >
                  <i className="fa fa-calendar"></i> Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Listing Details Section */}
      <section className="listing-details spad">
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-8">
              <div className="listing__details__text">
                <div className="listing__details__about">
                  <h4>Overview</h4>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: term.description || "",
                    }}
                  />
                </div>

                <div className="listing__details__gallery">
                  <h4>Gallery</h4>
                  <div className="listing__details__gallery__pic">
                    <div className="listing__details__gallery__item">
                      <img
                        className="listing__details__gallery__item__large"
                        src={listing_detail}
                        alt="Listing detail"
                      />
                      <span>
                        <i className="fa fa-camera"></i> 170 Image
                      </span>
                    </div>

                    <Slider
                      {...{ dots: true, infinite: true, slidesToShow: 3 }}
                    >
                      {thumbs.map((src, i) => (
                        <div key={i}>
                          <img src={src} alt={`thumb-${i + 1}`} />
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>

                <div className="listing__details__amenities">
                  <h4>Services</h4>
                  <div className="row">
                    {acf.specific_services?.map((item, idx) => (
                      <div className="col-lg-3 col-md-3 col-6" key={idx}>
                        <div className="listing__details__amenities__item">
                          <img src={service_icon} alt="" />
                          <h6>{item.service_name}</h6>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-4">
              <div className="listing__sidebar__contact__text">
                <h4>Contact Information</h4>
                <ul>
                  <li>
                    <span className="icon_pin_alt"></span> 236 Littleton St.
                  </li>
                  <li>
                    <span className="icon_phone"></span> (+12) 345-678-910
                  </li>
                  <li>
                    <span className="icon_mail_alt"></span>{" "}
                    Info.colorlib@gmail.com
                  </li>
                </ul>
              </div>

              <div className="listing__sidebar__working__hours">
                <h4>Working Hours</h4>
                <ul>
                  {[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ].map((day, idx) => (
                    <li key={idx}>
                      {day}{" "}
                      <span>
                        {day === "Friday"
                          ? "Opening"
                          : day === "Sunday"
                          ? "Closed"
                          : "09:00 AM - 20:00 PM"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Providers */}
      <section className="service-providers">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="section-title">
                Available Service Provider Profiles
              </h3>
            </div>

            {providers.length > 0 ? (
              providers
              .filter((profile) => profile.acf?.user_id != 3) 
              .map((profile) => {
               
               
                return (
                  <div key={profile.id} className="col-lg-4 col-md-6">
                    <div className="provider-card">
                      <div className="provider-card__image">
                        <img
                          src={profile.acf_plus?.profile_image}
                          alt=""
                        />
                      </div>
                      <div className="provider-card__content">
                        <h5>{profile.title.rendered}</h5>
                        <p>
                          {profile.acf?.user_description
                            ?.split(" ")
                            .slice(0, 20)
                            .join(" ")}
                          ...
                        </p>
                        <Link to= {`/servicelisting-react/user-profile/${profile.acf?.user_id}`}
                          className="primary-btn small"
                        >
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-lg-12">
                <p>No service providers found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <NewsLetterSection />
      <Footer />
    </>
  );
};

export default ServiceCategoryDetail;
