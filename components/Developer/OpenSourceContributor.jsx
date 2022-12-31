import React, { Component } from 'react';
import Link from 'next/link';
import osDeveloperData from '../../data/osDeveloperData';

class OpenSourceContributor extends Component {

    render() {

        return (

         
         <div className="container my-24 px-6 mx-auto">
         
         
           <section className="mb-32 text-gray-800 text-center">
             <h2 className="section__title text-3xl font-bold mb-12"> Open Source <span className="yellow-bg">Contributors<img src="assets/img/shape/yellow-bg-2.png" alt="img not found"/>  </span></h2>
         

             <div className="grid md:grid-cols-4 xl:grid-cols-5 gap-x-6 lg:gap-xl-12 ">

             { osDeveloperData.map(item => (
               <div className="mb-12">
                 <img src={item.img} className="w-40 h-40 object-cover rounded-full mx-auto shadow-lg mb-4" alt=""/>
                 <p className="font-bold mb-2">{item.name}</p>
                 <p className="text-gray-500">{item.position}</p>
               </div>
                 
                 ))}
             
         
               
             </div>
           </section>
          
         
         </div>
      
        )
    }
}

export default OpenSourceContributor;