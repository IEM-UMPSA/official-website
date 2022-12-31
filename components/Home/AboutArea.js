import Link from 'next/link';

const AboutArea = () => {
  return <>
    <div id="about-area" className="grey-bg-2 tpabout-area pt-140 pb-90">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="tpabout-content-2 pb-50">
              <h3 className="tpabout-xd-title mb-15"><b>IEM-UMPSS</b> </h3>
              <span className="tpabout-xs-title mb-10">Embark on Professionalism</span>
              <p className="tpab-text mb-10">The Institution of Engineers Malaysia – Univerisiti Malaysia Pahang Student Section (IEM-UMPSS)
offers a variety of programs and events for university students who want to be recognized for their
engineering experience and professional achievements. University students can also be evaluated
for proficiency in order to be eligible for Professional Engineer registration. </p>
              <p>Moreover, students are
exposed to a variety of opportunities to connect with fellow engineers in Malaysia's private and
public sectors, as well as regional and international engineering organizations. IEM-UMPSS provide
a platform for students to gain knowledge and experiences by participating in a variety of activities
such as engineering talks, workshops, games, site visits, conferences, and more.</p>
              <div className="tpabout-btn mt-50">
                <Link href="/contact" className="tp-solid-btn">Get in touch</Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6"> 
                                 <div className="hero__thumb d-flex p-relative"> 
                                  <div className="hero__thumb-shape">
                                      <img className="hero-1-dot" src="assets/img/shape/hero/hero-1-dot.png" alt="img not found"/>
                                      {/* <img className="hero-1-circle-3" src="assets/img/shape/hero/hero-1-circle-3.png" alt="img not found"/> */}
                                      <img className="hero-1-circle-4" src="assets/img/shape/hero/hero-1-circle-4.png" alt="img not found"/>
                                  </div> 
                                  <div className="hero__thumb-big mr-30">
                                      <img src="assets/img/hero/IEM-logo.png" alt="img not found"/>
                                      {/* <div className="hero__quote hero__quote-animation">
                                          <span>⚓ Set the sail ⚓</span>
                                          <h4>Embark 🌊 on Professionalism 🧭</h4>
                                      </div>   */}
                                  </div>
                                 {/* <div className="hero__thumb-sm mt-50 d-none d-lg-block">
                                      <img src="assets/img/hero/IEM-logo.png" alt="img not found"/>
                                  </div>   */}
                                   </div> 
                               </div> 
        </div>
      </div>
    </div>
  </>;
};

export default AboutArea;