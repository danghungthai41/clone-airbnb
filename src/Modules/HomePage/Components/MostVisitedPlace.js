import React from "react";

export default function MostVisitedPlace() {
  return (
   <section className="fullwidth margin-top-65 padding-top-75 padding-bottom-70" data-background-color="#f8f8f8">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h3 className="headline centered margin-bottom-45">
          <strong className="headline-with-separator">Most Visited Places</strong>
          <span>Discover Top-Rated Local Businesses</span>
        </h3>
      </div>
      <div className="col-md-12">
        <div className="simple-slick-carousel dots-nav">
          {/* Listing Item */}
          <div className="carousel-item">
            <a href="listings-single-page.html" className="listing-item-container">
              <div className="listing-item">
                <img src="images/listing-item-01.jpg" alt />
                <div className="listing-badge now-open">Now Open</div>
                <div className="listing-item-content">
                  <span className="tag">Eat &amp; Drink</span>
                  <h3>Tom's Restaurant <i className="verified-icon" /></h3>
                  <span>964 School Street, New York</span>
                </div>
                <span className="like-icon" />
              </div>
              <div className="star-rating" data-rating="3.5">
                <div className="rating-counter">(12 reviews)</div>
              </div>
            </a>
          </div>
          {/* Listing Item / End */}
          {/* Listing Item */}
          <div className="carousel-item">
            <a href="listings-single-page.html" className="listing-item-container">
              <div className="listing-item">
                <img src="images/listing-item-02.jpg" alt />
                <div className="listing-item-details">
                  <ul>
                    <li>Friday, August 10</li>
                  </ul>
                </div>
                <div className="listing-item-content">
                  <span className="tag">Events</span>
                  <h3>Sticky Band</h3>
                  <span>Bishop Avenue, New York</span>
                </div>
                <span className="like-icon" />
              </div>
              <div className="star-rating" data-rating={5.0}>
                <div className="rating-counter">(23 reviews)</div>
              </div>
            </a>
          </div>
          {/* Listing Item / End */}		
          {/* Listing Item */}
          <div className="carousel-item">
            <a href="listings-single-page.html" className="listing-item-container">
              <div className="listing-item">
                <img src="images/listing-item-03.jpg" alt />
                <div className="listing-item-details">
                  <ul>
                    <li>Starting from $59 per night</li>
                  </ul>
                </div>
                <div className="listing-item-content">
                  <span className="tag">Hotels</span>
                  <h3>Hotel Govendor</h3>
                  <span>778 Country Street, New York</span>
                </div>
                <span className="like-icon" />
              </div>
              <div className="star-rating" data-rating={2.0}>
                <div className="rating-counter">(17 reviews)</div>
              </div>
            </a>
          </div>
          {/* Listing Item / End */}
          {/* Listing Item */}
          <div className="carousel-item">
            <a href="listings-single-page.html" className="listing-item-container">
              <div className="listing-item">
                <img src="images/listing-item-04.jpg" alt />
                <div className="listing-badge now-open">Now Open</div>
                <div className="listing-item-content">
                  <span className="tag">Eat &amp; Drink</span>
                  <h3>Burger House <i className="verified-icon" /></h3>
                  <span>2726 Shinn Street, New York</span>
                </div>
                <span className="like-icon" />
              </div>
              <div className="star-rating" data-rating={5.0}>
                <div className="rating-counter">(31 reviews)</div>
              </div>
            </a>
          </div>
          {/* Listing Item / End */}
          {/* Listing Item */}
          <div className="carousel-item">
            <a href="listings-single-page.html" className="listing-item-container">
              <div className="listing-item">
                <img src="images/listing-item-05.jpg" alt />
                <div className="listing-item-content">
                  <span className="tag">Other</span>
                  <h3>Airport</h3>
                  <span>1512 Duncan Avenue, New York</span>
                </div>
                <span className="like-icon" />
              </div>
              <div className="star-rating" data-rating="3.5">
                <div className="rating-counter">(46 reviews)</div>
              </div>
            </a>
          </div>
          {/* Listing Item / End */}
          {/* Listing Item */}
          <div className="carousel-item">
            <a href="listings-single-page.html" className="listing-item-container">
              <div className="listing-item">
                <img src="images/listing-item-06.jpg" alt />
                <div className="listing-badge now-closed">Now Closed</div>
                <div className="listing-item-content">
                  <span className="tag">Eat &amp; Drink</span>
                  <h3>Think Coffee</h3>
                  <span>215 Terry Lane, New York</span>
                </div>
                <span className="like-icon" />
              </div>
              <div className="star-rating" data-rating="4.5">
                <div className="rating-counter">(15 reviews)</div>
              </div>
            </a>
          </div>
          {/* Listing Item / End */}
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
