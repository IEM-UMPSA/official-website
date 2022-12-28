import React, { Component } from 'react';
import Link from 'next/link';


class ErrorMain extends Component {
    
    render() {
        return (
            <main>
                <section className="error__area pt-200 pb-200">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                                <div className="error__item text-center">
                                    <div className="error__thumb mb-45">
                                    <img src="assets/img/error/error.png" alt="img not found"/>
                                    </div>
                                    <div className="error__content">
                                    <h3 className="error__title">Page Not Found!</h3>
                                    <p>Please try searching for some other page.</p>
                                    <Link href="/"><a className="e-btn e-btn-3 e-btn-4">Back To Home</a></Link>
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

export default ErrorMain;