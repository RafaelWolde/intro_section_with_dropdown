import React from "react";

import { brands } from "../../constants";

import bg_img_desktop from "../../assets/images/image-hero-desktop.png";
import bg_img_mobile from "../../assets/images/image-hero-mobile.png";

import "./hero.css";
function Hero() {
  function* Generator() {
    let current = 0;
    while (true) {
      yield "img-" + current++;
    }
  }
  let generator = Generator();

  return (
    <div className="hero app__hero">
      <div className="hero__info-container">
        <h1 className="hero__title">Make remote work</h1>
        <p className="hero__slogan">
          Get our team in sync, no matter your location Streaming processes.
          create team rituals, and watch productivity soar.
        </p>
        <button className="button button--primary">Learn more</button>
      </div>
      <div className="hero__brand-container">
        {brands.map((brand) => {
          return (
            <img
              key={generator.next().value}
              src={brand}
              alt="brand image"
              className="brand__img"
            />
          );
        })}
      </div>
      <div className="hero__bg-img-container">
        <picture>
          <source srcSet={bg_img_desktop} media="(min-width: 740px)" />
          <source srcSet={bg_img_mobile} media="(max-width: 740px)" />
          <img className="hero__background-img" alt="Background image" />
        </picture>
      </div>
    </div>
  );
}

export default Hero;
