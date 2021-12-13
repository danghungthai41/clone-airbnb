import React from "react";

export default function Categories() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="headline centered margin-top-75">
              Browse Categories
            </h3>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="categories-boxes-container margin-top-5 margin-bottom-30">
              {/* Box */}
              <a
                href="listings-list-with-sidebar.html"
                className="category-small-box"
              >
                <i className="im im-icon-Hamburger" />
                <h4>Eat &amp; Drink</h4>
                <span className="category-box-counter">12</span>
              </a>
              {/* Box */}
              <a
                href="listings-list-with-sidebar.html"
                className="category-small-box"
              >
                <i className="im  im-icon-Sleeping" />
                <h4>Hotels</h4>
                <span className="category-box-counter">32</span>
              </a>
              {/* Box */}
              <a
                href="listings-list-with-sidebar.html"
                className="category-small-box"
              >
                <i className="im im-icon-Shopping-Bag" />
                <h4>Shops</h4>
                <span className="category-box-counter">11</span>
              </a>
              {/* Box */}
              <a
                href="listings-list-with-sidebar.html"
                className="category-small-box"
              >
                <i className="im im-icon-Cocktail" />
                <h4>Nightlife</h4>
                <span className="category-box-counter">15</span>
              </a>
              {/* Box */}
              <a
                href="listings-list-with-sidebar.html"
                className="category-small-box"
              >
                <i className="im im-icon-Electric-Guitar" />
                <h4>Events</h4>
                <span className="category-box-counter">21</span>
              </a>
              {/* Box */}
              <a
                href="listings-list-with-sidebar.html"
                className="category-small-box"
              >
                <i className="im im-icon-Dumbbell" />
                <h4>Fitness</h4>
                <span className="category-box-counter">28</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
