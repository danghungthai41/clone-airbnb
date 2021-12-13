import React from 'react'

export default function ContactPage() {
    return (
        <div id="wrapper">
 
 
  {/* Content
  ================================================== */}
  {/* Map Container */}
  <div className="contact-map margin-bottom-60">
    {/* Google Maps */}
    <div id="singleListingMap-container">
      <div id="singleListingMap" data-latitude="40.70437865245596" data-longitude="-73.98674011230469" data-map-icon="im im-icon-Map2" />
      <a href="#" id="streetView">Street View</a>
    </div>
    {/* Google Maps / End */}
    {/* Office */}
    <div className="address-box-container">
      <div className="address-container" data-background-image="images/our-office.jpg">
        <div className="office-address">
          <h3>Our Office</h3>
          <ul>
            <li>John Street 304</li>
            <li>New York</li>
            <li>Phone (123) 123-456 </li>
          </ul>
        </div>
      </div>
    </div>
    {/* Office / End */}
  </div>
  <div className="clearfix" />
  {/* Map Container / End */}
  {/* Container / Start */}
  <div className="container">
    <div className="row">
      {/* Contact Details */}
      <div className="col-md-4">
        <h4 className="headline margin-bottom-30">Find Us There</h4>
        {/* Contact Details */}
        <div className="sidebar-textbox">
          <p>Collaboratively administrate channels whereas virtual. Objectively seize scalable metrics whereas proactive e-services.</p>
          <ul className="contact-details">
            <li><i className="im im-icon-Phone-2" /> <strong>Phone:</strong> <span>(123) 123-456 </span></li>
            <li><i className="im im-icon-Fax" /> <strong>Fax:</strong> <span>(123) 123-456 </span></li>
            <li><i className="im im-icon-Globe" /> <strong>Web:</strong> <span><a href="#">www.example.com</a></span></li>
            <li><i className="im im-icon-Envelope" /> <strong>E-Mail:</strong> <span><a href="#">office@example.com</a></span></li>
          </ul>
        </div>
      </div>
      {/* Contact Form */}
      <div className="col-md-8">
        <section id="contact">
          <h4 className="headline margin-bottom-35">Contact Form</h4>
          <div id="contact-message" /> 
          <form method="post" action="contact.php" name="contactform" id="contactform" autoComplete="on">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <input name="name" type="text" id="name" placeholder="Your Name" required="required" />
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <input name="email" type="email" id="email" placeholder="Email Address" pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$" required="required" />
                </div>
              </div>
            </div>
            <div>
              <input name="subject" type="text" id="subject" placeholder="Subject" required="required" />
            </div>
            <div>
              <textarea name="comments" cols={40} rows={3} id="comments" placeholder="Message" spellCheck="true" required="required" defaultValue={""} />
            </div>
            <input type="submit" className="submit button" id="submit" defaultValue="Submit Message" />
          </form>
        </section>
      </div>
      {/* Contact Form / End */}
    </div>
  </div>
  {/* Container / End */}
  {/* Back To Top Button */}
  <div id="backtotop"><a href="#" /></div>
</div>

    )
}
