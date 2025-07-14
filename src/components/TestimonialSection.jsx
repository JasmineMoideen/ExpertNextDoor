import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import author1 from '../assets/img/testimonial/author-1.png';
import author2 from '../assets/img/testimonial/author-2.png';
import author3 from '../assets/img/testimonial/author-3.png';
import testimonialBg from '../assets/img/testimonial/testimonial-bg.jpg';

const testimonials = [
  {
    id: 1,
    text: `"We worked with Consultant. Our representative was very knowledgeable and helpful. Consultant made a number of suggestions to help improve our systems. Consultant explained how things work and why it would help."`,
    authors: [author3, author1, author2],
    activeAuthor: author1,
  },
  {
    id: 2,
    text: `"We worked with Consultant. Our representative was very knowledgeable and helpful. Consultant made a number of suggestions to help improve our systems. Consultant explained how things work and why it would help."`,
    authors: [author1, author2, author3],
    activeAuthor: author2,
  },
  {
    id: 3,
    text: `"We worked with Consultant. Our representative was very knowledgeable and helpful. Consultant made a number of suggestions to help improve our systems. Consultant explained how things work and why it would help."`,
    authors: [author2, author3, author1],
    activeAuthor: author3,
  },
];

const TestimonialSection = () => {
  return (
    <section
      className="testimonial spad set-bg"
      style={{ backgroundImage: `url(${testimonialBg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Trusted By Over 5000+ Users</h2>
              <p>What people say about us</p>
            </div>

            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="testimonial__item">
                    <p>{item.text}</p>

                    <div className="testimonial__item__author">
                      {item.authors.map((img, i) => (
                        <a key={i} href="#!">
                          <img
                            src={img}
                            alt="author"
                            className={img === item.activeAuthor ? 'active' : ''}
                          />
                        </a>
                      ))}
                    </div>

                    <div className="testimonial__item__author__text">
                      <h5>John Smith -</h5>
                      <div className="testimonial__item__author__rating">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fa fa-star" />
                        ))}
                      </div>
                    </div>
                    <span>CEO Colorlib</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
