import React from 'react';

const ServiceDetailsArea = () => {
  return (
    <>
      <div className="services-details-area pt-140 pb-105">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="services-sm-image w-img mb-45">
                <img src="assets/img/services/services-d1.jpg" alt="services-sm-img" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="services-sm-image w-img mb-45">
                <img src="assets/img/services/services-d2.jpg" alt="services-sm-img" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <h4 className="services-d-title mb-25">Looking for a partnership?</h4>
              <p className="services-text mb-25">The Institution of Engineers Malaysia - UMP Student Section was established in 2013 and its primary function is to promote and advance the science and profession of engineering in any or all of its disciplines and to facilitate the exchange of information and ideas related to engineering.</p>
              
              <h4 className="services-d-title mb-25">Our Vision </h4>
              <p className="services-text mb-25">To cultivate and expose students into the professional engineering world</p>

              <h4 className="services-d-title mb-25">Who are we looking?  </h4>
              <ul className="services-text mb-25">
                <li>Universities students.</li>
                <li>Engineering companies.</li>
                <li>Individuals who willing to share their knowledge in the engineering fields. </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsArea;