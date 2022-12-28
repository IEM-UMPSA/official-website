import React, { Component } from 'react';
import Link from 'next/link';

class Cta extends Component {

    render() {

        return (
        <main>
            <section className="cta__area mb--120">
                <div className="container">
                    <div className="cta__inner blue-bg fix">
                        <div className="cta__shape">
                            <img src="assets/img/cta/cta-shape.png" alt="img not found"/>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-xxl-7 col-xl-7 col-lg-8 col-md-8">
                                <div className="cta__content">
                                <h3 className="cta__title">You can be your own Guiding star with our help</h3>
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-5 col-lg-4 col-md-4">
                                <div className="cta__more d-md-flex justify-content-end p-relative z-index-1">
                                    <Link href="/contact"><a className="e-btn e-btn-white">Get Started</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        );
    }
}

export default Cta;