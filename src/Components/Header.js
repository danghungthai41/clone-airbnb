import React from 'react'

export default function Header() {
  return (
    <header id="header-container">
    {/* Header */}
    <div id="header">
      <div className="container">
        {/* Left Side Content */}
        <div className="left-side">
          {/* Logo */}
          <div id="logo">
            <a href="index.html"><img src="images/logo.png" alt /></a>
          </div>
          {/* Mobile Navigation */}
          <div className="mmenu-trigger">
            <button className="hamburger hamburger--collapse" type="button">
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </div>
          {/* Main Navigation */}
          <nav id="navigation" className="style-1">
            <ul id="responsive">
              <li><a className="current" href="#">Home</a>
                <ul>
                  <li><a href="index.html">Home 1 (Modern)</a></li>
                  <li><a href="index-2.html">Home 2 (Default)</a></li>
                  <li><a href="index-3.html">Home 3 (Airbnb)</a></li>
                  <li><a href="index-4.html">Home 4 (Creative)</a></li>
                  <li><a href="index-5.html">Home 5 (Slider)</a></li>
                  <li><a href="index-6.html">Home 6 (Map)</a></li>
                  <li><a href="index-7.html">Home 7 (Video)</a></li>
                  <li><a href="index-8.html">Home 8 (Classic)</a></li>
                </ul>
              </li>
              <li><a href="#">Listings</a>
                <ul>
                  <li><a href="#">List Layout</a>
                    <ul>
                      <li><a href="listings-list-with-sidebar.html">With Sidebar</a></li>
                      <li><a href="listings-list-full-width.html">Full Width</a></li>
                      <li><a href="listings-list-full-width-with-map.html">Full Width + Map</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Grid Layout</a>
                    <ul>
                      <li><a href="listings-grid-with-sidebar-1.html">With Sidebar 1</a></li>
                      <li><a href="listings-grid-with-sidebar-2.html">With Sidebar 2</a></li>
                      <li><a href="listings-grid-full-width.html">Full Width</a></li>
                      <li><a href="listings-grid-full-width-with-map.html">Full Width + Map</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Half Screen Map</a>
                    <ul>
                      <li><a href="listings-half-screen-map-list.html">List Layout</a></li>
                      <li><a href="listings-half-screen-map-grid-1.html">Grid Layout 1</a></li>
                      <li><a href="listings-half-screen-map-grid-2.html">Grid Layout 2</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Single Listings</a>
                    <ul>
                      <li><a href="listings-single-page.html">Single Listing 1</a></li>
                      <li><a href="listings-single-page-2.html">Single Listing 2</a></li>
                      <li><a href="listings-single-page-3.html">Single Listing 3</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Open Street Map</a>
                    <ul>
                      <li><a href="listings-half-screen-map-list-OpenStreetMap.html">Half Screen Map List Layout</a></li>
                      <li><a href="listings-half-screen-map-grid-1-OpenStreetMap.html">Half Screen Map Grid Layout 1</a></li>
                      <li><a href="listings-half-screen-map-grid-2-OpenStreetMap.html">Half Screen Map Grid Layout 2</a></li>
                      <li><a href="listings-list-full-width-with-map-OpenStreetMap.html">Full Width List</a></li>
                      <li><a href="listings-grid-full-width-with-map-OpenStreetMap.html">Full Width Grid</a></li>
                      <li><a href="listings-single-page-OpenStreetMap.html">Single Listing</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="#">User Panel</a>
                <ul>
                  <li><a href="dashboard.html">Dashboard</a></li>
                  <li><a href="dashboard-messages.html">Messages</a></li>
                  <li><a href="dashboard-bookings.html">Bookings</a></li>
                  <li><a href="dashboard-wallet.html">Wallet</a></li>
                  <li><a href="dashboard-my-listings.html">My Listings</a></li>
                  <li><a href="dashboard-reviews.html">Reviews</a></li>
                  <li><a href="dashboard-bookmarks.html">Bookmarks</a></li>
                  <li><a href="dashboard-add-listing.html">Add Listing</a></li>
                  <li><a href="dashboard-my-profile.html">My Profile</a></li>
                  <li><a href="dashboard-invoice.html">Invoice</a></li>
                </ul>
              </li>
              <li><a href="#">Pages</a>
                <div className="mega-menu mobile-styles three-columns">
                  <div className="mega-menu-section">
                    <ul>
                      <li className="mega-menu-headline">Pages #1</li>
                      <li><a href="pages-user-profile.html"><i className="sl sl-icon-user" /> User Profile</a></li>
                      <li><a href="pages-booking.html"><i className="sl sl-icon-check" /> Booking Page</a></li>
                      <li><a href="pages-add-listing.html"><i className="sl sl-icon-plus" /> Add Listing</a></li>
                      <li><a href="pages-blog.html"><i className="sl sl-icon-docs" /> Blog</a></li>
                    </ul>
                  </div>
                  <div className="mega-menu-section">
                    <ul>
                      <li className="mega-menu-headline">Pages #2</li>
                      <li><a href="pages-contact.html"><i className="sl sl-icon-envelope-open" /> Contact</a></li>
                      <li><a href="pages-coming-soon.html"><i className="sl sl-icon-hourglass" /> Coming Soon</a></li>
                      <li><a href="pages-404.html"><i className="sl sl-icon-close" /> 404 Page</a></li>
                      <li><a href="pages-masonry-filtering.html"><i className="sl sl-icon-equalizer" /> Masonry Filtering</a></li>
                    </ul>
                  </div>
                  <div className="mega-menu-section">
                    <ul>
                      <li className="mega-menu-headline">Other</li>
                      <li><a href="pages-elements.html"><i className="sl sl-icon-settings" /> Elements</a></li>
                      <li><a href="pages-pricing-tables.html"><i className="sl sl-icon-tag" /> Pricing Tables</a></li>
                      <li><a href="pages-typography.html"><i className="sl sl-icon-pencil" /> Typography</a></li>
                      <li><a href="pages-icons.html"><i className="sl sl-icon-diamond" /> Icons</a></li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
          <div className="clearfix" />
          {/* Main Navigation / End */}
        </div>
        {/* Left Side Content / End */}
        {/* Right Side Content / End */}
        <div className="right-side">
          <div className="header-widget">
            <a href="#sign-in-dialog" className="sign-in popup-with-zoom-anim"><i className="sl sl-icon-login" /> Sign In</a>
            <a href="dashboard-add-listing.html" className="button border with-icon">Add Listing <i className="sl sl-icon-plus" /></a>
          </div>
        </div>
        {/* Right Side Content / End */}
        {/* Sign In Popup */}
        <div id="sign-in-dialog" className="zoom-anim-dialog mfp-hide">
          <div className="small-dialog-header">
            <h3>Sign In</h3>
          </div>
          {/*Tabs */}
          <div className="sign-in-form style-1">
            <ul className="tabs-nav">
              <li className><a href="#tab1">Log In</a></li>
              <li><a href="#tab2">Register</a></li>
            </ul>
            <div className="tabs-container alt">
              {/* Login */}
              <div className="tab-content" id="tab1" style={{display: 'none'}}>
                <form method="post" className="login">
                  <p className="form-row form-row-wide">
                    <label htmlFor="username">Username:
                      <i className="im im-icon-Male" />
                      <input type="text" className="input-text" name="username" id="username" defaultValue />
                    </label>
                  </p>
                  <p className="form-row form-row-wide">
                    <label htmlFor="password">Password:
                      <i className="im im-icon-Lock-2" />
                      <input className="input-text" type="password" name="password" id="password" />
                    </label>
                    <span className="lost_password">
                      <a href="#">Lost Your Password?</a>
                    </span>
                  </p>
                  <div className="form-row">
                    <input type="submit" className="button border margin-top-5" name="login" defaultValue="Login" />
                    <div className="checkboxes margin-top-10">
                      <input id="remember-me" type="checkbox" name="check" />
                      <label htmlFor="remember-me">Remember Me</label>
                    </div>
                  </div>
                </form>
              </div>
              {/* Register */}
              <div className="tab-content" id="tab2" style={{display: 'none'}}>
                <form method="post" className="register">
                  <p className="form-row form-row-wide">
                    <label htmlFor="username2">Username:
                      <i className="im im-icon-Male" />
                      <input type="text" className="input-text" name="username" id="username2" defaultValue />
                    </label>
                  </p>
                  <p className="form-row form-row-wide">
                    <label htmlFor="email2">Email Address:
                      <i className="im im-icon-Mail" />
                      <input type="text" className="input-text" name="email" id="email2" defaultValue />
                    </label>
                  </p>
                  <p className="form-row form-row-wide">
                    <label htmlFor="password1">Password:
                      <i className="im im-icon-Lock-2" />
                      <input className="input-text" type="password" name="password1" id="password1" />
                    </label>
                  </p>
                  <p className="form-row form-row-wide">
                    <label htmlFor="password2">Repeat Password:
                      <i className="im im-icon-Lock-2" />
                      <input className="input-text" type="password" name="password2" id="password2" />
                    </label>
                  </p>
                  <input type="submit" className="button border fw margin-top-10" name="register" defaultValue="Register" />
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Sign In Popup / End */}
      </div>
    </div>
    {/* Header / End */}
  </header>
  )
}
