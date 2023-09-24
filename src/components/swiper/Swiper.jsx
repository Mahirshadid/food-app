import React from "react";
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./swiper.css";

import i1 from '../../assets/products/1.jpg'
import i2 from '../../assets/products/2.jpg'
import i3 from '../../assets/products/3.jpg'
import i4 from '../../assets/products/4.jpg'
import i5 from '../../assets/products/5.jpg'
import i6 from '../../assets/products/6.jpg'
import i7 from '../../assets/products/7.jpg'
import i8 from '../../assets/products/8.jpg'
import i9 from '../../assets/products/9.jpg'
import i10 from '../../assets/products/10.jpg'

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const slideData = [
  {
    image: i1,
    price: "Prawn Rice - BDT 220", 
  },
  {
    image: i2,
    price: "Custard Fruits - BDT 340", 
  },
  {
    image: i3,
    price: "Chicken Veg - BDT 200", 
  },
  {
    image: i4,
    price: "Egg Salad - BDT 120", 
  },
  {
    image: i5,
    price: "Beef Bacon - BDT 390", 
  },
  {
    image: i6,
    price: "Chilli Chicken - BDT 220", 
  },
  {
    image: i7,
    price: "Chowmein - BDT 160", 
  },
  {
    image: i8,
    price: "Baked Fish - BDT 130", 
  },
  {
    image: i9,
    price: "Chicken Salad - BDT 110", 
  },
  {
    image: i10,
    price: "Breakfast/Snacks - BDT 100",
  }
];

const Swiping = () => {
  return (
    <div className="swiper-container">
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        pagination={false}
        className="mySwiper"
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {slideData.map((slide, i) => {
          return (
            <SwiperSlide key={i} className="swiper-slide">
              <img src={slide.image} alt="" />
              <div className="price-tag">{slide.price}</div> {/* Add price tag */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Swiping;