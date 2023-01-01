import React, { Component } from 'react';
import Link from 'next/link';
import committee2122Data from '../../data/committee/2122Data';

class PublicityTeam extends Component {


    render() {

        return (
           <section className="teacher__area pt-50 pb-50">
               <div className="container">
                  <div className="row">
                     <div className="col-xxl-6 offset-xxl-3">
                        <div className="section__title-wrapper text-center mb-10">
                           <h2 className="section__title">
                              <span className="yellow-bg"> Publicity & Public Relation <img src="/assets/img/shape/yellow-bg-2.png" alt="img not found" /></span> Team
                           </h2>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                  { committee2122Data.slice(25, 35).map(item => (
                     <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                        <div className="teacher__item text-center grey-bg-5 transition-3 mb-30">
                           <div className="teacher__thumb w-img fix">
                             <img className="object-fill w-32 h-64" src={item.img} alt="img not found" />
                           </div>
                           <div className="teacher__content">
                              <h3 className="teacher__title">{item.name}</h3> 
                              <h4 className="p-2"><span>{item.position}</span></h4>
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

export default PublicityTeam;