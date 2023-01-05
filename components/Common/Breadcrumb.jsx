import React, { Component } from 'react';
import Link from 'next/link';

const Breadcrumb = (props) => {
   const { pageTitle } = props;
     return (
        <section className="page__title-area page__title-height page__title-overlay d-flex align-items-center" style={{ backgroundImage:`url(${'assets/img/page-title/page-title-by-tan.jpg'})`}}>
           <div className="container">
              <div className="row">
                 <div className="col-xxl-12">
                    <div className="page__title-wrapper mt-110">
                       <h3 className="page__title">{ pageTitle ? pageTitle : 'Event'}</h3>                         
                       <nav aria-label="breadcrumb">
                          <ol className="breadcrumb">
                             <li className="breadcrumb-item"><Link href="/" as="/">Home</Link></li>
                             <li className="breadcrumb-item active" aria-current="page">{ pageTitle ? pageTitle : 'Event'}</li>
                          </ol>
                       </nav>
                    </div>
                 </div>
              </div>
           </div>
        </section>
     );
   }
   
   export default Breadcrumb;

