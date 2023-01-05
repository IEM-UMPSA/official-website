import React, { Component } from 'react';
import Link from 'next/link';
import developerData from '../../data/developerData';

class TeacherTwo extends Component {

    render() {

        return (
           <section className="teacher__area pt-115 pb-110">
           <div className="container">
              <div className="row">
                 <div className="col-xxl-6 offset-xxl-3">
                    <div className="section__title-wrapper text-center mb-20">
                       <h2 className="section__title">Meet Our Prestige <br/>
                           <span className="yellow-bg"> Development Team <img src="assets/img/shape/yellow-bg-2.png" alt="img not found"/>  </span> <br/>
                       </h2>
                       <p>Thanks for your effort and contribution.</p>
                    </div>
                 </div>
              </div>
              <div className="row">

              { developerData.map(item => (
                 <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <div className="teacher__item text-center grey-bg-5 transition-3 mb-30">
                       <div className="teacher__thumb w-img fix">
                          <Link href="/instructor"><img className="w-40 h-96    object-cover" src={item.img} alt="img not found"/></Link>
                       </div>
                       <div className="teacher__content">
                          <h3 className="teacher__title">{item.name}</h3> 
                          
                          <h4 className="p-2"><span>{item.position}</span></h4>

                          <div className="teacher__social">
                              <ul>
                                <li><a href={item.github} target="_blank"><i className="fab fa-github"></i></a></li>
                                <li><a href={item.linkedin} target="_blank"><i className="fab fa-linkedin"></i></a></li>
                                {/* <li><a href={item.website}><i className="fab fa-chrome"></i></a></li> */}
                             </ul>
                          </div>
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

export default TeacherTwo;