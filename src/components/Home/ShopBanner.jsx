import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

import Section from "../Section/Section";

import logo from "../../images/oxxxyshop.webp";
import bannerImg from "../../images/banner.webp";

const ShopBanner = () => (
  <Section className="shop-banner__section">
    <div className="container">
      <div className="shop-banner__wrapper">
        <Link to="/shop" className="shop-banner">
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOut="fadeOutLeft"
            className="shop-banner__text"
          >
            <p className="shop-banner__subtitle">
              ОБНОВЛЕННЫЙ МЕРЧ ОТ ОКСИМИРОНА
            </p>
            <p className="shop-banner__title">OXXXYSHOP 2.0</p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInRight"
            animateOut="fadeOutRight"
            className="shop-banner__logo"
          >
            <img src={logo} alt="oxxxyshop" className="shop-logo" />
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInRight"
            animateOut="fadeOutRight"
            className="shop-banner__image"
          >
            <img src={bannerImg} alt="oxxxymiron" />
          </ScrollAnimation>
        </Link>
      </div>
    </div>
  </Section>
);

export default ShopBanner;
