import React from "react";

import data from "../../utils/slider.json";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residences.css";
const Residences = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-contanier">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          breakpoints={{
            480: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            750: { slidesPerView: 3 },
            1100: { slidesPerView :4},
          }}
        >
        <SliderButtons />
          {data.map((card, i) => {
            const { detail, image, name, price } = card;
            return (
              <SwiperSlide key={i}>
                <div className="flexColStart r-card">
                  <img src={image} alt="" />
                  <span className="secondaryText r-price">
                    <span style={{ color: "orangered" }}>$</span>
                    <span>{price}</span>
                  </span>

                  <span className="primaryText">{name}</span>
                  <span className="secondaryText">{detail}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Residences;
const SliderButtons = ()=>{
    const swiper = useSwiper()
    return (
      <div className="flexCenter r-button">
        <button className="" onClick={() => swiper.slidePrev()}>
          &lt;
        </button>
        <button className="" onClick={() => swiper.slideNext()}>
          &gt;
        </button>
      </div>
    );
}
