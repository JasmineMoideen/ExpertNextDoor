import React from "react";


const MapSection = () => {
  return (
    <div className="listing__map">
      <iframe
        title="Los Angeles Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423283.43556031643!2d-118.69192431097179!3d34.020730495817475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1586670019340!5m2!1sen!2sbd"
        style={{ border: 0, width: "100%", height: "400px" }}
        allowFullScreen=""
        loading="lazy"
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
};

export default MapSection;
