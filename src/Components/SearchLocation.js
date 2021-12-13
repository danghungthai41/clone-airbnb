import React from "react";

export default function SearchLocation() {
  return (
    <div className="main-search-input">
      <div className="main-search-input-item location">
        <div id="autocomplete-container">
          <input id="autocomplete-input" type="text" placeholder="Location" />
        </div>
        <a href="#">
          <i className="fa fa-map-marker" />
        </a>
      </div>
      <button
        className="button"
        onclick="window.location.href='listings-half-screen-map-list.html'"
      >
        Search
      </button>
    </div>
  );
}
