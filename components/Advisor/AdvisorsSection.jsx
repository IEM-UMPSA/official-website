import React, { Component } from 'react';
import Link from 'next/link';
import advisorData from '../../data/advisorData';

class Advisor extends Component {

    render() {

        return (
           <section className="teacher__area pt-115 pb-50">
               <div className="container">
                  <div className="row">
                     <div className="col-xxl-6 offset-xxl-3">
                        <div className="section__title-wrapper text-center mb-10">
                           <h2 className="section__title">
                              Club&apos;s <span className="yellow-bg"> Advisors <img src="/assets/img/shape/yellow-bg-2.png" alt="img not found" />  </span> <br />
                           </h2>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                  { advisorData.map(item => (
                     <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                        <div className="teacher__item text-center grey-bg-5 transition-3 mb-30">
                           <div className="teacher__thumb w-img fix">
                              <Link href={item.website}><img src={item.img} alt="img not found" /></Link>
                           </div>
                           <div className="teacher__content">
                              <h3 className="teacher__title"><Link href={item.website}>{item.name}</Link></h3> 
                           </div>
                        </div>
                     </div>
                     ))}
                  </div>
         
               </div>
            </section>
        );
    }
}

export default Advisor;