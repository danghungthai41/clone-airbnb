import React from "react";

export default function Review() {
  return (
    <section
      className="fullwidth padding-top-75 padding-bottom-30"
      data-background-color="#fff"
    >
      {/* Info Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <h3 className="headline centered headline-extra-spacing">
              <strong className="headline-with-separator">
                What Our Users Say
              </strong>
              <span className="margin-top-25">
                We collect reviews from our users so you can get an honest
                opinion of what an experience with our website are really like!
              </span>
            </h3>
          </div>
        </div>
      </div>
      {/* Info Section / End */}
      {/* Categories Carousel */}
      <div className="fullwidth-carousel-container margin-top-20 no-dots">
        <div className="testimonial-carousel testimonials">
          {/* Item */}
          <div className="fw-carousel-review">
            <div className="testimonial-box">
              <div className="testimonial">
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation is on the runway
                heading towards a streamlined cloud solution user generated
                content.
              </div>
            </div>
            <div className="testimonial-author">
              <img src="images/happy-client-01.jpg" alt />
              <h4>
                Jennie Smith <span>Coffee Shop Owner</span>
              </h4>
            </div>
          </div>
          {/* Item */}
          <div className="fw-carousel-review">
            <div className="testimonial-box">
              <div className="testimonial">
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps. Nanotechnology immersion
                along the information highway will close the loop.
              </div>
            </div>
            <div className="testimonial-author">
              <img src="images/happy-client-02.jpg" alt />
              <h4>
                Tom Baker <span>Clothing Store Owner</span>
              </h4>
            </div>
          </div>
          {/* Item */}
          <div className="fw-carousel-review">
            <div className="testimonial-box">
              <div className="testimonial">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy
                foster collaborative thinking to further the overall value
                proposition. Organically grow the holistic world view.
              </div>
            </div>
            <div className="testimonial-author">
              <img src="images/happy-client-03.jpg" alt />
              <h4>
                Jack Paden <span>Restaurant Owner</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
      {/* Categories Carousel / End */}
    </section>
  );
}
