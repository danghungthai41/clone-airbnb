import React from 'react'

import RoomItem from './RoomItem'

export default function RoomList() {
    return (
        <section className="listings-container margin-top-30">
        {/* Sorting / Layout Switcher */}
        <div className="row fs-switcher">
          <div className="col-md-6">
            {/* Showing Results */}
            <p className="showing-results">14 Results Found </p>
          </div>
        </div>
        {/* Listings */}
        <div className="row fs-listings">
          {/* Listing Item */}
           <RoomItem/>
           <RoomItem/>
           <RoomItem/>
           <RoomItem/>
           <RoomItem/>

          {/* Listing Item / End */}
        </div>
        {/* Listings Container / End */}
        {/* Pagination Container */}
        <div className="row fs-listings">
          <div className="col-md-12">
            {/* Pagination */}
            <div className="clearfix" />
            <div className="row">
              <div className="col-md-12">
                {/* Pagination */}
                <div className="pagination-container margin-top-15 margin-bottom-40">
                  <nav className="pagination">
                    <ul>
                      <li>
                        <a href="#" className="current-page">
                          1
                        </a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="sl sl-icon-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="clearfix" />
            {/* Pagination / End */}
            {/* Copyrights */}
            <div className="copyrights margin-top-0">
              © 2021 Listeo. All Rights Reserved.
            </div>
          </div>
        </div>
        {/* Pagination Container / End */}
      </section>
    )
}
