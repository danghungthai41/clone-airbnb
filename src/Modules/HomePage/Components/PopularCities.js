import React from "react";

export default function PopularCities() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3 className="headline centered margin-bottom-35 margin-top-70">
            Popular Cities <span>Browse listings in popular places</span>
          </h3>
        </div>
        <div className="col-md-4">
          {/* Image Box */}
          <a
            href="listings-list-with-sidebar.html"
            className="img-box"
            data-background-image="images/popular-location-01.jpg"
          >
            <div className="img-box-content visible">
              <h4>New York </h4>
              <span>14 Listings</span>
            </div>
          </a>
        </div>
        <div className="col-md-8">
          {/* Image Box */}
          <a
            href="listings-list-with-sidebar.html"
            className="img-box"
            data-background-image="images/popular-location-02.jpg"
          >
            <div className="img-box-content visible">
              <h4>Los Angeles</h4>
              <span>24 Listings</span>
            </div>
          </a>
        </div>
        <div className="col-md-8">
          {/* Image Box */}
          <a
            href="listings-list-with-sidebar.html"
            className="img-box"
            data-background-image="images/popular-location-03.jpg"
          >
            <div className="img-box-content visible">
              <h4>San Francisco </h4>
              <span>12 Listings</span>
            </div>
          </a>
        </div>
        <div className="col-md-4">
          {/* Image Box */}
          <a
            href="listings-list-with-sidebar.html"
            className="img-box"
            data-background-image="images/popular-location-04.jpg"
          >
            <div className="img-box-content visible">
              <h4>Miami</h4>
              <span>9 Listings</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
