import React from "react";

export default function FlipBanner() {
  return (
    <a
      href="listings-half-screen-map-list.html"
      className="flip-banner parallax margin-top-65"
      data-background="images/slider-bg-02.jpg"
      data-color="#f91942"
      data-color-opacity="0.85"
      data-img-width={2500}
      data-img-height={1666}
    >
      <div className="flip-banner-content">
        <h2 className="flip-visible">Expolore top-rated attractions nearby</h2>
        <h2 className="flip-hidden">
          Browse Listings <i className="sl sl-icon-arrow-right" />
        </h2>
      </div>
    </a>
  );
}
