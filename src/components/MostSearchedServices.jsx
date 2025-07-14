import React, { useState } from 'react';
import list5 from '../assets/img/listing/list-5.jpg';
import icon5 from '../assets/img/listing/list_icon-5.png';
import smallIcon4 from '../assets/img/listing/list_small_icon-4.png';

import list1 from '../assets/img/listing/list-1.jpg';
import icon1 from '../assets/img/listing/list_icon-1.png';
import smallIcon1 from '../assets/img/listing/list_small_icon-1.png';

import list3 from '../assets/img/listing/list-3.jpg';
import icon3 from '../assets/img/listing/list_icon-3.png';


const tabData = [
    {
      id: 'tabs-1',
      label: 'Restaurent',
      icon: 'flaticon-039-fork',
      listings: [
        {
          img: list5,
          icon: icon5,
          tag: 'Hot Deal',
          title: 'Tortoise grilled on salt',
          price: '$40 - $70',
          address: '236 Littleton St. New Philadelphia, Ohio, United States',
          phone: '(+12) 345-678-910',
          categoryIcon: smallIcon4,
          category: 'Shopping',
          status: 'Open Now',
        },
      ],
    },
    {
      id: 'tabs-2',
      label: 'Shopping',
      icon: 'flaticon-030-kebab',
      listings: [
        {
          img: list1,
          icon: icon1,
          tag: 'Popular',
          title: 'Chinese Sausage Restaurant',
          price: '$40 - $70',
          address: '236 Littleton St. New Philadelphia, Ohio, United States',
          phone: '(+12) 345-678-910',
          categoryIcon: smallIcon1,
          category: 'Restaurant',
          status: 'Open Now',
        },
      ],
    },
    {
      id: 'tabs-3',
      label: 'Travel',
      icon: 'flaticon-032-food-truck',
      listings: [
        {
          img: list3,
          icon: icon3,
          tag: 'Popular',
          title: 'Sweet and sour pork ribs',
          price: '$40 - $70',
          address: '251 Wiley St. Forks, Washington(WA), United States',
          phone: '(+12) 345-678-910',
          categoryIcon: smallIcon1,
          category: 'Restaurant',
          status: 'Open Now',
        },
      ],
    },
  ];

  
  const MostSearchedServices = () => {
    const [activeTab, setActiveTab] = useState('tabs-1');
  
    return (
      <section className="most-search spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>The Most Searched Services</h2>
                <p>
                  Travelocity empowers travelers who are giving back on their
                  trips in ways big and small
                </p>
              </div>
            </div>
          </div>
  
          <div className="row">
            <div className="col-lg-12">
              <div className="most__search__tab">
                <ul className="nav nav-tabs" role="tablist">
                  {tabData.map((tab) => (
                    <li className="nav-item" key={tab.id}>
                      <button
                        className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        <span className={tab.icon}></span>
                        {tab.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
  
              <div className="tab-content">
                {tabData.map((tab) => (
                  <div
                    key={tab.id}
                    className={`tab-pane ${activeTab === tab.id ? 'active' : ''}`}
                    role="tabpanel"
                  >
                    <div className="row">
                      {tab.listings.map((item, idx) => (
                        <div className="col-lg-4 col-md-6" key={idx}>
                          <div className="listing__item">
                            <div
                              className="listing__item__pic set-bg"
                              style={{ backgroundImage: `url(${item.img})` }}
                            >
                              <img src={item.icon} alt="" />
                              <div className="listing__item__pic__tag">{item.tag}</div>
                              <div className="listing__item__pic__btns">
                                <a href="#"><span className="icon_zoom-in_alt"></span></a>
                                <a href="#"><span className="icon_heart_alt"></span></a>
                              </div>
                            </div>
                            <div className="listing__item__text">
                              <div className="listing__item__text__inside">
                                <h5>{item.title}</h5>
                                <div className="listing__item__text__rating">
                                  <div className="listing__item__rating__star">
                                    <span className="icon_star"></span>
                                    <span className="icon_star"></span>
                                    <span className="icon_star"></span>
                                    <span className="icon_star"></span>
                                    <span className="icon_star-half_alt"></span>
                                  </div>
                                  <h6>{item.price}</h6>
                                </div>
                                <ul>
                                  <li><span className="icon_pin_alt"></span> {item.address}</li>
                                  <li><span className="icon_phone"></span> {item.phone}</li>
                                </ul>
                              </div>
                              <div className="listing__item__text__info">
                                <div className="listing__item__text__info__left">
                                  <img src={item.categoryIcon} alt="" />
                                  <span>{item.category}</span>
                                </div>
                                <div className="listing__item__text__info__right">{item.status}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
  
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default MostSearchedServices;
  
