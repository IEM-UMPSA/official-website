import React from 'react';
import Link from 'next/link';

const FooterBottom = () => {
    return (
        <div className="footer__bottom">
            <div className="container">
                <div className="row">
                <div className="col-xxl-6 col-xl-6">
                    <div className="footer__copyright text-left">
                        <p>&copy; {new Date().getFullYear()} IEM-UMPSS, All Rights Reserved. Developed By <Link href="/">IEM Web Dev</Link></p>
                    </div>
                </div>

                <div className="col-xxl-6 col-xl-6">
                    <div className="footer__copyright text-right f-right">
                    <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>


                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default FooterBottom;