import React, { Component } from 'react';
import Link from 'next/link';
import osDeveloperData from '../../data/osDeveloperData';

class OpenSourceContributor extends Component {

    render() {

        return (

         
         <div className="container my-24 px-6 mx-auto">
         
         
           <section className="mb-32 text-gray-800 text-center">
             <h2 className="text-3xl font-bold mb-12">Open Source <u className="text-blue-600">Contributors</u></h2>
         

             <div className="grid md:grid-cols-4 xl:grid-cols-5 gap-x-6 lg:gap-xl-12 ">

             { osDeveloperData.map(item => (
               <div className="mb-12">
                 <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" className="w-40 rounded-full mx-auto shadow-lg mb-4" alt=""/>
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