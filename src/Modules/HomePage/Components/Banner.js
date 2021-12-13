import React from "react";
import SearchLocation from "../../../Components/SearchLocation";

export default function Banner() {
  return (
    <div className="main-search-container dark-overlay">
      <div className="main-search-inner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Find Nearby Attractions</h2>
              <h4>Expolore top-rated attractions, activities and more</h4>
              <SearchLocation/>
            </div>
          </div>
        </div>
      </div>
      {/* Video */}
      <div className="video-container">
        <video poster="images/main-search-video-poster.jpg" loop autoPlay muted>
          <source src="images/main-search-video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
