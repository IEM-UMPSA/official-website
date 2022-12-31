import React, { Component } from 'react';
import Link from 'next/link';
import committee2223Data from '../../data/committee/2223Data';

class PublicityTeam extends Component {


    render() {

        return (
           <section className="teacher__area pt-20 pb-100">
               <div className="container">
                  <div className="row">
                     <div className="col-xxl-6 offset-xxl-3">
                        <div className="section__title-wrapper text-center mb-10">
                           <h2 className="section__title">
                           Publicity & Public Relation<span className="yellow-bg"> (SUB DIVISION IEM UTM) <img src="/assets/img/shape/yellow-bg-2.png" alt="img not found" /></span> 
                           </h2>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                  { committee2223Data.slice(44, 46).map(item => (
                     <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                        <div className="teacher__item text-center grey-bg-5 transition-3 mb-30">
                           <div className="teacher__thumb w-img fix">
                             <img className="object-cover w-52 h-64" src={item.img} alt="img not found" />
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