import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

import Section from "../Section/Section";
import SectionTitle from "../Title/SectionTitle";
import Icon from "../Icon/Icon";
import Loader from "../Loader/Loader";

import "swiper/css";

import { SLIDER_BUTTON_TYPES } from "../../utils/constants";

import { useNewsItems } from "../../hooks/useNewsItems";

const News = () => {
  const { PREV, NEXT } = SLIDER_BUTTON_TYPES;

  const sliderRef = useRef();

  const { items = [], isLoading } = useNewsItems();

  const handleButtonClick = useCallback(
    (type) => {
      if (!sliderRef.current) return;

      const { swiper } = sliderRef.current;

      type === NEXT ? swiper.slideNext() : swiper.slidePrev();
    },
    [NEXT]
  );

  return (
    <Section className="news-section">
      <div className="container">
        <SectionTitle text="Новости" />
        {isLoading ? (
          <Loader />
        ) : (
          <Swiper
            ref={sliderRef}
            spaceBetween={24}
            slidesPerView={4}
            className="news"
            navigation
            modules={[Navigation]}
            breakpoints={{
              1366: {
                slidesPerView: 4,
              },
              720: {
                slidesPerView: 3,
              },
              360: {
                slidesPerView: 2,
              },
            }}
          >
            {items.map(({ title, sys: { id }, cover: { url } }, i) => (
              <SwiperSlide key={id}>
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  animateOut="fadeOutLeft"
                  delay={i * 100}
                >
                  <Link className="news-item" to={`/news/${id}`}>
                    <div className="news-item__img">
                      <img src={url} alt={title} />
                    </div>
                    <h3 className="news-item__title">{title}</h3>
                  </Link>
                </ScrollAnimation>
              </SwiperSlide>
            ))}
            <div className="navigation">
              <div
                className="navigation-button navigation-prev"
                onClick={() => handleButtonClick(PREV)}
              >
                <Icon name="slider-arrow" />
              </div>
              <div
                className="navigation-button navigation-next"
                onClick={() => handleButtonClick(NEXT)}
              >
                <Icon name="slider-arrow" />
              </div>
            </div>
          </Swiper>
        )}
      </div>
    </Section>
  );
};

export default News;
