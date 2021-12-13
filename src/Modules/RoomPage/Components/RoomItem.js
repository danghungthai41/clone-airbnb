import React from 'react'

export default function RoomItem() {
    return (
        <div className="col-lg-12 col-md-12">
        <div
          className="listing-item-container list-layout"
          data-marker-id={2}
        >
          <a
            href="listings-single-page.html"
            className="listing-item"
          >
            {/* Image */}
            <div className="listing-item-image">
              <img src="images/listing-item-02.jpg" alt />
              <span className="tag">Events</span>
            </div>
            {/* Content */}
            <div className="listing-item-content">
              <div className="listing-item-inner">
                <h3>Sticky Band</h3>
                <span>Bishop Avenue, New York</span>
                <div className="star-rating" data-rating={5.0}>
                  <div className="rating-counter">(23 reviews)</div>
                </div>
              </div>
              <span className="like-icon" />
              <div className="listing-item-details">
                Friday, August 10
              </div>
            </div>
          </a>
        </div>
      </div>
    )
}
