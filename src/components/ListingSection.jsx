import React from 'react';

const restaurantListings = [
  {
    title: 'Chinese Sausage Restaurant',
    tag: 'Popular',
    tagClass: '',
    img: 'img/listing/list-1.jpg',
    icon: 'img/listing/list_icon-1.png',
    smallIcon: 'img/listing/list_small_icon-1.png',
    category: 'Restaurant',
    price: '$40 - $70',
    address: '236 Littleton St. New Philadelphia, Ohio, United States',
    phone: '(+12) 345-678-910',
    status: 'Open Now',
    statusClass: '',
  },
  {
    title: 'Shrimp floured and fried',
    tag: 'Top Rate',
    tagClass: 'top_rate',
    img: 'img/listing/list-2.jpg',
    icon: 'img/listing/list_icon-2.png',
    smallIcon: 'img/listing/list_small_icon-2.png',
    category: 'Food & Drink',
    price: '$40 - $70',
    address: '1012 Vesper Dr. Columbus, Georgia(GA), United States',
    phone: '(+12) 345-678-910',
    status: 'Closed',
    statusClass: 'closed',
  },
  {
    title: 'Crab fried with tamarind',
    tag: 'Popular',
    tagClass: '',
    img: 'img/listing/list-4.jpg',
    icon: 'img/listing/list_icon-4.png',
    smallIcon: 'img/listing/list_small_icon-3.png',
    category: 'Hotel',
    price: '$40 - $70',
    address: '14320 Keenes Mill Rd. Cottondale, Alabama(AL), United States',
    phone: '(+12) 345-678-910',
    status: 'Closed',
    statusClass: 'closed',
  },
  {
    title: 'Sweet and sour pork ribs',
    tag: 'Popular',
    tagClass: '',
    img: 'img/listing/list-3.jpg',
    icon: 'img/listing/list_icon-3.png',
    smallIcon: 'img/listing/list_small_icon-1.png',
    category: 'Restaurant',
    price: '$40 - $70',
    address: '251 Wiley St. Forks, Washington(WA), United States',
    phone: '(+12) 345-678-910',
    status: 'Open Now',
    statusClass: '',
  },
  {
    title: 'Tortoise grilled on salt',
    tag: 'Hot Deal',
    tagClass: 'hot_deal',
    img: 'img/listing/list-5.jpg',
    icon: 'img/listing/list_icon-5.png',
    smallIcon: 'img/listing/list_small_icon-4.png',
    category: 'Shopping',
    price: '$40 - $70',
    address: '236 Littleton St. New Philadelphia, Ohio, United States',
    phone: '(+12) 345-678-910',
    status: 'Open Now',
    statusClass: '',
  },
  {
    title: 'Fish cooked with fishsauce',
    tag: 'Popular',
    tagClass: '',
    img: 'img/listing/list-6.jpg',
    icon: 'img/listing/list_icon-6.png',
    smallIcon: 'img/listing/list_small_icon-3.png',
    category: 'Hotel',
    price: '$40 - $70',
    address: '2604 E Drachman St. Tucson, Arizona, United States',
    phone: '(+12) 345-678-910',
    status: 'Open Now',
    statusClass: '',
  },
];

const ListingSection = () => {
  return (
    <section className="listing">
      <div className="listing__text__top">
        <div className="listing__text__top__left">
          <h5>Restaurants</h5>
          <span>{restaurantListings.length} Results Found</span>
        </div>
        <div className="listing__text__top__right">
          Nearby <i className="fa fa-sort-amount-asc"></i>
        </div>
      </div>
      <div className="listing__list">
        {restaurantListings.map((item, index) => (
          <div className="listing__item" key={index}>
            <div
              className="listing__item__pic set-bg"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <img src={item.icon} alt="" />
              <div className={`listing__item__pic__tag ${item.tagClass}`}>{item.tag}</div>
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
                  <img src={item.smallIcon} alt="" />
                  <span>{item.category}</span>
                </div>
                <div className={`listing__item__text__info__right ${item.statusClass}`}>{item.status}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListingSection;
